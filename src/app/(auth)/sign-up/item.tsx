'use client';

import PasswordShow from "../../../../public/assets/eyes-open"
import PasswordNotShow from "../../../../public/assets/eyes-not-open"
import RightArrow from '../../../../public/assets/right-arrow';
import AppleStoreIcon from '../../../../public/assets/apple-store';
import cn from 'classnames'
import House from "../../../../public/assets/house";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthCredentialsValidator, TAuthCredentialsValidator } from '../../../lib/validators/account-credential-validator';
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { trpc } from "@/trpc/client";

export const Item = () => {
  const [show1,setShow1] = useState(false)
  const [show2,setShow2] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator)
  })

  const { mutate: Signup } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if(err.data?.code === "CONFLICT") {
        toast.error(
          'This email is already in use.'
        )
        return
      }
      toast.error('Something went wrong. Please try again.')
    },
    onSuccess: ({sentToEmail}) => {
      toast.success(`Verification email sent to ${sentToEmail}`)
      router.push('/verify-email')
    }
  })

  const onSubmit: SubmitHandler<TAuthCredentialsValidator> = (vals) => {
    Signup(vals)
  }

  return (
    <>
      <div className="padding-x bg-grey-50 h-12 flex items-center">
        <div className="text-sm breadcrumbs">
          <ul className="body-small-400 text-grey-600">
            <li><House/><a className="ml-2">Home</a></li>
            <li><a>User Account</a></li>
            <li className="text-secondary-500 body-small-500">Sign Up</li>
          </ul>
        </div>
      </div>
      <div className="padding-x py-16 flex justify-center items-center">
        <div className="w-1/3 border border-grey-100 shadow-navDropdown rounded pb-6">
          <div className="inline-flex items-start w-full text-center body-xl-600">
            <div className="w-1/2 py-2.5 shadow-sign-not-checked text-grey-500"><a href="/sign-in">Sign In</a></div>
            <div className="w-1/2 py-2.5 shadow-sign-checked cursor-pointer"><a href="">Sign Up</a></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="POST" className="items-start gap16px w-full padding32px form-control">
            <div className="flex flex-col gap8px w-full">
              <label className="body-small-400">Name</label>
              <input
                {...register("name", {required: "Name is required"})}
                name='name'
                className={cn({
                  "focus:outline-none border-red-500": errors.name,
                  "h-9 pl-2 body-large-400": true,
                })}
              />
              {errors.name && <p className="sign-error-msg">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap8px w-full">
              <label className="body-small-400">Email Address</label>
              <input type="text"
                {...register("email", {required: "Email is required"})}
                className={cn({
                  "focus:outline-none border-red-500": errors.email,
                  "h-9 pl-2 body-large-400": true,
                })}
              />
              {errors.email && <p className="sign-error-msg">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap8px w-full">
              <label className="body-small-400">Password</label>
              <div className='relative w-full'>
                <input
                  type={show1 ? 'text' : 'password'}
                  {...register("password", {required: "Password is required"})}
                  placeholder='8+ characters'
                  className={cn({
                    "focus:outline-none border-red-500": errors.password,
                    "h-9 pl-2 w-full placeholder:body-small-400 body-large-400": true
                  })}
                />
                <div className='swap absolute right-2 inset-y-1/2'>
                  {show1 ?
                    <div className='swap-off' onClick={() => setShow1(!show1)}><PasswordNotShow/></div>
                  :
                    <div onClick={() => setShow1(!show1)}><PasswordShow/></div>}
                </div>
              </div>
              {errors.password && <p className="sign-error-msg">{errors.password.message}</p>}
            </div>
            <div className="flex flex-col gap8px w-full">
              <label className="body-small-400">Confirm Password</label>
              <div className='relative w-full'>
                <input
                  type={show2 ? 'text' : 'password'}
                  {...register("confirmPassword")}
                  className={cn({
                    "focus:outline-none border-red-500": errors.password,
                    "h-9 pl-2 w-full body-large-400": true
                  })}
                />
                <div className='swap absolute right-2 inset-y-1/2'>
                  {show2 ?
                    <div className='swap-off' onClick={() => setShow2(!show2)}><PasswordNotShow/></div>
                  :
                    <div onClick={() => setShow2(!show2)}><PasswordShow/></div>}
                </div>
              </div>
              {errors.confirmPassword && <p className="sign-error-msg">{errors.confirmPassword.message}</p>}
            </div>
            <div className='flex flex-col items-start gap8px'>
              <div className="flex gap8px">
                <input
                  type='checkbox'
                  {...register("acceptTerms")}
                  className='h-4 w-4 checkbox rounded-sm border-primary-500 checked:border-primary-500 [--chkbg:theme(colors.primary.500)] [--chkfg:white]'
                />
                <label className='text-grey-700 body-small-500 leading-4'>Are you agree to Clicon <a className='text-secondary-500'>Terms of Condition</a> and <a className='text-secondary-500'>Privacy Policy</a>.</label>
              </div>
              {errors.acceptTerms && <p className="sign-error-msg">{errors.acceptTerms.message}</p>}
            </div>
            <button className='btn yellow-btn w-full h-10 heading-05 mt-4'>SIGN UP <RightArrow/></button>
          </form>
          <div className='flex flex-col gap12px paddingx32px'>
            <div className="divider m-0 body-small-400 text-grey-500">or</div>
            <a href="" className='flex items-center gap-20 py-2 pl-2.5 border border-grey-100 rounded-sm text-grey-700 body-small-400 cursor-pointer'>
              <img src='/google-logo.png' className='h-5'/>Sign up with Google
            </a>
            <a href='' className='flex items-center gap-20 py-2 pl-2.5 border border-grey-100 rounded-sm text-grey-700 body-small-400 cursor-pointer'>
              <span className='sign-icon'><AppleStoreIcon/></span>Sign up with Apple
            </a>
          </div>
        </div>
      </div>
    </>
  )
}