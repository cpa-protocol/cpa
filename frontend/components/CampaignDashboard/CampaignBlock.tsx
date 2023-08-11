import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from 'react';
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

function RoleBlock({role, description, image, link} : {role: string, description: string, image: string, link: string}){
    return (
    <div className="flex flex-col relative rounded-3xl border-2 border-zinc-100 items-center">
        <div className="text-center text-black text-3xl font-bold py-4">{role}</div>
        <img className="w-1/2  h-1/2" src={image} />
        <Link href={link}>
            <div className=" px-7 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl shadow justify-center items-center gap-2.5 inline-flex m-8">
                <div className="text-center text-white text-xl font-bold">{description}</div>
            </div>
        </Link>
    </div>
    )
}

function BlocksList({ blocks }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      {blocks.map((block, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-bold">{block.title}</h3>
          <p className="text-sm text-gray-600">{block.createTime}</p>
          <p>{block.description}</p>
        </div>
      ))}
      <div
        className="border p-4 rounded bg-gray-200 text-gray-400 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        Add New Block
      </div>
      {showPopup && <AddBlockPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}


const FormSchema = z
  .object({
    CampaignName: z.string().nonempty("Required"),
    TargetAudienceSize: z.coerce.number(),
    Cpa: z.coerce.number(),
    Address: z.string().nonempty("Required"),
    Identifier: z.string().nonempty("Required"),
    GraphQL: z.string()
  });

function CampaignForm({onClose}){
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
    const onSubmit = () => {
        console.log(form.getValues());
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
                      <Input type="number" step="1" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>

          <div className="flex flex-row items-center w-full space-x-2">
          <FormField
            control={form.control}
            name="Address"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Address </FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="0x123..." />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Identifier"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Identifier </FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="0x..." />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
      </div>
          <FormField
            control={form.control}
            name="GraphQL"
            render={({ field }) => (
              <FormItem>
                <FormLabel> GraphQL Code </FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="{}" />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


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
        <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Campaign</h2>
        <CampaignForm onClose={onClose}/>
      </div>
    </div>
  );
}

export default BlocksList;


