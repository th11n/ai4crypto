"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";

interface CardProps {
    name: string
    description: string
    image: string
    producer: string
    alt: string
}

export default function Card(props: CardProps) {
    return (
        <div className="flex flex-col bg-white/10 h-48 w-64 rounded-lg p-4 shadow-xl group hover:scale-105 transition duration-300 cursor-pointer">
            <Image src={props.image} height={200} width={200} alt={props.alt} className="h-8 w-32" />
            <h1 className="text-xl font-bold mt-4">{props.name}</h1>
            <p className="font-light text-sm">{props.description}</p>
            <div className="flex flex-row justify-between items-end h-full w-full">
                <a className="font-light text-sm text-white/50 group-hover:text-white">{props.producer}</a>
                {/* <Button className="bg-indigo-950">Choose</Button> */}
                <ChevronsRight className="opacity-50 group-hover:opacity-100" size={18}/>
            </div>
        </div>
    );
}