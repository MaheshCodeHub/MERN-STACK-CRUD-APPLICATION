import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
       getAllUser()
    }, [])

    const getAllUser = async()=>{
        let response= await axios.get("http://localhost:8000/api/getall")
        setUsers(response.data)
    }

    const deleteUserData =async (userID) => {
        await axios.delete(`http://localhost:8000/api/delete/${userID}`)
        .then((response)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !== userID))
        })
      
    }
    
    
  return (   
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="col-span-12">
            <div class="overflow-auto lg:overflow-visible ">
                <table class="table text-gray-400 border-separate space-y-6 text-sm">
                    <thead class="bg-gray-800 text-gray-500">
                        <tr>
                            <th class="p-3">Email</th>
                            <th class="p-3 text-left">Password</th>                   
                            <th class="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>
                        <tr key={user.id} class="bg-gray-800">
                            <td class="p-3">
                                <div class="flex align-items-center">
                                    
                                    <div class="ml-3">                                        
                                        <div class="text-gray-500">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="p-3">
                                {user.password}
                            </td>
                            
                            <td class="p-3 ">
                                
                                <Link to={`/edit/${user._id}`} class="text-gray-400 hover:text-gray-100  mx-2">
                                    <i class="material-icons-outlined text-base">edit</i>
                                </Link>
                                <button onClick={()=> deleteUserData(user._id)} class="text-gray-400 hover:text-gray-100  ml-2">
                                    <i class="material-icons-round text-base">delete</i>
                                </button>
                            </td>
                        </tr>
                       )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
  
  )
}

export default User
