import React, { useState } from 'react';
import Link from 'next/link';

function RoleBlock({role, description, image, link} : {role: string, description: string, image: string, link: string}){
    return (
    <div className="flex flex-col relative rounded-3xl border-2 border-zinc-100 items-center">
        <div className="text-center text-black text-3xl font-bold py-4">{role}</div>
        <img className="w-1/2  h-1/2" src={image} />
        <Link href={link}>
            <div className=" px-7 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl shadow justify-center items-center gap-2.5 inline-flex m-8">
                <div className="text-center text-white text-xl font-bold">{description}</div>
            </div>
        </Link>
    </div>
    )
}

function BlocksList({ blocks }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4">
      {blocks.map((block, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-bold">{block.title}</h3>
          <p className="text-sm text-gray-600">{block.createTime}</p>
          <p>{block.description}</p>
        </div>
      ))}
      <div
        className="border p-4 rounded bg-gray-200 text-gray-400 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        Add New Block
      </div>
      {showPopup && <AddBlockPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}


function AddBlockPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Block</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Title:</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description:</label>
            <textarea className="border p-2 w-full" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add
          </button>
          <button type="button" className="ml-4" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlocksList;


