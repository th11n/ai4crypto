import { MessageSquareShare, MessagesSquare, SendHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AutosizeTextarea } from "@/components/ui/autosize-textarea";

export default function Dashboard() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-row h-full w-full py-2">
        <div className="flex flex-col justify-between w-[35vh] h-full z-10 px-8 py-6">
          <div className="flex flex-col">
            <h1 className="flex flex-row gap-3 items-center text-lg text-white font-light"><MessageSquareShare className="opacity-50" size={21} /> New chat</h1>
            <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4 h-[1px] w-full" />
            <div className="flex flex-col gap-4">
              <h1 className="flex flex-row gap-3 items-center text-base text-white font-light"><MessagesSquare className="opacity-50" /> Random chat</h1>
              <h1 className="flex flex-row gap-3 items-center text-base text-white font-light"><MessagesSquare className="opacity-50" /> Random chat</h1>
              <h1 className="flex flex-row gap-3 items-center text-base text-white font-light"><MessagesSquare className="opacity-50" /> Random chat</h1>
              <h1 className="flex flex-row gap-3 items-center text-base text-white font-light"><MessagesSquare className="opacity-50" /> Random chat</h1>
              <h1 className="flex flex-row gap-3 items-center text-base text-white font-light"><MessagesSquare className="opacity-50" /> Random chat</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4 h-[1px] w-full" />
            <span className="flex flex-row items-center text-lg gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <a className="flex flex-col">
                Dominik
                <p className="text-xs font-light">123 tokens</p>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-white/10 rounded-l-[50px] border-r-0 border border-white/20 z-10">
          <div className="flex flex-col h-full items-center justify-end w-full">
            <div className="relative w-11/12">
              <AutosizeTextarea minHeight={0} maxHeight={200} className="flex flex-col items-center justify-center h-full my-12 h-12 w-full text-base placeholder:text-white/60 bg-white/10 border-0 placeholder:leading-8 leading-8 pr-4" placeholder="Send a message" />
              <div className="absolute bottom-[3.8rem] right-3 pl-20">
                <SendHorizontal className=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute top-[-200px] left-[-200px] w-96 h-96 rounded-full blur-[200px] bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="hidden md:block absolute bottom-0 left-[-200px] w-96 h-96 rounded-full blur-[200px] bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[200px] bg-indigo-500"></div>
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
      </div>
    </main>
  );
}