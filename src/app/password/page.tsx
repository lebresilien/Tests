"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const   
inputVariants = {
   focused: {
     borderColor: 'yellow',
     transition: {
       duration: 3,
       ease: 'easeInOut',
     },
   },
   unfocused: {
     borderColor: 'red',
     transition: {
       duration: 7,
       ease: 'easeInOut',
     },
   },
 };

 const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
export default function Home() {

    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState('');
    const [toggle, setToggle] = useState(false)

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const increment = () => {
        setCount(count + 1);
        setToggle(!toggle)
    }

    const validate = (): string => {
        if(value.length >= 1 && value.length < 4 ) return 'weak'
        else if(value.length >= 4 && value.length < 8 ) return 'medium'
        else return 'strong'
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <div className="relative">
                <motion.input 
                    animate={{
                        borderBlockStartColor: value.length == 2 ? 'red' : ''
                    }}
                    transition={{
                        duration: .25,
                        delay: .5
                    }}
                    type="password" 
                    className={cn(
                        "py-3 border border-4 rounded-lg px-2 focus:outline-none"
                    )} 
                    placeholder="Enter your password"
                    value={value}
                    onChange={onChange}
                /> 
            </div>
            <span className="text-sm font-light font-bold"> {value ? validate() : ''}</span>
           {/*  <motion.div 
                className="bg-gray-100 p-4 border border-blue-700"
                animate={{
                    borderInlineColor: count == 1 ? 'red' : '',
                    border
                }}
                transition={{
                    duration: 3.5
                }}
            >
                1
            </motion.div> */}
            <Button className="text-white" onClick={increment}>toggle</Button>

        </main>
    )
}