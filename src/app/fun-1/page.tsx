
"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const text = 'I use framer motion with nextjs and taildwindcss to make animation !!!';

export default function Fun() {

    useEffect(() => {
        const intervalId = setInterval(() => {
           
        }, 5000)

        return () => clearInterval(intervalId);
    })

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <div className="space-y-3 flex flex-col p-5">
               <div className="flex space-x-2">
                    {text.split(' ').map((el, i) => (
                        <motion.div
                            key={el}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 2,
                                duration: .25,
                                delay: i / 10,
                            }}
                        >
                            <span className="text-black font-bold text-xl uppercase">{el}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}