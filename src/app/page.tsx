"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Coins, Zap, Lock, Image as ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema, formType } from "@/types/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";

export default function TokenLaunchPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tokenName: "",
      symbol: "",
      imageUrl: "",
      metadataUri: "",
      supply: 0,
      decimals: 9,
      description: "",
      freezeAuth: false,
      publicKey: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/90 to-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-[200%] h-full left-[50%] top-0 translate-x-[-50%] stroke-gray-300/70 [mask-image:radial-gradient(48rem_48rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(0 0)"
            >
              <path d="M.5 100V.5H100" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="bg-clip-text bg-gradient-to-br from-30% from-white to-white/40 opacity-1 pt-8 pb-0 font-medium text-5xl text-balance text-transparent sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
            SolMint
          </h1>
          <span className="mt-[-32px] text-xl bg-clip-text bg-gradient-to-br from-20% from-white to-white/40 opacity-1">
            Create and deploy your custom token on Solana Blockchain
          </span>
          x
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="bg-gray-900/60 border-gray-700 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2 text-white">
                  <Coins className="w-6 h-6 text-yellow-500" />
                  Token Details
                </CardTitle>
                <CardDescription className=" text-gray-300">
                  Fill in the details for your new Solana token
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="tokenName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Token Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="sohailX"
                            className="bg-gray-800/60 border-gray-700 text-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="symbol"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Symbol
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="SOHX"
                            className="bg-gray-800/60 border-gray-700 text-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Image URL
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="url"
                              placeholder="https://..."
                              className="bg-gray-800/60 border-gray-700 pl-10 text-gray-200"
                              {...field}
                            />
                            <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="metadataUri"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Metadata URI
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://..."
                            className="bg-gray-800/60 border-gray-700 text-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="supply"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Total Supply
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="1000000"
                            className="bg-gray-800/60 border-gray-700 text-gray-200"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="decimals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Decimals
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="9"
                            className="bg-gray-800/60 border-gray-700 text-gray-200"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">
                        Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your token..."
                          className="bg-gray-800/60 border-gray-700 text-gray-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="freezeAuth"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm font-medium text-gray-300 flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Enable Freeze Authority
                        </FormLabel>
                        <FormDescription>
                          Allow freezing of token accounts
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-green-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="publicKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">
                        Your Solana Public Key
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Solana public key"
                          className="bg-gray-800/60 border-gray-700 text-gray-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                    <Zap className="w-5 h-5 mr-2" />
                    Launch Token
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center text-white z-20 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full">
                    🚀
                  </div>
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
