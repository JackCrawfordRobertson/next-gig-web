// components/CookieSettings.js
import { useState, useEffect } from 'react';

export default function CookieSettings({ isOpen, onClose }) {
 if (!isOpen) return null;

 return (
   <div className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
     <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
       <button 
         onClick={onClose}
         className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
       >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
       
       <h2 className="text-xl font-bold mb-4">Cookie Settings</h2>
       
       <div className="mb-6">
         <p className="text-gray-700 mb-3">
           We only use essential cookies that are necessary for the website to function properly.
           We do not use any tracking or analytics cookies.
         </p>
         <p className="text-gray-700">
           Essential cookies cannot be disabled as they are required for the website to work.
         </p>
       </div>
       
       <div className="flex items-center p-3 bg-gray-50 rounded mb-4">
         <div className="flex-1">
           <p className="font-medium">Essential Cookies</p>
           <p className="text-sm text-gray-600">Required for basic website functionality</p>
         </div>
         <div className="flex items-center">
           <div className="w-10 h-5 bg-blue-500 rounded-full shadow-inner"></div>
         </div>
       </div>
       
       <div className="flex justify-end space-x-3">
         <button 
           onClick={onClose}
           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
         >
           Got it
         </button>
       </div>
     </div>
   </div>
 );
}