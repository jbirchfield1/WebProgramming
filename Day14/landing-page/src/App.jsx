import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    
      <div className="min-h-screen bg-gray-300 justify-center flex flex-col items-center p-6">
        <header className="text-center m-6 ">
          <h1 className="font-bold text-gray-800 text-4xl">Welcome to my Landing Page</h1>
          <p className="text-gray-600 mt-2">Discover more about what I do!</p>
        </header>
        <main className="max-w-3xl bg-white mt-2 rounded-2xl shadow-lg text-center ">
          <p className="text-gray-600 mb-4">I like web programming!</p>
          <button className="bg-blue-400 text-white hover:bg-blue-900 rounded-lg px-6 py-3">Get Started</button>
        </main>
        <footer className="text-center mt-6 text-gray-700 w-full">
          All rights reserved
        </footer>

      </div>
    
  )
}

export default App
