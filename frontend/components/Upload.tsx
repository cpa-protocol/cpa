import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Web3Storage } from "web3.storage";

type UploadProps = {
  title: string;
  onUploadSuccess: (url: string) => void;
};

export default function Upload({ title, onUploadSuccess }: UploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [ipfsUrl, setIpfsUrl] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    setUploading(true);

    const client = new Web3Storage({
      token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY || "",
    });
    const cid = await client.put([file]);
    const url = `https://dweb.link/ipfs/${cid}`;

    setIpfsUrl(url);
    setUploading(false);

    // Call the callback function with the uploaded URL
    onUploadSuccess(url);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      {!uploading && !ipfsUrl && (
        <div>
          <label className="text-gray-700 font-bold mb-2" htmlFor="file">
              {title}
          </label>
          <div className="relative border-dashed border-2 border-gray-400 rounded-lg h-64 flex justify-center items-center">
            <div className="absolute">
              <div className="flex flex-col items-center">
                <span className="text-gray-400 group-hover:text-gray-600 mt-2">
                  {file ? file.name : "Select a file"}
                </span>
              </div>
            </div>
            <input
              type="file"
              className="h-full w-full opacity-0"
              id="file"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {!ipfsUrl ? (
        <button
          type="button"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      ) : (
        <div className="mt-8">
          <p className="text-gray-700 font-bold">Successfully Uploaded!</p>
          <a
            href={ipfsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            [link]
          </a>
        </div>
      )}
    </div>
  );
}
