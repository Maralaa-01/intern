'use client'
import RightArrow from "../../../../public/assets/right-arrow";
import cn from "classnames";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { trpc } from "@/trpc/client"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

export const Item = () => {
  const router = useRouter()
  
  const Input = z.object({
    token: z.string({required_error: "Token is required."})
  })
  type TInput = z.infer<typeof Input>

  const { register, handleSubmit, formState: { errors } } = useForm<TInput>({
    resolver: zodResolver(Input)
  })
  
  const {mutate: inputToken} = trpc.auth.verifyEmail.useMutation({
    onSuccess: () => {
      toast.success("You're all set! Thank you for verifying your email.")
      router.push(`/sign-in`)
    },
    onError: (err) => {
      if(err.data?.code === "UNAUTHORIZED"){
        toast.error("There was a problem. This token is not valid or might be expired. Please try again.")
      }
    },
  })

  const onSubmit = ({ token }: TInput) => {
    inputToken({ token })
  }
  return (
    <div className="flex justify-center items-center py-10">
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="inline-flex padding32px flex-col gap24px rounded border border-grey-100 shadow-navDropdown w-1/4">
          <div className="flex flex-col text-center gap12px">
            <span className="body-xl-600">Verify Your Email Address</span>
            <span className="body-small-400 text-grey-600">Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu, tristique a eu in diam.</span>
          </div>
          <div className="flex flex-col gap8px">
            <div className="flex justify-between items-center">
              <span className="body-small-400">Verification Code</span>
              <a href="" className="body-small-500 text-secondary-500">Resend Code</a>
            </div>
            <input type="text" {...register("token", {required: "Token is required"})} 
              className={cn({
                "focus:outline-none border-red-500": errors.token,
                "h-8 flex justify-start items-center pl-3 body-medium-400": true,
              })} />
          </div>
          <button type="submit" className="btn yellow-btn">VERIFY ME <RightArrow/></button>
        </form>
    </div>
  )
}