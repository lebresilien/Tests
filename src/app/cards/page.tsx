"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

export default function Card() {
  return (
    <div className="grid w-full min-h-screen place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    
    const rotateX = useTransform(mouseYSpring, 
        [-0.5, 0.5],
        ["7.5deg", "-7.5deg"]
    )

    const rotateY = useTransform(mouseXSpring, 
        [-0.5, 0.5],
        ["7.5deg", "-7.5deg"]
    )

    const handleMouseMove = (e: any) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const xPct = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const yPct = mouseX / width - HALF_ROTATION_RANGE;

        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
      };

    return (
        <motion.div 
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-red-300"
        >
            <div 
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d"
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                <FiMousePointer 
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="mx-auto text-4xl"
                />
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="text-center text-2xl font-bold"
                    >
                    HOVER ME
                </p>
            </div>
        </motion.div>
    )
}