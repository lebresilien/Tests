"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {

    const [hover, setHover] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <div className="flex items-start justify-end w-[400px] space-x-3">
                {/* <motion.button
                    onClick={() => setHover(false)}
                    className="text-white bg-slate-200 w-[200px] h-10 rounded-full hidden"
                    animate={{
                        display: hover ? "block" : "none"
                    }}
                    transition={{
                        duration: 0
                    }}
                >
                    Cancel
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
          
            <motion.div
                className="relative py-10 w-full max-w-sm rounded-lg bg-green-500"
                animate={{
                    
                }}
            >
                <motion.div
                    className="absolute duration-[500ms] ease-in-out transition-all bg-red-700 w-full h-[275px] bottom-0 left-0 right-0 overflow-hidden"
                >
                    <motion.div
                        className="flex flex-col items-start gap-2 p-5"
                    >
                        <motion.p className="text-sm text-slate-700 line-clamp-4">This action cannot be undone. Once deleted, the file will be permanently removed from your system and cannot be recovered. Please confirm if you wish to proceed.</motion.p>
                    </motion.div> 
                </motion.div>
                <motion.div className="w-full flex items-center gap-2 relative z-[2]">
                    <motion.button className="bg-zinc-100 text-zinc-900 font-medium py-3 px-6 w-full cursor-pointer" >Cancel</motion.button>
                    <motion.button className="bg-red-500 text-white font-medium py-3 px-6 w-full cursor-pointer h-12 relative">
                        <motion.div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            <span className="block w-16 text-center inset-0 shrink-0">Delete</span>
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>     
             
            <Button onClick={() => setIsVisible(!isVisible)}>Animate</Button>
        </main>
    )
}