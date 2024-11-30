import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import { H1 } from '../../Ui/Elements';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { storeApi } from '../../ContexApi';
import { useMutation,useQuery,useQueryClient } from '@tanstack/react-query';
import {  Link, useParams } from 'react-router-dom';
import supabase from '../../Services/supabase';
import { getById,UpdateData } from '../../Services/ApiCabin';
import { PhoneEnabled } from '@mui/icons-material';


export default function Updatdatas() {

  
  const Id = useParams().id;
  const queryClient = useQueryClient()
  
  const {data,isError,isSuccess} = useQuery({
    queryKey: ["cabins",Id],
    queryFn:()=> getById(Id),
    enabled: !!Id, 
  })
  
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      name: '',
      maxcapacity: '',
      regulerPrice: '',
      discount: '',
      descreption: '',
      image: '',
    }
  });
  
  useEffect(() => {
    console.log("Query")
    if(isSuccess){
      reset({
        name: data[0]?.name || '',
        maxcapacity: data[0]?.maxcapacity || '',
        regulerPrice: data[0]?.regulerPrice || '',
        discount: data[0]?.discount || '',
        descreption: data[0]?.descreption || '',
        image: data[0]?.image || '',
      });  
    }
    if(isError){
      // console.log(data);
      console.log("Error")
    }
  }, [isSuccess]);
  const  mutation = useMutation({
    mutationFn:(data)=>UpdateData(data,Id),
    onSuccess: async () => {
      console.log('success')
      // queryClient.invalidateQueries(['cabins']);
    },
    onError: (error) => {
      console.log(`${error.message}`);
    },
  });
  const onSubmit = newData => {
    // console.log(newData);
    // console.log(Id)
    mutation.mutate(newData);
  };

  if (isError) return null; //
  // const Id = useParams().id
  // useEffect(()=>{
  //   const data = datadatas.filter((word) => word.id === +Id );
  //     console.log(data[0]);
  //     setdata(data[0])
  //     console.log(data[0])
  //   // console.log(Id === "7");
  // },[datadatas,Id])
  // (()=>{
  //   const data = queryClient.getQueriesData(["datas"])
  //   const specificdata = data.find((data) => data.id === 1);
  //   console.log(specificdata)
  //   // console.log(data[0][1].find((d)=>{d.id === 1}));
  //   console.loguseEffect('hello')
  // },[])
  

  // const onSubmit = data => {
  //   mutation.mutate(data);
  // };
  return (
    <Backdrop
    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
    open={isSuccess}
  >
    <div className='bg-[#18212f] w-[70%] h-auto  rounded-xl flex flex-col'>
      <div className='py-3 border-b-[1px] border-gray-500 px-10 flex justify-between items-center'>
        <h1 className='text-[20px]'>Update data</h1>
        <Link to='/cabins'>
          <CloseIcon className='cursor-pointer'></CloseIcon>
        </Link>
      </div>
      <form className='my-4 flex-grow px-8' onSubmit={handleSubmit(onSubmit)}>
        <div className="grid items-center border-b-[1px] border-gray-600 py-2 gap-5" style={{ gridTemplateColumns: "240px 1fr 250px" }}>
          <label htmlFor="name" className="font-light">data name</label>
          <input
            {...register("name", {
              required: { value: true, message: "data name is required" },
              minLength: { value: 2, message: "The name must be at least 2 characters" }
            })}
            type="text"
            className="w-full text-gray-300 py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className='grid items-center border-b-[1px] border-gray-600 py-4 gap-5' style={{ gridTemplateColumns: "240px 1fr 250px" }}>
          <label htmlFor="maxcapacity" className='font-light'>Maximum capacity</label>
          <input
            {...register("maxcapacity", {
              required: { value: true, message: "Capacity is required" },
            })}
            type="number"
            className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent'
          />
          {errors.maxcapacity && (
            <span className="text-red-500 text-sm">{errors.maxcapacity.message}</span>
          )}
        </div>

        <div className='grid items-center border-b-[1px] border-gray-600 py-4 gap-5' style={{ gridTemplateColumns: "240px 1fr 250px" }}>
          <label htmlFor="regulerPrice" className='font-light'>Regular price</label>
          <input
            {...register("regulerPrice", {
              required: { value: true, message: "Price is required" },
            })}
            type="number"
            className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent'
          />
          {errors.regulerPrice && (
            <span className="text-red-500 text-sm">{errors.regulerPrice.message}</span>
          )}
        </div>

        <div className='grid items-center border-b-[1px] border-gray-600 py-4 gap-5' style={{ gridTemplateColumns: "240px 1fr 250px" }}>
          <label htmlFor="discount" className='font-light'>Discount</label>
          <input
            {...register("discount", {
              required: { value: true, message: "Discount is required" },
            })}
            type="number"
            className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent'
          />
          {errors.discount && (
            <span className="text-red-500 text-sm">{errors.discount.message}</span>
          )}
        </div>

        <div className="grid items-center border-b-[1px] border-gray-600 py-4 gap-5" style={{ gridTemplateColumns: "240px 1fr 250px" }}>
          <label htmlFor="descreption" className="font-light">Description</label>
          <textarea
            {...register("descreption", {
              required: { value: true, message: "Description is required" },
              minLength: { value: 4, message: "The description must be at least 4 characters" },
            })}
            className="outline-none text-gray-300 bg-transparent border-[1px] rounded-md border-gray-600 px-4 py-2"
          ></textarea>
          {errors.descreption && (
            <span className="text-red-500 text-sm">{errors.descreption.message}</span>
          )}
        </div>

        <div className='grid items-center border-b-[1px] border-gray-600 py-4 gap-5' style={{ gridTemplateColumns: "240px 1fr 250px" }}>
          <label htmlFor="image" className='font-light'>data photo</label>
          <input
            {...register("image", {
              required: { value: true, message: "Image is required" },
            })}
            type="file"
            className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent'
          />
          {errors.image && (
            <span className="text-red-500 text-sm">{errors.image.message}</span>
          )}
        </div>

        <div className='flex gap-5 py-1 mb-auto items-center justify-end px-4'>
          <input
            type='submit'
            value='Create New data'
            className='bg-[#4f46e5] cursor-pointer px-3 py-[10px] border-[1px] border-gray-600 rounded-[5px] focus:ring-2 focus:ring-[#4f46e5]'
          />
        </div>
      </form>
    </div>
  </Backdrop>
  )
}