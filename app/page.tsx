import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button"
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { cookies } from 'next/headers'
import Link from "next/link";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <main className="flex flex-col">
      <Navbar isAuthenticated={session !== null} />
      <div className="flex flex-col h-full items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full gap-6 z-10 md:mt-24">
          <span className="text-indigo-200">Fast & Reliable</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-10 text-center">Unleash AI Power, Your Way</h1>
          <p className="w-9/12 md:w-5/12 text-center text-gray-300 font-light">Experience the Future of AI Access: ChatGPT, DALL-E, and More, Available for Purchase with Cryptocurrency including Bitcoin, Ethereum, Monero and many more</p>
          <div className="flex flex-row gap-3">
            <Link href="#about">
              <Button className="w-36 md:w-48 py-6 bg-[#7059ff] border border-[#7059ff] rounded-full">Learn More</Button>
            </Link>
            {
              session ? (
                <Link href="/dashboard">
                  <Button className="w-36 md:w-48 py-6 bg-transparent border border-[#7059ff] rounded-full">Dashboard</Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button className="w-36 md:w-48 py-6 bg-transparent border border-[#7059ff] rounded-full">Sign In</Button>
                </Link>
              )
            }
          </div>
        </div>
        <div className="flex flex-col justfiy-center items-center mt-24 z-10 gap-1">
          <h1 className="font-medium text-gray-400">Built with</h1>
          <div className="flex flex-row items-center gap-6 opacity-60">
            <Image
              src="/openai.png"
              width={60}
              height={60}
              alt="OpenAI Logo"
              className="h-[60px] w-[60px]" />
            <Image
              src="/Perplexity.png"
              width={70}
              height={70}
              alt="Perplexity Logo"
              className="h-[75px] w-[75px]" />
            <Image
              src="/Anthropic.png"
              width={70}
              height={70}
              alt="Anthropic Logo"
              className="h-[45px] w-[45px]" />
            <Image
              src="/Replicate.png"
              width={70}
              height={70}
              alt="Replicate Logo"
              className="h-[80px] w-[80px]" />
            <Image
              src="/Amazon.png"
              width={70}
              height={70}
              alt="Amazon Logo"
              className="h-[50px] w-[50px] hidden md:block" />
            <Image
              src="/deepai.png"
              width={170}
              height={70}
              alt="DeepAI Logo"
              className="h-[70px] w-[172px] hidden md:block" />
          </div>
        </div>
        <div className="hidden md:block absolute bottom-64 left-24 w-96 h-96 rounded-full blur-[100px] bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] bg-indigo-500"></div>
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
      </div>
    </main>
  );
}