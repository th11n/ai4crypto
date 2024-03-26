"use client";
import { Bot, LogOut, MessageSquareShare, Settings, Wallet } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ChatButton from "./ChatButton";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-[35vh] h-full z-10 px-8 py-6">
            <div className="flex flex-col">
                <div className="relative w-full z-10">
                    <a className="flex flex-row gap-3 items-center text-base text-white font-light z-10 bg-gradient-to-r bg-gradient-to-r from-indigo-500 to-indigo-800 shadow-xl w-full items-center justify-center py-2 rounded-lg font-medium text-center cursor-pointer hover:transition hover:from-indigo-600 hover:to-indigo-900"><MessageSquareShare size={21} />New chat</a>
                    <div className="absolute bottom-[-10px] right-24 w-24 h-8 rounded-full blur-[50px] bg-white z-[-10]"></div>
                </div>
                <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4 h-[1px] w-full" />
                <div className="flex flex-col gap-y-4 w-full">
                    <ChatButton name="Random Chat" messages={42} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4 h-[1px] w-full" />
                <div className="flex flex-row justify-between w-full items-center">
                    <Popover>
                        <PopoverTrigger className="flex flex-row items-center text-lg gap-3">
                            <Avatar className="">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <a className="flex flex-col">
                                Dominik
                                <p className="text-xs font-light pr-2">123 tokens</p>
                            </a>
                        </PopoverTrigger>
                        <PopoverContent className="mx-10 my-2 bg-gradient-to-r from-violet-700 to-indigo-700 border-0 h-min p-0 w-48 rounded-lg text-white">
                            <div className="relative flex flex-col justify-center h-full w-full bg-black/75 rounded-lg p-4 border border-indigo-700/30 text-sm">
                                <a className="flex flex-row items-center gap-2 mb-3"><Bot size={18}/> Change AI model</a>
                                <a className="flex flex-row items-center gap-2"><Settings size={18}/> Settings</a>
                                <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4 h-[1px] w-full" />
                                <a className="flex flex-row items-center gap-2 font-semibold"><Wallet size={18}/> Buy tokens</a>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <LogOut className="opacity-50"/>
                </div>
            </div>
        </div>
    );
}