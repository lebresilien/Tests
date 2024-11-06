"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";

export default function Home() {

    const [email, setEmail] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <div className="relative flex items-center flex-col justify-center h-[400px] w-[500px] bg-zinc-50 border shadow-lg">
               {/* <motion.div
                    className="relative flex flex-col justify-center bg-white items-center w-96 border border-gray-50 rounded-xl px-2 py-4 z-10"
                    animate={{
                        height: email && email.length < 5 ? 150 : 80
                    }}
                    transition={{
                        duration: 0
                    }}
                >
                    <Input
                        type="email" 
                        className="relative rounded-lg h-[47px] focus-visible:ring-transparent z-[10]" 
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    {email && email.length < 5 &&
                        <motion.div 
                            className={cn(
                                "w-full bg-red-100 mt-2 relative z-[2]",
                            )}
                            animate={{
                                opacity: email && email.length ? 1 : 0,
                                y: email && email.length ? 10 : -40,
                            }}
                            transition={{
                                duration: .5
                            }}
                        >
                            <span>Java</span>
                        </motion.div>
                    }
                    
                    <div className={cn(
                        "absolute right-0 left-0 w-full top-0 bg-gradient-to-r from-white to-red-50",
                            email && email.length < 5 ? 'h-[149px]' : 'h-0',
                        )}
                    ></div>
                </motion.div>   */}  
               {/*  <div className="loading-spinner">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div> */}  
                <div className="box relative h-[200px] w-[200px] bg-[#020223]"></div>
            </div>
        </main>
    )
}