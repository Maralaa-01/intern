"use client"
import AccountIcon from '../../public/assets/account';
import PasswordShow from '../../public/assets/eyes-open';
import PasswordNotShow from '../../public/assets/eyes-not-open';
import RightArrow from '../../public/assets/right-arrow';
import cn from 'classnames'
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthSignInValidator, TAuthSignInValidator } from '@/lib/validators/account-credential-validator';
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const NavMiddle = () => {
  const [show,setShow] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<TAuthSignInValidator>({
    resolver: zodResolver(AuthSignInValidator)
  })

  const {mutate: signIn} = trpc.auth.signInUser.useMutation({
    onSuccess: () => {
      toast.success('Signed in successfully.')
      router.push('/')
      router.refresh()
    },
    onError: (err) => {
      if(err.data?.code === "UNAUTHORIZED"){
        toast.error("Invalid email or password.")
      }
    }
  })

  const onSubmit = ({ email, password }: TAuthSignInValidator) => {
    signIn({ email, password })
  }
  return (
    <div className="dropdown dropdown-end">
      <div className="flex items-center">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar h-auto w-auto min-h-0 middle-nav-icon">
          <AccountIcon/>
        </label>
      </div>
      <div tabIndex={0} className="card card-compact dropdown-content middle-nav-dropdown p-6 2xl:p-8 z-[1] shadow-navDropdown rounded">
        <form method="POST" onSubmit={handleSubmit(onSubmit)} className="card-body gap-3">
          <div className='form-control flex flex-col items-start gap-4 2xl:gap-5'>
            <span className='text-center text-body_medium_600 w-72 2xl:text-body_xl_600 2xl:w-[360px]'>Sign in to your account</span>
            <div className='flex flex-col w-full items-start gap-1 2xl:gap-2'>
              <span className='self-stretch text-body_xs_400 2xl:text-body_small_400'>Email Address</span>
              <input type="text" {...register("email", {required: "Email is required"})} 
                className={cn({
                  "focus:outline-none border-red-500": errors.email,
                  "overrideInput self-stretch bg-grey-0 placeholder-grey-500 border rounded-sm pl-2 border-grey-100 font-normal h-9 2xl:h-11 m-0 text-body_heading5 2xl:text-body_heading1": true,
                })} placeholder="Email address" />
            </div>
            <div className='flex flex-col w-full items-start gap-1 2xl:gap-2'>
              <div className='flex justify-between items-center self-stretch'>
                <span className='self-stretch text-body_xs_400 2xl:text-body_small_400'>Password</span>
                <a href='/forget-password' className='text-secondary-500 text-body_xs_500 cursor-pointer 2xl:text-body_small_500'>Forget Password</a>
              </div>
              <div className='relative w-full'>
                <input placeholder="Password" type={show ? 'text' : 'password'} 
                  {...register("password", {required: "Password is required"})} 
                    className={cn({
                    "focus:outline-none border-red-500": errors.password,
                    "overrideInput w-full bg-grey-0 border rounded-sm px-2 border-grey-100 font-normal h-9 2xl:h-11 m-0 text-body_heading5 2xl:text-body_heading1": true
                  })} />
                <div className='swap absolute right-2 inset-y-1/2'>
                  {show ? 
                    <div className='swap-off' onClick={() => setShow(!show)}><PasswordNotShow/></div>
                  :
                    <div onClick={() => setShow(!show)}><PasswordShow/></div>}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-block yellow-btn">
              LOGIN
              <RightArrow/>
            </button>
          </div>
          <div className='flex flex-col items-start gap-2 2xl:gap-3'>
            <div className="divider m-0 divider-grey-100 text-grey-500 text-body_xs_400 2xl:text-body_small_400">Don’t have account</div>
            <a className="btn btn-block white-btn" href="/sign-up">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}