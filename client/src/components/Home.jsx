import axios from 'axios';
import { useState } from 'react'


const Home = () => {

 const [data,setData]=useState({Title:'',Description:''});


 const handleChange=(e)=>{
  
    setData({...data,[e.target.name]:e.target.value})
 }




    const handleSubmit=async(e)=>{
     e.preventDefault();
       await axios.post("http://localhost:3000/add_data",data)
        .then((res)=>{alert("data added successfully ")})
        .catch((error)=>{console.log(error)}); 
      
      window.location.reload()
    }
  return (
   <> 
    <div className="navbar  shadow-sm justify-center h-20 bg-gray-800"> 
  <a className="text-3xl ">To-Do-List</a>
</div>


<button className="btn mt-10 ml-10 rounded-3xl px-9  bg-amber-700 " onClick={()=>document.getElementById('my_modal_3').showModal()}>+ add task</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="POST" onSubmit={handleSubmit}>

     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border ml-5 p-4">
  <legend className="fieldset-legend">Add Task</legend>

  <label className="label">Title</label>
  <input type="text" name='Title' className='input' value={data.Title} placeholder="Enter Title" required onChange={handleChange} />

  <label className="label">Description</label>
  <input type="text" name='Description' className='input' value={data.Description} placeholder="Enter Description " required onChange={handleChange} />

<button  className='btn btn-sm btn-ghost border-1 border-black' type="submit">save</button>
</fieldset>

    </form>
    
   
  </div>
</dialog>

   </>
  )
}

export default Home