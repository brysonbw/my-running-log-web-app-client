import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ListRunLog from '../../components/ListRunLog'
import { AuthContext } from '../../context/AuthContext'

function Home() {
  const { auth } = useContext(AuthContext)

    return (
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto max-w-7x1">
    <div class="flex flex-wrap w-full mb-4 p-4">
    <p className="mb-5">Hello, {auth.username} </p>
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font text-gray-900">My Running Logs</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      
      </div>
      <Link to="/createrunlog" class="mt-6 bg-gray-800 hover:bg-indigo-500 text-white text-center py-2 px-4 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
</Link>
    </div>

    <ListRunLog />
  </div>
</section>
    )
}

export default Home
