import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
    <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
   		<div class="max-w-md">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal"
            >Page not found.</p>
          <p class="mt-3 mb-8">But don't worry friend, you can find plenty of other things on our homepage.</p>
          
          <Link to='/'>
          <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-gray-800 hover:bg-indigo-500 active:bg-blue-600">back to homepage</button>
          </Link>
    </div>
  </div>
</>
  );
}

export default PageNotFound;