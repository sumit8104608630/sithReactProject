import React, { useState } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertTriangle,
  Ghost,
  HelpCircle
} from 'lucide-react';

export default function ErrorMessage ({errorMessage}) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 flex items-center justify-center p-4">
      <div className="bg-white mt-10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
        
        <div className="relative mb-8">
          <Ghost className="text-8xl text-amber-300 mx-auto animate-bounce" size={128} />
          <div className="absolute -top-2 -right-2">
            <HelpCircle className="text-amber-400 animate-pulse" size={32} />
          </div>
        </div>

        <div className="text-8xl font-bold text-amber-300 mb-4 animate-pulse">
          404
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <AlertTriangle className="text-amber-400" size={32} />
          {errorMessage}
        </h1>

   

      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-amber-200 opacity-20">
        <HelpCircle className="animate-spin" size={96} style={{ animationDuration: '8s' }} />
      </div>
      <div className="absolute bottom-10 right-10 text-amber-200 opacity-20">
        <AlertTriangle className="animate-bounce" size={64} style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-1/2 left-5 text-amber-200 opacity-20">
        <Ghost className="animate-pulse" size={48} style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}