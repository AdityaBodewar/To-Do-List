import axios from 'axios'
import { useEffect, useState } from 'react'

const List_data = () => {

const [data,setData]=useState([]);


const handleSubmit=(id,status)=>{

  axios.put(`http://localhost:3000/update_status/${id}/${status}`)
  .then(res=>{console.log("updated")})
  .catch(error=>{console.log(error)});
  
 window.location.reload()
}

  useEffect(()=>{

   axios.get("http://localhost:3000/get_data")
    .then((res)=>{setData(res.data)})
    .catch((error)=>{console.log(error)});
   
  },[])

console.log(data);
  return (
  <>
<div className='flex flex-wrap h-full mt-10'>
  {data.map((item)=>{
return(
<div className="card card-border border-white bg-blue-600 m-2 text-white w-96" key={item._id}>
  <div className="card-body" >
    <h2 className="card-title">{item.Title}</h2>
    <p>{item.Description}</p>
   
    <div className="card-actions justify-end">
      
    </div>
     <input type="checkbox" name="Status" checked={item.Status} className='ml-80 w-4 h-4' onClick={()=>handleSubmit(item._id,item.Status)} />
  </div>
</div>

)

  })}
  </div>

     
  </>
  )
}

export default List_data