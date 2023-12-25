'use client';

import PasswordShow from "../../../../public/assets/eyes-open"
import PasswordNotShow from "../../../../public/assets/eyes-not-open"
import RightArrow from '../../../../public/assets/right-arrow';
import AppleStoreIcon from '../../../../public/assets/apple-store';
import House from "../../../../public/assets/house";
import cn from 'classnames'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthSignInValidator, TAuthSignInValidator } from '@/lib/validators/account-credential-validator';
import { trpc } from "@/trpc/client";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const Item = () => {
  const [show1,setShow1] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const origin = searchParams.get('origin')

  const { register, handleSubmit, formState: { errors } } = useForm<TAuthSignInValidator>({
    resolver: zodResolver(AuthSignInValidator)
  })

  const { mutate } = trpc.auth.signInUser.useMutation({
    onSuccess: () => {
      toast.success('Signed in successfully.')
      router.refresh()
      if(origin) {
        router.push(`/${origin}`)
        return
      }
      router.push('/')
    },
    onError: (err) => {
      if(err.data?.code === "UNAUTHORIZED"){
        toast.error("Invalid email or password.")
      }
    }
  })

  const onSubmit = ({ email, password }: TAuthSignInValidator ) => {
    mutate({ email, password })
  }

  return (
    <>
      <div className="padding-x bg-grey-50 h-12 flex items-center">
        <div className="text-sm breadcrumbs">
          <ul className="body-small-400 text-grey-600">
            <li><House/><a className="ml-2">Home</a></li> 
            <li><a>User Account</a></li> 
            <li className="text-secondary-500 body-small-500">Sign In</li>
          </ul>
        </div>
      </div>
      <div className="padding-x py-16 flex justify-center items-center">
        <div className="w-1/3 border border-grey-100 shadow-navDropdown rounded pb-6">
          <div className="inline-flex items-start w-full text-center body-xl-600">
            <div className="w-1/2 py-2.5 shadow-sign-checked text-grey-500"><a href="">Sign In</a></div>
            <div className="w-1/2 py-2.5 shadow-sign-not-checked cursor-pointer"><a href="/sign-up">Sign Up</a></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="POST" className="items-start gap16px w-full padding32px form-control">
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
              <div className="flex justify-between">
                <label className="body-small-400">Password</label>
                <a href="/forget-password" className="body-small-500 text-secondary-500">Forget Password</a>
              </div>
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
            <button type="submit" className='btn yellow-btn w-full h-10 heading-05 mt-4'>SIGN IN <RightArrow/></button>
          </form>
          <div className='flex flex-col gap12px paddingx32px'>
            <div className="divider m-0 body-small-400 text-grey-500">or</div>
            <a href="" className='flex items-center gap-20 py-2 pl-2.5 border border-grey-100 rounded-sm text-grey-700 body-small-400 cursor-pointer'>
              <img src='/google-logo.png' className='h-5'/>Sign in with Google
            </a>
            <a href='' className='flex items-center gap-20 py-2 pl-2.5 border border-grey-100 rounded-sm text-grey-700 body-small-400 cursor-pointer'>
              <span className='sign-icon'><AppleStoreIcon/></span>Sign in with Apple
            </a>
          </div>
        </div>
      </div>
    </>
  )
} 