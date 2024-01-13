import React, { useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Create = () => {

  let navigate =useNavigate()


  let [name, setname] = useState('')
  let [pass, setpass] = useState('')
  let [email, setemail] = useState('')

  let [gender, setgender] = useState('')
  
  let [age, setage] = useState('')
  let [comment, setcomment] = useState('')
  let [color, setcolor] = useState('')
  let [date, setdate] = useState('')

  let dname = (e) => { setname(e.target.value) }
  let dpass = (e) => { setpass(e.target.value) }
  let demail = (e) => { setemail(e.target.value) }

  let dmale = (e) => { setgender(e.target.value) }
  
  let dage = (e) => { setage(e.target.value) }
  let dcomment = (e) => { setcomment(e.target.value) }
  let dcolor = (e) => { setcolor(e.target.value) }
  let ddate = (e) => { setdate(e.target.value) }

  let formHandle = (e) => {
    window.location.assign('/users')
    e.preventDefault()
    let load = {
      name: name,
      pass: pass,
      email: email,
     gender:gender,
      age: age,
      comment: comment,
      color: color,
      date: date
    }

    axios.post('http://localhost:5000/employee', load)
      .then((e) => { console.log(e.data); })
    
      navigate('/users')
    
  }

  return (
    <div id={style.create}>

      <h2>Fill Your Details </h2> 

      <form action="">

        <label htmlFor="Username">Username</label>
        <input type="text" onChange={dname} id="Username" name='Username' placeholder='Username' />

        <label htmlFor="Password">Password</label>
        <input type="Password" onChange={dpass} id='Password' placeholder='Password' />

        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='email' onChange={demail} />

        <p>select gender</p>
        <label htmlFor="male">male<input type="radio"  name='gender'  value = "male" onChange={dmale} /></label>

        <label htmlFor="female">female  <input type="radio" id='female' name='gender' value="female" onChange={dmale} />  </label>

        <label htmlFor="other">other<input type="radio" id='other' name='gender'  value= "other" onChange={dmale} /> </label>

        <label htmlFor="age">select age <select name="age" id="age" onChange={dage} >
          <option value="1-10">1-10</option>
          <option value="11-25">11-25</option>
        </select></label>

        <p>comment below</p>
        <textarea name="" id="" cols="20" rows="3" placeholder='comment' onChange={dcomment} ></textarea>

        <label htmlFor="color">pick color<input type="color" id='color' onChange={dcolor} /></label>

        <label htmlFor="date">Date of Birth <input type="date" id='date' onChange={ddate} /></label>

        <input className={style.file} type="file" />

        <button onClick={formHandle}>Submit</button></form>

    </div>
  )
}

export default Create
