'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const router = useRouter()

    const LoginHandler = (e: any) => {
        e.preventDefault()
        fetch('/api/auth/login', {
            method: 'POST',
            body : JSON.stringify({
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value
            })
        })
    }

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image onClick={() => router.push('/')} width={20} height={20} alt="LegacyRoleplay" src="/icons/LPRP.png" className="mx-auto h-10 w-auto cursor-pointer"/>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="POST" className="space-y-6" onSubmit={(e) => LoginHandler(e)}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-white"> Email address </label>
            <div className="mt-2">
              <input id="email" name="email" type="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>
          </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-white">Password</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-blue-700 hover:text-blue-500">Forgot password?</a>
            </div>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" > Sign in </button>
        </div>
      </form>
      <div className="flex justify-between items-center mt-12">
        <div className="w-24 sm:w-28 h-0.5 bg-gray-800"></div>
        <p className="text-white  text-sm">Or continue with</p>
        <div className="w-24 sm:w-28 h-0.5 bg-gray-800"></div>
      </div>
      <div className="flex gap-4 justify-center mt-6 px-2 sm:px-2">
        <Button className="flex basis-1/2 items-center gap-2"><Image src={"/png/Google.png"} alt="google" width={20} height={20}/> Google </Button>
        <Button className="flex basis-1/2 items-center gap-1"><Image src={"/png/GitHub.png"} alt="GitHub" width={30} height={30}/> GitHub</Button>
      </div>
      <p className="mt-10 text-center text-sm/6 text-gray-500 flex gap-2 justify-center">
        Not a member?{" "}
        <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500" >
          Create an Account Now ! 
        </Link>
      </p>
    </div>
  </div>
  )
}
