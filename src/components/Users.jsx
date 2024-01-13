import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Users = () => {
    let [data, setdata] = useState([])


    let deleteuser = (e) => {
        axios.delete(`http://localhost:5000/employee/${e}`)

        window.location.assign('/users')
    }

    useEffect(() => {
        axios.get('http://localhost:5000/employee')
            .then((e) => { setdata(e.data) })
    }, [])
    return (
        <div  id = { style.users}>
            {data.map((e) => {
                return (

                    <div>
                        
                        <h2>name:{e.name}</h2>
                        <h2>pass:{e.pass}</h2>
                        <h2>email:{e.mail}</h2>
                        <h2>gender:{e.gender}</h2>
                        
                        <h2>age:{e.age}</h2>
                        <h2>comment:{e.comment}</h2>
                        <h2>color:{e.color}</h2>
                        <h2>date:{e.date}</h2>
<br />
                        <button >< Link to = {`/edit/${e.id}`} >EDIT</Link></button>
                        <br />

                        <td><button onClick={() => { deleteuser(e.id) }} >Delete</button></td>

                        
                    </div>

                )
            })}
        </div>
    )
}
export default Users
