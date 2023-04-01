import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

export default function Todo() {
    const obj ={
        title:"todo1",
        desc:"todo 1 descripation",
        priority:1
    }
    const [data, setdata] = useState(obj)
    const [todos, settodos] = useState([])
    const [upDates, setupDates] = useState([])

    const handledata = async() => {
        const {data}= await axios.get("http://localhost:5000/todo/")
        console.log(data.result); 
        settodos(data.result)
    }
    const Adddata = async(arg) => {
        const {data}= await axios.post("http://localhost:5000/todo/add-todo" , arg)
        // console.log(arg); 
    }
    const deleteTodo = async(arg) => {
        const {data}= await axios.delete(`http://localhost:5000/todo/${arg}`)
        // console.log(arg); 
        handledata()
    }

    const handleUpdDate =async (arg)=>{
        const {_id} = upDates
        console.log(_id);
        const {data}= await axios.put(`http://localhost:5000/todo/${_id}`,upDates) 
        handledata()
    }
    useEffect(()=>{
        handledata()
    },[])
  return (<>
  <input   value={data.title} onChange={e => setdata({...data,title:e.target.value})} type="text" name="" id="" />
  <input  value={data.desc} onChange={e => setdata({...data,desc:e.target.value})} type="text" name="" id="" />
  <input  value={data.priority} onChange={e => setdata({...data,priority:e.target.value})} type="text" name="" id="" />
  <button onClick={e => Adddata(data)}>add</button>

  {
     todos.map(item => <div key={item._id}>
        <li>{item.title}</li>
        <li>{item._id}</li>
        <button onClick={e => setupDates(item)}>edit</button>
        <button onClick={e => deleteTodo(item._id)}>delete</button>
     </div>)
  }
  
   <input value={upDates.title} onChange={e => setupDates({...upDates,title:e.target.value})} type="text"  />
   <input value={upDates.desc} onChange={e => setupDates({...upDates,desc:e.target.value})} type="text"  />
   <input value={upDates.priority} onChange={e => setupDates({...upDates,priority:e.target.value})} type="text"  />
   <button onClick={e => handleUpdDate()}>update</button>

  </>
  )
}
