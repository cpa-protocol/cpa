import React from 'react';

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

export default AddBlockPopup;
