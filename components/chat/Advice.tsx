import { Menu } from "lucide-react";
import { Fragment } from "react";

interface AdviceProps {
    title: string;
    icon: React.ReactNode; // Change icon type to accept an array of ReactNodes
    tips: string[]; // Change tip type to accept an array of strings
}

export default function Advice(props: AdviceProps) {
    return (
        <div className="flex flex-col bg-white/5 rounded-lg border border-white/10 h-80 w-72 p-4 gap-4 backdrop-blur-3xl">
            <span className="flex flex-row gap-2 items-center">
                    <a className="p-1 bg-gradient-to-r from-violet-700 to-indigo-700 rounded-lg shadow-xl">
                        {props.icon}
                    </a>
                <h1 className="text-xl font-base">{props.title}</h1>
            </span>
            {props.tips.map((tip, index) => (
                <div key={index} className="w-full h-min bg-white/10 text-gray-200 font-light text-wrap rounded-lg break-words p-2 mt-1">
                    {tip}
                </div>
            ))}
        </div>
    );
}