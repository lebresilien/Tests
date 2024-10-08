"use client";
import { useEffect, useState } from "react";
import * as Progress from '@radix-ui/react-progress';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

  const values = [
    "solid",
    "dashed",
    "dotted",
    "double",
    "groove",
    "outset",
    "inset",
    "none"
  ];

export default function Home() {

    const [border, setBorder] = useState(1);
    const [progress, setProgress] = useState(40);
    const [selectedValue, setSelectedValue] = useState('solid');

    const handleClick = (event: any) => {
        const { left, width } = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - left;
        const newProgress = (clickX / width) * 100;
        if(newProgress >= 0 && newProgress < 20) setBorder(1)
        else if(newProgress >= 20 && newProgress < 40) setBorder(2)
        else if(newProgress >= 40 && newProgress < 50) setBorder(4)
        else if(newProgress >= 50 && newProgress < 60) setBorder(6)
        else if(newProgress >= 60 && newProgress < 70) setBorder(8)
        else if(newProgress >= 70 && newProgress < 80) setBorder(10)
        else setBorder(12)
        setProgress(newProgress);
    };

    return (
        <main className="flex justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center space-y-10 border-4 border-gray-50 border-dotted p-5">
                {/* <div className="w-full flex p-4"></div> */}
                <div className="flex space-x-10 justify-center items-center bg-zinc-100 p-24">
                    <div className={`h-20 w-20 border-red-700 border-${selectedValue}`} style={{ borderWidth: `${border}px` }}></div>
                    <div className={`h-20 w-20 border-red-700 rounded-full border-${selectedValue}`} style={{ borderWidth: `${border}px` }}></div>
                </div>
                <div className="w-96 flex flex-col space-y-3">
                    <Label>Width</Label>
                    <Progress.Root
                        className="relative h-2 cursor-pointer w-full overflow-hidden rounded bg-gray-200"
                        value={progress}
                        onClick={handleClick}
                    >
                        <Progress.Indicator
                            className="h-full bg-black transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </Progress.Root>
                </div>
                <div className="w-96">
                    <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a value" />
                        </SelectTrigger>
                        <SelectContent>
                            {values.map((el) => (
                                <SelectItem 
                                    className="capitalize" 
                                    value={el} 
                                    key={el}
                                >
                                    <span className="capitalize">{el}</span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </main>
    )
}