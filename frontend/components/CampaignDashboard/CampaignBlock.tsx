import { zodResolver } from "@hookform/resolvers/zod";
import useGetAllCampaigns from "@/hooks/useGetAllCampaigns";
import useGetCampaignOwner from "@/hooks/useGetCampaignOwner";
import { parseEther } from "viem";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Upload from '../Upload';
import Link from 'next/link';
import * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import useCreateCampaign from "@/hooks/useCreateCampaign";

function MyCampaignDashboard() {
    const {address, connector, isConnected} = useAccount();
    const {data: campaigns, isLoading, isSuccess} = useGetAllCampaigns();
    if (isSuccess) {
        console.log(campaigns);
    return (
        <BlocksList blocks={campaigns} />
    );
    } else {
        return (
            <div>
                <p> Loading... </p>
            </div>
        );
    }
}

function BlocksList({ blocks }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      {blocks.map((block, index) => (
          <FilteredBlock block={block} key={index} />
    ))}
    <div
        className="border p-4 rounded-3xl text-gray-400 cursor-pointer text-center"
        onClick={() => setShowPopup(true)}
     >
          Create New
      </div>
      {showPopup && <AddBlockPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

function FilteredBlock({ block }) {
  const [showPopup, setShowPopup] = useState(false);
  const {address, connector, isConnected} = useAccount();
  const {data:owner, isLoading, isSuccess} = useGetCampaignOwner(block.id);
      if (owner == address) { 
          return (
            <div className="border p-4 rounded-3xl">
              <h3 className="font-bold">{block.name}</h3>
              <p className="text-sm text-gray-600 mb-10">{block.createTime}</p>
              <p className="">{`${block.audience - block.reward / block.cpa}`} / {`${block.audience}`} claimed </p>
      </div>)
      }
}

const FormSchema = z
  .object({
    CampaignName: z.string(),
    TargetAudienceSize: z.coerce.number(),
    Cpa: z.coerce.number(),
    Address: z.string(),
    GraphQL: z.string()
  });

function CampaignForm({onClose}){
  const router = useRouter();
  const [campaignInput, setCampaignInput] = useState('')

  const { address, connector, isConnected } = useAccount();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
    const {watch} = form;
    const handleUploadSuccess = (url) => {
        console.log(url);
        form.setValue("GraphQL", url);
    };
    const audienceSize = watch("TargetAudienceSize");
    const cpa = Number(watch('Cpa')??0);
    const graphQL = watch("GraphQL");
    const campaignName =  watch('CampaignName')
    const promoteAddress = watch('Address') 
    const targetSize = Number(watch('TargetAudienceSize')??0)
    const reward = cpa * targetSize

    // console.log(campaignName, promoteAddress, reward, cpa, graphQL)
    // @ts-ignore
    const { write, isLoading, isSuccess, data} = useCreateCampaign(campaignName,promoteAddress,reward, cpa, graphQL)

    const onSubmit = () => {
      if(write){
        write()
      }
    };
    return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="CampaignName"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Campaign Name </FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="CampaignName" />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center w-full space-x-2">
              <FormField
                control={form.control}
                name="TargetAudienceSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Target Audience Size </FormLabel>
                    <FormControl>
                      <Input type="number" step="10" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Cpa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Reward Per Acquisition </FormLabel>
                    <FormControl>
                      <Input type="number" step="0.0001" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>

          <FormField
            control={form.control}
            name="Address"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Contract to promote </FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="0x123..." />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Upload onUploadSuccess={handleUploadSuccess} />

          <div className="flex flex-row items-center w-full space-x-2 justify-between">
              <Button type="submit" className="mt-4">
                Submit
              </Button>
              <Button type="button" className="mt-4" onClick={onClose}>
                Cancel
              </Button>
          </div>
        </form>
      </Form>
      <div>
      </div>
    </div>
    )


}


function AddBlockPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Campaign</h2>
        <CampaignForm onClose={onClose}/>
      </div>
    </div>
  );
}

export default MyCampaignDashboard;
