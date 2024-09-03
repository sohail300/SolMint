import { z } from "zod";

export const formSchema = z.object({
  tokenName: z.string().min(1, "Token name is required"),
  symbol: z
    .string()
    .min(1, "Symbol is required")
    .max(10, "Symbol must be 10 characters or less"),
  imageUrl: z.string().url("Must be a valid URL"),
  metadataUri: z.string().url("Must be a valid URL"),
  supply: z.number().positive("Supply must be positive"),
  decimals: z.number().int().min(0).max(9, "Decimals must be between 0 and 9"),
  description: z
    .string()
    .max(500, "Description must be 500 characters or less"),
  freezeAuth: z.boolean(),
  publicKey: z
    .string()
    .regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/, "Invalid Solana public key"),
});

export type formType = z.infer<typeof formSchema>;
