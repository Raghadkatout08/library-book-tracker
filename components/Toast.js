// components/Toast.js
import React from 'react';

function Toast({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed left-8 right-4 bg-gray-700 text-white p-9 rounded-lg shadow-lg flex items-start space-x-8 max-w-xxl">
      <div className="flex-1">
        <p className="font-bold text-xl">Book Added:</p>
        <p className="mt-1"><strong>Title:</strong> {book.title}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
      </div>
      <button 
        onClick={onClose} 
        className="ml-4 text-gray-400 hover:text-gray-300 focus:outline-none"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
