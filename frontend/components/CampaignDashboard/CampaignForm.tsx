import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import Upload from "../Upload";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useAccount } from "wagmi";
import useCreateCampaign from "@/hooks/useCreateCampaign";
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

const FormSchema = z.object({
  CampaignName: z.string(),
  TargetAudienceSize: z.coerce.number(),
  Cpa: z.coerce.number(),
  Address: z.string(),
  GraphQL: z.string(),
});

type AddBlockPopupProps = {
  onClose: () => void; // This means onClose is a function that doesn't return anything.
};

function CampaignForm({ onClose }: AddBlockPopupProps) {
  const router = useRouter();
  const [campaignInput, setCampaignInput] = useState("");

  const { address, connector, isConnected } = useAccount();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { watch } = form;
  const handleUploadSuccess = (url: string) => {
    console.log(url);
    form.setValue("GraphQL", url);
  };
  const audienceSize = watch("TargetAudienceSize");
  const cpa = Number(watch("Cpa") ?? 0);
  const graphQL = watch("GraphQL");
  const campaignName = watch("CampaignName");
  const promoteAddress = watch("Address");
  const targetSize = Number(watch("TargetAudienceSize") ?? 0);
  const reward = cpa * targetSize;

  // console.log(campaignName, promoteAddress, reward, cpa, graphQL)
  // @ts-ignore
  const { write, isLoading, isSuccess, data } = useCreateCampaign(
    campaignName,
    promoteAddress as `0x${string}`,
    reward,
    cpa,
    graphQL,
  );

  const onSubmit = () => {
    if (write) {
      write();
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
          <Upload title={"Upload the config to retrieve eligible address"} onUploadSuccess={handleUploadSuccess} />

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
      <div></div>
    </div>
  );
}

export default CampaignForm;
