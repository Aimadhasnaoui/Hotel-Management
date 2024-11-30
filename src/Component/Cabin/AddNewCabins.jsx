import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { storeApi } from '../../ContexApi';
import { useMutation,useQueryClient } from '@tanstack/react-query';
import { AddNewCabin } from '../../Services/ApiCabin';

export default function AddNewCabins() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { openform, closeform } = useContext(storeApi);
  const queryClient = useQueryClient();
  const  mutation = useMutation({
    mutationFn:(data)=>AddNewCabin(data),
    onSuccess: async () => {
      queryClient.invalidateQueries(['cabins']);
      closeform(false);
    },
    onError: (error) => {
      console.log(`rolling back optimistic update with id ${error}`)
    },
  });

  const onSubmit = data => {
    mutation.mutate(data);
    // queryClient.invalidateQueries(['cabins']);
  };
  function handleClose(){
    closeform(false);
  }
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={openform}
    >
      <div className='bg-[#18212f] w-[70%] h-auto  rounded-xl flex flex-col'>
        <div className='py-3 border-b-[1px] border-gray-500 px-10 flex justify-between items-center'>
          <h1 className='text-[20px]'>Add new cabin</h1>
          <div onClick={handleClose}>
          <CloseIcon className='cursor-pointer' ></CloseIcon>
          </div>
        </div>
        <form className='my-4 flex-grow px-8' onSubmit={handleSubmit(onSubmit)}>
          <div
            className="grid items-center border-b-[1px] border-gray-600 py-2 gap-5"
            style={{ gridTemplateColumns: "240px 1fr 250px" }}
          >
            <label htmlFor="name" className="font-light">
              Cabin name
            </label>
            <input
              {...register("name", {
                required: { value: true, message: "Cabin name is required" },
                minLength: { value: 2, message: "the name must be at least 2 characters" }
              })}
              type="text"
              className="w-full text-gray-300 py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>
          <div className='grid  items-center border-b-[1px] border-gray-600 py-4 gap-5'
            style={{ gridTemplateColumns: "240px 1fr 250px" }}
          >
            <label htmlFor="maxcapacity" className='font-light'>Maximum capacity</label>
            <input {...register("maxcapacity", {
              required: { value: true, message: "capacity  is required" },
            })} type="number" className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent' />
            {errors.maxcapacity && (
              <span className="text-red-500 text-sm">{errors.maxcapacity.message}</span>
            )}
          </div>
          <div className='grid  items-center border-b-[1px] border-gray-600 py-4 gap-5'
            style={{ gridTemplateColumns: "240px 1fr 250px" }}
          >
            <label htmlFor="regulerPrice" className='font-light'>Regular price</label>
            <input {...register("regulerPrice", {
              required: { value: true, message: "price  is required" },
            })} type="number" name='regulerPrice' className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent' />
            {errors.regulerPrice && (
              <span className="text-red-500 text-sm">{errors.regulerPrice.message}</span>
            )}
          </div>
          <div
            className='grid  items-center border-b-[1px] border-gray-600 py-4 gap-5'
            style={{ gridTemplateColumns: "240px 1fr 250px" }}
          >
            <label htmlFor="discount" className='font-light'>Discount</label>
            {/* <textarea className='outline-none px-4' ></textarea> */}
            <input {...register("discount", {
              required: { value: true, message: "Discount  is required" },
            })} type="number" className='w-full py-2 px-4 outline-none border-[1px] rounded-md border-gray-600 bg-transparent' />
            {errors.discount && (
              <span className="text-red-500 text-sm">{errors.discount.message}</span>
            )}
          </div>
          <div
            className="grid items-center border-b-[1px] border-gray-600 py-4 gap-5"
            style={{ gridTemplateColumns: "240px 1fr 250px" }}
          >
            <label htmlFor="descreption" className="font-light">
              Description
            </label>
            <textarea
              {...register("descreption", {
                required: { value: true, message: "Description is required" },
                minLength: { value: 4, message: "The description must be at least 4 characters" },
              })}
              className="outline-none text-gray-300 bg-transparent border-[1px] rounded-md border-gray-600 px-4 py-2"
              name="descreption" 
            ></textarea>
            {errors.descreption && (
              <span className="text-red-500 text-sm">{errors.descreption.message}</span>
            )}
          </div>

          <div
            className='grid  items-center border-b-[1px] border-gray-600 py-4 gap-5'
            style={{ gridTemplateColumns: "240px 1fr 250px" }}
          >
            <label htmlFor="image" className='font-light' >Cabin photo</label>
            <input {...register("image", {
              required: { value: true, message: "Description  is required" },
            })} type="file" />
            {errors.image && (
              <span className="text-red-500 text-sm">{errors.image.message}</span>
            )}
          </div>
          <div className='flex gap-5 py-1 mb-auto items-center justify-end px-4'>
            <input type='submit' value='Creat New Cabin' className='bg-[#4f46e5] cursor-pointer px-3 py-[10px] border-[1px] border-gray-600 rounded-[5px] focus:ring-2 focus:ring-[#4f46e5]'></input>
          </div>
        </form>
        <div>
        </div>
      </div>
    </Backdrop>
  )
}
