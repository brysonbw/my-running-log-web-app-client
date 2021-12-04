import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function DetailRunLog() {
    const {id} = useParams()
    const [runLog, setRunLog] = useState([])

    useEffect(() => {
        axios
         .get(`https://my-running-log-api.herokuapp.com/api/user/runlog/log/${id}`)
          .then((response) => {
          setRunLog(response.data)
          })
    }, [])

    return (
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-2 mx-auto max-w-7x1 h-screen align-content:center">
  <div class="flex flex-wrap w-full mb-4 p-4">
             <Link to="/" class="mt-3 bg-gray-800 hover:bg-indigo-500 text-white text-center py-2 px-4 rounded-full">
      <p>Back</p>
</Link>
</div>
        <div class="flex flex-wrap -m-4 ">
   <div class="w-full md:w-1/2 xl:w-1/3 p-4" key={runLog.id}>
     <div class="bg-white shadow-md border-2 border-opacity-50 p-6 rounded-lg">
       <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{runLog.date}</h3>
    <h2 class="underline text-lg text-gray-900 font-medium title-font mb-4">{runLog.title}</h2>
       <p class="leading-relaxed text-base">{runLog.location}</p>
       <p class="leading-relaxed text-base">{runLog.miles}</p>
       <p class="leading-relaxed text-base">{runLog.duration}</p>
     </div>
   </div>
 </div>
 </div>
</section>
    )
}

export default DetailRunLog
