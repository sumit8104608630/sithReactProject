import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Outlet } from 'react-router'

function LayOut() {
  const [contentLoad, setLoad] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setLoad(false)
      }, 300) // Wait for fade out animation
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (contentLoad) {
    return (
      <div className={`
        fixed inset-0 w-full h-full flex flex-col justify-center items-center 
        bg-gradient-to-br from-amber-50 via-white to-amber-100 z-50
        transition-all duration-300 ease-in-out
        ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
      `}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 flex flex-col items-center">
      

          {/* App Name */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent mb-6 animate-pulse">
            Food Hub
          </h1>

          {/* Loading Animation */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>

          {/* Loading Text */}
          <p className="text-amber-600 font-medium animate-pulse">
            Preparing your delicious experience...
          </p>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-amber-100 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-loading-bar {
            animation: loading-bar 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default LayOut