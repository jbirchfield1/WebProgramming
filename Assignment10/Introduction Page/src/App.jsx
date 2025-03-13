import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className='bg-blue-300 text-blue-950 rounded-xl font-mono  max-w-full max-h-full'>
      <header className='border-b-4'>
        <h1 className='text-4xl '>Joshua Birchfield</h1>
        <h2 className='text-xl'>Senior Computer Science Student</h2>
        <h3 className='text-lg'>Arkansas Tech University</h3>
        <img  className='w-40' src='/profile.jpg'></img>
      </header>
      <main className='mt-4'>
        <h3 className='text-lg'>Bio:</h3>
        <p>My name is Joshua Birchfield and I come from Huntsville, Arkansas. I grew an interest in Computer Science through a class in High School and a love for videogames. I love things that cause me to learn and challenge myself. I hope to make intuitive programs that make life a little more convenient.</p>

        <div className='p-2 mt-4'>
          <h2>Education:</h2>
          <ul className='ml-3'>
            <li>High School Diploma</li>
            <li>Certificate in Programming</li>
            <li>Associate's in I.T.</li>
          </ul>
        </div>
      </main>
      
      <footer className='bg-blue-400'>
        <p>Contact Info:</p>
        <ul className='flex flex-wrap gap-3 ml-2'>
          <li>Email: <a href="mailto:joshua.birchfield32@gmail.com" className='text-purple-900'>joshua.birchfield32@gmail.com</a></li>
          <li>Phone Number: (479) 530 - 9156</li>
          <li>X: <a href="https://x.com/JBirchfield32"className='text-purple-900'>Joshua Birchfield</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/joshua-birchfield-b13304295"className='text-purple-900'>Joshua Birchfield</a></li>
        </ul>
      </footer>
    </div>
    
    </>
  )
}

export default App
