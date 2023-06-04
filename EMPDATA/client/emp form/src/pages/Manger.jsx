import React, { useState } from 'react'
import axios from "axios"
const Manger = () => {
    const [manager,setManager]=useState("");
    const [empdetail,Setempdetail]=useState([]);
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(manager)
        const reponse=await axios.post("http://localhost:3000/grpman",{
            manager
        })
        console.log(reponse.data)
        Setempdetail(reponse.data)
    }
  return (
    <div className="p-4">
        <form onSubmit={handlesubmit} className="mb-4">
        <select name="manager" id="value" onChange={(e)=>setManager(e.target.value)}
        className="mr-2 p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="amar">Amar</option>
            <option value="hari">Hari</option>
            <option value="saravanan">saravanan</option>
        </select>
        <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Search</button>
        </form>
        
        <div>
        {manager && <h1 className="p-6 font-extrabold">{manager}</h1>}
            {empdetail.map((val)=>{
                return(
                    <ul key={val._id} className="mb-4">
                        <li key={val._id} className="text-red-600 mb-1">Name: {val.name}</li>
                        <li key={val._id} className="mb-1">position: {val.position}</li>
                        <li key={val._id} className="mb-1">adhaar: {val.adhaar}</li>
                        <li key={val._id} className="mb-1">ifsc: {val.ifsc}</li>
                        <li key={val._id} className="mb-1">bankacc: {val.bankacc}</li>
                        <li key={val._id} className="mb-1">esi: {val.esi}</li>
                        <li key={val._id} className="mb-1">pf: {val.pf}</li>
                    </ul>
                )
            })}
        </div>
    </div>
  )
}

export default Manger