'use client'

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

// import type { Database } from '@/lib/database.types'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const router = useRouter()
  const supabase = createClientComponentClient() // <Database>

  const clearMessages = () => {
    setError('')
    setSuccess('')
  }

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return false
    }
    return true
  }

  const handleSignUp = async () => {
    clearMessages()

    if (!validatePasswords()) {
      setError('Passwords do not match.')
    }

    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (response.error) {
      setError(response.error.message)
      return
    }

    setSuccess('Account created! Check your email for confirmation link. 🎉')
    router.refresh()
  }

  const handleSignIn = async () => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (response.error) {
      setError(response.error.message)
    }

    router.refresh()
  }

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col h-full items-center justify-center w-full">
        <div className="flex flex-col bg-white/5 shadow-xl w-96 h-min rounded-lg mt-10 p-6">
          <Tabs defaultValue="signin">
            <TabsList className="flex flex-row justify-center bg-transparent gap-2">
              <TabsTrigger value="signin" onClick={() => setError("")}>Sign In</TabsTrigger>
              <TabsTrigger value="signup" onClick={() => setError("")}>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent className="z-10" value="signup">
              <div className="flex flex-col w-full justify-center z-10">
                <h2 className="font-bold text-xl text-neutral-200">
                  Welcome
                </h2>
                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                  Fill up the from and press sign up button to create account.
                </p>
                <div className="my-8 z-10">
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input className="bg-[#1d1d34]" id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input className="bg-[#1d1d34]" id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-8">
                    <Label htmlFor="confirmpassword">Repeat password</Label>
                    <Input
                      className="bg-[#1d1d34]"
                      id="confirmpassword"
                      placeholder="••••••••"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </LabelInputContainer>

                  <button
                    className="bg-indigo-500 relative group/btn block w-full text-white rounded-md h-10 font-medium"
                    onClick={handleSignUp}
                  >
                    Sign up &rarr;
                  </button>
                  <span className="text-red-500 text-sm font-extralight">
                    {error}
                  </span>
                  <span className="text-green-500 text-sm font-extralight">
                    {success}
                  </span>

                  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                  <div className="flex flex-row items-center justify-center gap-4">
                    <IconBrandGithub className="h-6 w-6 text-neutral-300" />
                    <IconBrandGoogle className="h-6 w-6 text-neutral-300" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
              </div>
            </TabsContent>
            <TabsContent value="signin">
              <div className="flex flex-col w-full justify-center">
                <h2 className="font-bold text-xl text-neutral-200">
                  Welcome
                </h2>
                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                  Fill up the from and press sign in button to log into account.
                </p>
                <div className="my-8 z-10">
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input className="bg-[#1d1d34]" id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-8">
                    <Label htmlFor="password">Password</Label>
                    <Input className="bg-[#1d1d34]" id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </LabelInputContainer>

                  <button
                    className="bg-indigo-500 relative group/btn block w-full text-white rounded-md h-10 font-medium"
                    onClick={handleSignIn}
                  >
                    Sign in &rarr;
                  </button>
                  <span className="text-red-500 text-sm font-extralight">
                    {error}
                  </span>

                  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                  <div className="flex flex-row items-center justify-center gap-4">
                    <IconBrandGithub className="h-6 w-6 text-neutral-300" />
                    <IconBrandGoogle className="h-6 w-6 text-neutral-300" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="hidden md:block absolute bottom-64 left-24 w-96 h-96 rounded-full blur-[100px] bg-gradient-to-r from-violet-600 to-indigo-600 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] bg-indigo-500 z-0"></div>
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
      </div>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};