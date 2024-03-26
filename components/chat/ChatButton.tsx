"use client";
import { MessagesSquare, Send } from "lucide-react";

interface CardProps {
    name: string
    messages: number
}

export default function ChatButton(props: CardProps) {
    return (
        <button className="flex flex-row justify-between items-center text-base text-white font-light hover:bg-white/30 transition px-4 py-2 rounded-lg">
            <span className="flex flex-row gap-2 items-center">
                <MessagesSquare className="opacity-50" />
                {props.name}
            </span>
            <span className="flex items-center justify-center h-8 text-center w-min px-2 rounded-lg text-sm bg-white/20 text-white/70 font-medium">
                {props.messages}
            </span>
        </button>
    );
}