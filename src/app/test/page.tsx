"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function template({ rotate, x }: {rotate: number, x: number}) {
    return `rotate(${rotate}) translateX(${x})`
}

const lists = [
    {
        name: 'arsenal',
        isSelected: true
    },
    {
        name: 'chelsea',
        isSelected: false
    },
    {
        name: 'arsenal',
        isSelected: true
    },
    {
        name: 'city',
        isSelected: false
    },
]

const variants = {
    active: {
        backgroundColor: "#f00"
    },
    inactive: {
      backgroundColor: "#fff",
      transition: { duration: 2 }
    }
  }
export default function Test() {

    const [active, setActive] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const x = useMotionValue(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setActive(false);
            x.set(100);
        }, 5000);

        return () => clearInterval(interval)
    }, [x]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <motion.div
                style={{ x }}
                variants={variants}
                animate={active ? "active" : "inactive"}
                className="flex items-center flex-col justify-center h-[200px] w-[200px] border shadow-lg"
            >

            </motion.div>

            <motion.div
                layout
                className="parent"
                data-isOpen={isOpen}
            >

            </motion.div>
            
        </main>
    )
}