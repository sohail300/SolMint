"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  publicKey: z.string().min(32, {
    message: "Public key must be at least 32 characters.",
  }),
  amount: z.number().positive({
    message: "Amount must be a positive number.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  shortName: z.string().min(1, {
    message: "Short name is required.",
  }),
  uri: z.string().url({
    message: "URI must be a valid URL.",
  }),
});

export default function TokenLaunchpadForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      publicKey: "",
      amount: 0,
      name: "",
      shortName: "",
      uri: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Token Creation Initiated",
      description: "Your token is being created. Please wait for confirmation.",
    });
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Create Your Solana Token
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill in the details to launch your custom token
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="publicKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Public Key</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your public key"
                      {...field}
                      className="bg-gray-700 text-white border-gray-600"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400">
                    Your Solana wallet public key
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter token amount"
                      {...field}
                      className="bg-gray-700 text-white border-gray-600"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400">
                    The total supply of your token
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Token Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter token name"
                      {...field}
                      className="bg-gray-700 text-white border-gray-600"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400">
                    The full name of your token
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shortName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Short Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter short name"
                      {...field}
                      className="bg-gray-700 text-white border-gray-600"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400">
                    A brief identifier for your token (e.g., BTC for Bitcoin)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uri"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">URI</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter token URI"
                      {...field}
                      className="bg-gray-700 text-white border-gray-600"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400">
                    A URL pointing to your token's metadata
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Create Token
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
