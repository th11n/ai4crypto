"use client";
import { Menu, Send } from "lucide-react";
import { AutosizeTextarea } from "../ui/autosize-textarea";
import Advice from "./Advice";

interface CardProps {
    name: string
    description: string
    image: string
    producer: string
    alt: string
}

export default function Chat() {
    return (
        <div className="flex flex-col h-full w-full bg-white/10 rounded-l-[50px] border-r-0 border border-white/20 z-10">
            <div className="flex flex-col h-full items-center w-full">
                <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                    <h1 className="text-5xl font-medium">AI4Crypto</h1>
                    <p className="text-lg text-white/70 font-thin w-[34%] text-center">Explore Deeper Insights, Engage in Meaningful Discussions, and Unlock New Possibilities with us!</p>
                    <div className="flex flex-row h-min gap-6 items-center justify-center mt-4">
                        <Advice
                            title="Some Title"
                            icon={<Menu size={30} />}
                            tips={["Tip 1", "Tip 2", "Tip 3"]}
                        />
                        <Advice
                            title="Some Title"
                            icon={<Menu size={30} />}
                            tips={["Tip 1", "Tip 2", "Tip 3"]}
                        />
                        <Advice
                            title="Some Title"
                            icon={<Menu size={30} />}
                            tips={["Tip 1", "Tip 2", "Tip 3"]}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end relative w-11/12">
                    <AutosizeTextarea minHeight={0} maxHeight={200} className="resize-none flex flex-col items-center justify-center h-full my-12 h-12 w-full text-base shadow-xl placeholder:text-white/60 bg-white/10 border-0 placeholder:leading-8 leading-8 pr-4" placeholder="Send a message" />
                    <div className="absolute bottom-[3.8rem] right-4 pl-20">
                        <Send className="opacity-50 hover:opacity-100 transition cursor-pointer" size={22} />
                    </div>
                </div>
            </div>
        </div>
    );
}