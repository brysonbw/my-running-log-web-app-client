import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

function ListRunLog() {
  const { auth } = useContext(AuthContext)
  const [runLog, setRunLog] = useState([])

  useEffect(() => {
      axios
       .get(`https://my-running-log-api.herokuapp.com/api/user/runlog/${auth.userId}`)
        .then((response) => {
        setRunLog(response.data)
        })
  }, [])


  const deleteRunLog = (id) => {
    axios
    .delete(`https://my-running-log-api.herokuapp.com/api/user/runLog/delete/${id}`, {
      headers: { token: localStorage.getItem("token") },
    })
    .then(() => {
      setRunLog(
        runLog.filter((val) => {
          return val.id !== id;
        })
      )
    })
  }


    return (
        <div class="flex flex-wrap -m-4">
          {!runLog.length && (
          <p class="px-8 py-6 rounded-md">{auth.username}, you have no running logs.</p>
          )}
           {auth && runLog.map((log) => (
      <div class="w-full md:w-1/2 xl:w-1/3 p-4" key={log.id}>
        <div class="bg-white p-6 border-2 border-opacity-50 rounded-lg shadow-md ">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{log.date}</h3>
         <Link to={`/detailrunlog/${log.id}`}><h2 class="underline text-lg text-gray-900 font-medium title-font mb-4">{log.title}</h2></Link>
          <p class="leading-relaxed text-base">{log.location}</p>
          <p class="leading-relaxed text-base">{log.miles}</p>
          <p class="leading-relaxed text-base">{log.duration}</p>
          <button onClick={() => {
                      deleteRunLog(log.id);
                    }} class="mt-3 bg-gray-800 hover:bg-indigo-500 text-white py-2 px-4 rounded-full">
          Delete
        </button>
        </div>
      </div>
      ))}
    </div>
    )
}

export default ListRunLog 
