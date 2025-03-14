import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className='bg-blue-300 text-blue-950 rounded-xl font-mono  max-w-screen-md mx-auto'>
      <header className='border-b-4 pb-4 text-center'>
        <h1 className='text-4xl font-extrabold'>Joshua Birchfield</h1>
        <h2 className='text-xl font-bold'>Senior Computer Science Student</h2>
        <h3 className='text-lg font-semibold'>Arkansas Tech University</h3>
        <img  className='w-40 sm:w-32 md:w-48 mx-auto rounded-xl mt-4' src='/profile.jpg'></img>
      </header>
      <main className='mt-4'>
        <div className='p-2'>
        <h3 className='text-lg font-bold'>Bio:</h3>
        <p className='text-justify'>My name is Joshua Birchfield, and I come from Huntsville, Arkansas. I grew an interest in Computer Science through a class in High School and a love for videogames. I love things that cause me to learn and challenge myself regardless of subject. One of the ways I am challenging myself is by learning Japanese. Overall, I thoroughly enjoy programming, and I hope to make intuitive programs that make life a little more convenient.</p>
        </div>

        <div className='p-2 mt-4'>
          <h2 className='text-xl font-bold'>Education:</h2>
          <ul className='ml-3'>
            <li>High School Diploma</li>
            <li>Certificate in Programming</li>
            <li>Associate of Applied Science in Information Technology</li>
            <li>Bachelor of Science in Computer Science (In Progress)</li>
          </ul>
        </div>
      </main>
      
      <footer className='bg-blue-400 p-4 mt-6 text-center rounded-lg'>
        <p className='font-bold'>Contact Info:</p>
        <ul className='flex flex-wrap gap-3 ml-2 text-sm'>
          <li>Email: <a href="mailto:joshua.birchfield32@gmail.com" className='text-pink-600'>joshua.birchfield32@gmail.com</a></li>
          <li>Phone Number: (479)530-9156</li>
          <li>X: <a href="https://x.com/JBirchfield32"className='text-pink-600'>Joshua Birchfield</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/joshua-birchfield-b13304295"className='text-pink-600'>Joshua Birchfield</a></li>
        </ul>
      </footer>
    </div>
    
    </>
  )
}

export default App
