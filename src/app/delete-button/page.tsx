"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {

    const [hover, setHover] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <motion.button
                onClick={() => setHover(!hover)}
                className="text-white bg-red-500 w-64 h-10 rounded-full"
                animate={{
                    rotateX: hover ? 180 : 0,
                    backgroundColor: hover ? '#cbd5e1' : ''
                }}
                transition={{
                    duration: .25
                }}
            >
                {!hover ? "Delete" : 
                    <span className="backwards"></span>
                }
            </motion.button>
        </main>
    )
}