import { AuthCredentialsValidator, AuthSignInValidator } from "../lib/validators/account-credential-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const paymentRouter = router({
})