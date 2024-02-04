"use client"
import React, { useState } from 'react';
import '@styles/addschooldata.css'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const AddSchoolData=()=>{
    const router=useRouter();
    const { register, handleSubmit,formState:{errors} } = useForm();
    const [image,setImage]=useState(null)
  
   function handleImage(e){
    setImage(e.target.files[0]);
   }

  const onSubmit = (Data,e) => {
    const formData=new FormData();
    formData.append('file',image);
    const adddata=async()=>{
      try{
        const  response=await fetch('/api/school',{
          method:'POST',
          body:JSON.stringify({...Data,['image']:image.name}),
          headers:{'content-type':'application/json'}
      })
      const data=await response.json();
      }catch(error){
        console.log('error in frontend during insertion',error)
      }

      try{
        const  response=await fetch('/api/school/image',{
          method:'POST',
          body:formData
      })

      }catch(error){
        console.log('error in frontend during image upload: ',error)
      }
        
    
    }
    
    adddata();

    router.push('/');
      };
    
      return (
        <div >
          <div className='nav2'>
          <h1 className='h1'>Add Your School Data</h1>
          </div>
           
           <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
      <label>
        School Name:
        <input type="text" {...register('name',{required:true})} />
      </label>
      <label>
        Address:
        <input type="text" {...register('address',{required:true})} />
      </label>
      <label>
        City:
        <input type="text" {...register('city',{required:true})} />
      </label>
      <label>
        State:
        <input type="text" {...register('state',{required:true})} />
      </label>
      <label>
        Contact:
        <input type="number" {...register('contact',{required:true})} />
      </label>
      <label>
        Image:
        <input type="file" {...register('image',{required:true})} onChange={handleImage} />
      </label>
      <label>
        Email:
        <input type="email" {...register('email_id', {
                    required: 'email is required',
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: 'email not valid',
                    },
                  })} />
      </label>
      <button type="submit">Submit</button>
    </form>
           </div>
          
        </div>
       
      );
}

export default AddSchoolData;