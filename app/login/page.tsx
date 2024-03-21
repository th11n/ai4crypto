import Navbar from "@/components/Navbar";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Login() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col h-full items-center justify-center w-full">
        <div className="flex flex-col bg-white/5 shadow-xl w-96 h-min rounded-lg mt-10 shadow-xl p-6">
          <Tabs defaultValue="account" className="">
            <TabsList className="flex flex-row justify-center bg-transparent">
              <TabsTrigger value="password">Sign In</TabsTrigger>
              <TabsTrigger className="" value="account">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent className="z-10" value="account">
              <div className="flex flex-col w-full justify-center z-10">
                <h2 className="font-bold text-xl text-neutral-200">
                  Welcome
                </h2>
                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                  Fill up the from and press sign up button to create account.
                </p>
                <form className="my-8 z-10">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname">First name</Label>
                      <Input className="bg-[#1d1d34]" id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname">Last name</Label>
                      <Input className="bg-[#1d1d34]" id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input className="bg-[#1d1d34]" id="email" placeholder="projectmayhem@fc.com" type="email" />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input className="bg-[#1d1d34]" id="password" placeholder="••••••••" type="password" />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-8">
                    <Label htmlFor="twitterpassword">Repeat password</Label>
                    <Input
                      className="bg-[#1d1d34]"
                      id="twitterpassword"
                      placeholder="••••••••"
                      type="twitterpassword"
                    />
                  </LabelInputContainer>

                  <button
                    className="bg-indigo-500 relative group/btn block w-full text-white rounded-md h-10 font-medium"
                    type="submit"
                  >
                    Sign up &rarr;
                  </button>

                  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                  <div className="flex flex-row items-center justify-center gap-4">
                    <IconBrandGithub className="h-6 w-6 text-neutral-300" />
                    <IconBrandGoogle className="h-6 w-6 text-neutral-300" />
                  </div>
                </form>
                <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
              </div>
            </TabsContent>
            <TabsContent value="password">
            <div className="flex flex-col w-full justify-center">
                <h2 className="font-bold text-xl text-neutral-200">
                  Welcome
                </h2>
                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                  Fill up the from and press sign in button to log into account.
                </p>
                <form className="my-8 z-10">
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input className="bg-[#1d1d34]" id="email" placeholder="projectmayhem@fc.com" type="email" />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-8">
                    <Label htmlFor="password">Password</Label>
                    <Input className="bg-[#1d1d34]" id="password" placeholder="••••••••" type="password" />
                  </LabelInputContainer>

                  <button
                    className="bg-indigo-500 relative group/btn block w-full text-white rounded-md h-10 font-medium"
                    type="submit"
                  >
                    Sign in &rarr;
                  </button>

                  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                  <div className="flex flex-row items-center justify-center gap-4">
                    <IconBrandGithub className="h-6 w-6 text-neutral-300" />
                    <IconBrandGoogle className="h-6 w-6 text-neutral-300" />
                  </div>
                </form>
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