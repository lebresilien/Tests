
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState, ChangeEvent, MouseEvent } from "react";
import { SimpleProgressBar } from "@/components/simple-progress-bar";
import axios, { AxiosRequestConfig } from "axios";
import Image from "next/image";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { Icon } from "@/components/ui/icons";

export default function Upload() {

    //const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileRef = useRef(null);

    const onPress = () => {
        fileRef.current.click();
    }

    const onFileUploadChange = async (e: ChangeEvent<HTMLInputElement>) => {
        
        const fileInput = e.target;

        if (!fileInput.files) {
            alert("No file was chosen");
            return;
        }

        if (!fileInput.files || fileInput.files.length === 0) {
            alert("Files list is empty");
            return;
        }

        const file_1 = fileInput.files[0];

          /** File validation */
       /*  if (!file_1.type.startsWith("pdf")) {
            alert("Please select a valide image");
            return;
        } */

        /** Setting file state */
        setFile(file_1); // we will use the file state, to send it later to the server
        setPreviewUrl(URL.createObjectURL(file_1)); // we will use this to show the preview of the image

        try {
            let formData = new FormData();
            formData.append("file", file_1);

            const options: AxiosRequestConfig = {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json"
                },
                onUploadProgress: (progressEvent: any) => {
                    const percentage = (progressEvent.loaded * 100) / progressEvent.total;
                    setProgress(+percentage.toFixed(2));
                },
              };

            const {
                data: { data },
              } = await axios.post<{
                data: {
                  url: string | string[];
                };
              }>("http://127.0.0.1:8000/api/upload", formData, options);
        } catch (e: any) {
              console.error(e);
              const error =
                e.response && e.response.data
                  ? e.response.data.error
                  : "Sorry! something went wrong.";
              //alert(error);
        }
        /** Reset file input */
      
    };

    const onCancelFile = () => {
        if (!previewUrl && !file) {
          return;
        }
        setFile(null);
        setPreviewUrl(null);
        setProgress(0);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <div className="w-96 space-y-5 flex flex-col">

                {previewUrl ? (
                    <div className="mx-auto p-5 w-60 h-72 flex flex-col space-y-3 border border-gray-200 overflow-hidden">
                        <div className="flex justify-end p-2">
                            <Icon name="cross-2" className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-700" onClick={onCancelFile} />
                        </div>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer fileUrl={previewUrl} />
                        </Worker>
                    </div>
                ):(
                    <Button className="h-10 rounded-md bg-red-500 text-white p-10 hover:bg-red-500" onClick={onPress}>
                        <span className="font-bold">Select pdf file</span>
                    </Button>
                )}  

                {progress >= 1 && ((
                    <div className="mt-3">
                        <SimpleProgressBar progress={progress} />
                    </div>
                ))}
                <Input onChange={onFileUploadChange} type="file" placeholder="Upload file" className="hidden" ref={fileRef} />
                
            </div>
        </main>
    )
}