'use client'
import RightArrow from "../../../../public/assets/right-arrow";
import { FormEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const Item = () => {
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  }
  return (
    <div className="flex justify-center items-center py-10">
      <form onSubmit={handleSubmit} className="inline-flex padding32px flex-col gap24px rounded border border-grey-100 shadow-navDropdown w-1/4">
        <div className="flex flex-col text-center gap12px">
          <span className="body-xl-600">Forget Password</span>
          <span className="body-small-400 text-grey-600">Enter the email address or mobile phone number associated with your Clicon account.</span>
        </div>
        <div className="flex flex-col gap8px">
          <span className="body-small-400">Email Address</span>
          <input type="text" name="verifyinput"  className="h-8 flex justify-start items-center pl-3 body-medium-400"/>
        </div>
        <button type="submit" className="btn yellow-btn">SEND CODE <RightArrow/></button>
        <div className="flex flex-col gap10px">
          <div className="flex gap6px">
            <span className="body-small-400 text-grey-600">Already have account?</span>
            <a href="/sign-in" className="body-small-500 text-secondary-500">Sign In</a>
          </div>
          <div className="flex gap6px">
            <span className="body-small-400 text-grey-600">Don't have account?</span>
            <a href="/sign-up" className="body-small-500 text-secondary-500">Sign Up</a>
          </div>
        </div>
        <div className="divider m-0 body-small-400 text-grey-500"></div>
        <div className="body-small-400 text-grey-700">You may contact <a href="" className="text-primary-500 body-small-500">Customer Service</a> for help restoring access to your account.</div>
      </form>
    </div>
  )
}