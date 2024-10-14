"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Todo() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className={cn("relative flex min-h-screen flex-col items-center justify-center space-y-5 bg-white", isOpen && "bg-zinc-700 z-10")}>
            {/* <motion.div
                layout
                data-isopen={isOpen}
                initial={{ borderRadius: 50 }}
                className="parent"
                onClick={() => setIsOpen(!isOpen)}
            > */}
                <motion.div 
                    layout 
                    className="parent"
                    data-isOpen={isOpen}
                >
                    {!isOpen ?
                        <div 
                            onClick={() => setIsOpen(true)}
                            className="flex cursor-pointer justify-between space-x-1 rounded-lg p-2 bg-slate-500 children"
                        >
                            <Icon name="check-circled" className="text-white" />
                            <span className="text-white">Todo</span>
                        </div>:
                        <div className="flex flex-col space-y-5">
                            <div 
                                className="flex flex-col py-5 space-y-2 px-3 bg-white rounded-xl w-96 h-72" 
                            >
                                <Input type="text" placeholder="Title" className="w-72 font-bold border-transparent shadow-none focus-visible:ring-transparent placeholder:text-gray-700" />
                                <Input className="w-72 border-transparent shadow-none focus-visible:ring-transparent placeholder:text-gray-700" placeholder="Description" />
                            </div>
                            <AnimatePresence mode="popLayout">
                               {isOpen && (
                                    <motion.div 
                                        initial={{ y: 0 }}
                                        animate={{ y: -10 }}
                                        transition={{
                                            duration: 1.5
                                        }}
                                        className="flex justify-between items-center"
                                        exit={{ y: 0}}
                                    >
                                        <Icon name={"cross-2"} className="text-red-700 cursor-pointer" onClick={() => setIsOpen(false)} />
                                        <Button className="bg-white rounded-full p-3">
                                            <span className="text-black">Save</span>
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    }
                </motion.div>
           {/* </motion.div> */}
        </main>
    )
}