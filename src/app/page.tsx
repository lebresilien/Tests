"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  
  const [show, setShow] = useState(false);
  
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="z-50 w-[400px] md:w-[600px] max-w-5xl h-96 justify-end font-mono text-sm flex">
        {!show ? 
          <div className="flex">
            <Input 
              className="h-12 w-[260px] md:w-[400px] font-serif text-md bg-white rounded-l-full border border-gray-200 py-1.5 text-gray-900 ring-0 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white font-light lg:text-xl sm:leading-6"
              placeholder="Rechercher"
              onClick={() => setShow(true)}
            />
            <Button className="flex h-12 rounded-r-full border border-gray-200 bg-gray-50 py-0 pl-2 pr-7 text-gray-200 hover:bg-gray-100 sm:text-sm">
              <Icon name="magnifying-glass" className="h-5 w-5 text-black" />
            </Button>
          </div>
          :
          <div className="relative">
            <div className="absolute mt-4 ml-5 start-0 flex items-center pointer-events-none">
              <Icon name="magnifying-glass" className="h-5 w-5 text-black" />
            </div>
            <div className="flex">
              <Input
                className="h-12 pl-14 pr-8 w-[300px] md:w-[460px] font-serif text-md bg-white rounded-l-full border border-gray-200 py-1.5 text-gray-900 ring-0 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white font-light lg:text-xl sm:leading-6"
                placeholder="Rechercher"
                onBlur={() => setShow(false)}
                autoFocus
              />
              <Button className="flex h-12 rounded-r-full border border-gray-200 bg-gray-50 py-0 pl-2 pr-7 text-gray-200 hover:bg-gray-100 sm:text-sm">
                <Icon name="magnifying-glass" className="h-5 w-5 text-black" />
              </Button>
            </div>
          </div>
          }
      </div>
    </main>
  );
}
