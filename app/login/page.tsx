import Navbar from "@/components/Navbar";
import React from "react";

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

import type { Database } from '@/lib/database.types'
import LoginForm from "./form";


export default async function Login() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="flex flex-col">
      <Navbar isAuthenticated={session !== null} />
      <div className="flex flex-col h-full items-center justify-center w-full">
        <LoginForm />
        <div className="hidden md:block absolute bottom-64 left-24 w-96 h-96 rounded-full blur-[100px] bg-gradient-to-r from-violet-600 to-indigo-600 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] bg-indigo-500 z-0"></div>
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
      </div>
    </main>
  );
}