"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icons";

export default function Home() {

    const [hover, setHover] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-10">
            <div className="flex items-start justify-end w-[400px] space-x-3">
                {/*<div className="w-full flex justify-end">
                   <motion.div 
                        className="bg-green-500 p-5 h-[50px] w-[50px]"
                        animate={{
                            height: isVisible ? 250 : 50
                        }}
                    ></motion.div>
                </div>
                <motion.button
                    onClick={() => setHover(false)}
                    className={cn(
                        "text-white bg-slate-200 w-[200px] h-10 rounded-full hidden",
                        hover ? "block" : "none"
                    )}
                    animate={{
                        display: hover ? "block" : "none"
                    }}
                    transition={{
                        duration: 0
                    }}
                >
                    Cancele
                </motion.button>

                <motion.button
                    onClick={() => setHover(!hover)}
                    className={!hover ? "text-white bg-red-500 w-full h-10 rounded-full" : "text-white bg-red-500 w-[400px] h-10 rounded-full"}
                    animate={{
                        width: hover ? 200 : 400,
                    }}
                >
                    Delete
                </motion.button>*/}
            </div>  
          
            <div className="relative py-10 w-full max-w-sm rounded-lg">
                <motion.div
                    animate={{
                        height: isVisible ? 295 : 0,
                        display: isVisible ? 'block' : 'none'
                    }}
                    transition={{
                        duration: .25
                    }}
                    className="absolute hidden flex flex-col space-y-5 bg-white w-full h-0 bottom-0 left-0 right-0 overflow-hidden shadow-2xl rounded-3xl px-3 py-5"
                >
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-red-500">
                            <Icon name={"info-circled"} className="h-8 w-8"/>
                        </span>
                        <span className="bg-gray-100 px-2 rounded-full text-black cursor-pointer" onClick={() => setIsVisible(false)}>
                            <Icon name={"cross-2"} className="h-3 w-3"/>
                        </span>
                    </div>
                    <span className="text-black font-bold text-sm">Are you sure ?</span>
                    <p className="text-sm">This action cannot be undone. Once deleted, the file will be permanently removed from your system and cannot be recovered. Please confirm if you wish to proceed.</p>
                </motion.div>
                <div className={cn(
                    "flex gap-2 relative z-[2] w-full space-x-3 px-3",
                    isVisible ? "justify-between" : "justify-end"
                )}>
                    <motion.button 
                        onClick={() => setIsVisible(!isVisible)}
                        className={cn(
                            "rounded-full bg-zinc-100 text-zinc-900 font-medium py-3 px-6 cursor-pointer w-1/2",
                            isVisible ? "block" : "hidden"
                        )}
                    >
                        Cancel
                    </motion.button>
                    <motion.button 
                        onClick={() => setIsVisible(!isVisible)}
                        animate={{
                            width: isVisible ? '50%' : '100%',
                        }}
                        transition={{
                            duration: .5
                        }}
                        className="bg-red-500 text-white font-medium py-3 px-6 w-full cursor-pointer h-12 w-full rounded-full"
                    >
                       Delete
                    </motion.button>
                </div>
            </div>   
        </main>
    )
}