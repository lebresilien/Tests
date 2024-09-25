"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {

    const [hover, setHover] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <div className={"flex items-start justify-end w-[400px] space-x-3   "}>
                <motion.button
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
                </motion.button>
            </div>
           {/*  <Button onClick={() => setHover(!hover)}>Animate</Button> */} 
        </main>
    )
}