"use client";
import { Icon } from "@/components/ui/icons";
import { useState } from "react";
import {
    AnimatePresence,
    motion,
    useAnimate,
    type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

const animation: Variants = {
    hidden: (direction: -1 | 1) => ({
      y: direction === 1 ? 30 : -30,
      opacity: 0,
      filter: "blur(4px)",
    }),
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: -1 | 1) => ({
      y: direction === 1 ? -30 : 30,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };
export default function Count() {

    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState(1);
    const [scope, animate] = useAnimate();

    const edit = (type: "add" | "reduce") => {
        if(type === "add") {
            if (counter === 20) {
                animate(scope.current, { x: [0, 5, -5, 0] }, { duration: 0.2 });
                return;
            }
            setCounter(counter + 1);
            setDirection(1); 
        }
        else {
            
            if (counter === 0) {
                animate(scope.current, { x: [0, 5, -5, 0] }, { duration: 0.2 });
                return;
            }

            setCounter(counter - 1);
            setDirection(-1);
        } 
    }

    return (
        <main className="flex justify-center min-h-screen items-center">
            <div className="w-[600px] h-96 flex-col space-y-5 flex justify-center items-center bg-gray-100 rounded-lg shadow">
                <div className="flex justify-center items-center space-x-10" ref={scope}>
                    <span className="">
                        <Icon 
                            name="minus" 
                            className={cn(
                                "cursor-pointer bg-box flex h-8 w-8 items-center justify-center rounded-full text-xl active:scale-90",
                                counter === 0 && "opacity-50"
                            )}
                            onClick={ () => edit("reduce")} 
                        />
                    </span>
                    <h3 className="">
                       {/*  <span className="font-bold text-black text-3xl"> */}
                            <AnimatePresence mode="popLayout" custom={direction}>
                                {counter
                                    .toString()
                                    .split("")
                                    .map((value, index) => (
                                        <motion.span
                                            key={`${value} ${index}`}
                                            variants={animation}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            custom={direction}
                                            className="inline-block"
                                        >
                                            {value}
                                        </motion.span>
                                    ))
                                }
                            </AnimatePresence>
                        {/* </span> */}
                    </h3>
                    <span className="">
                        <Icon 
                            name="plus" 
                            className={cn(
                                "cursor-pointer bg-box flex h-8 w-8 items-center justify-center rounded-full text-xl active:scale-90",
                                counter === 20 && "opacity-50"
                            )} 
                            onClick={ () => edit("add")} 
                        />
                    </span>
                </div>
                <p className="text-muted-2">20 is the max number.</p>
            </div>
        </main>
    )
}