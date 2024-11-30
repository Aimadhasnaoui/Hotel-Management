import React, { useEffect } from 'react'
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import { getCabins,deleteCabin } from '../../Services/ApiCabin';
import { H1 } from '../../Ui/Elements';
import { Button } from '../../Ui/Elements'
import { storeApi } from '../../ContexApi';
import { useContext } from 'react';
import Loader from '../../Ui/Loader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddNewCabins from './AddNewCabins';
import { Link, Outlet } from 'react-router-dom';

export default function Cabins() {
  const { setOpen,closeform,setdataCabins } = useContext(storeApi);
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  })


  const  mutation = useMutation({
    mutationFn:(id)=>deleteCabin(id),
    onSuccess: async () => {
      queryClient.invalidateQueries(['cabins'])
    },
    onError: (error) => {
      console.log(`rolling back optimistic update with id ${error}`)
    },
  });



  useEffect(() => {
    // const d =  queryClient.invalidateQueries(["cabins"])
    // console.log(d)
    console.log(data)
    // setdataCabins(data)
    if (isLoading) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [isLoading])
  return (
    <div className='py-8 px-6 '>
      <Loader></Loader>
      {!isLoading
        &&
        <main>
          <div className='flex justify-between items-center'>
            <H1>All cabins</H1>
            <Button className='focus:ring focus:ring-offset-2 focus:scale-90' onClick={()=>{closeform(true)}}>Add new cabin</Button>
          </div>
          <div className='grid grid-cols-4 mt-7  py-3 rounded-t-lg border-[1px] border-gray-600'>
            <div className='text-center text-white'>Cabin</div>
            <div className='text-center text-white'>Capacity</div>
            <div className='text-center text-white'>Price</div>
            <div className=' text-white'>Discount</div>
          </div>
          <div className='w-full h-auto border-b-[1px]  border-gray-600 '>
            {
              data.map((i, id) => (
                <div key={id} className='grid grid-cols-4 border-x-[1px] border-b-[1px]  border-gray-600'>
                  <div className='text-center text-white flex gap-8 px-2 '>
                    <img src='https://nyaodbdifwekqpwtsfmt.supabase.co/storage/v1/object/public/CabinImages/cabin-002.jpg' className='w-24' alt="image" />
                    <div className='py-3'>
                      {i.name}
                    </div>
                  </div>
                  <div className='text-center text-white py-3'>
                    {i.maxcapacity}
                  </div>
                  <div className='text-center text-white py-3'>
                    {i.regulerPrice}
                  </div>
                  <div className='text-white py-3 flex justify-between px-2 items-center'>
                    <div>
                      {i.discount}
                    </div>
                    <div className='flex gap-3'>
                      <Link to={`/cabins/edit/${i.id}`}>
                      <EditIcon className='text-gray-600 cursor-pointer' onClick={()=>{
                       setdataCabins(i)
                      }} ></EditIcon>
                      </Link>
                      <DeleteIcon className='text-gray-600 cursor-pointer' onClick={()=>{mutation.mutate(i.id)}}></DeleteIcon>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
      }
      <Outlet></Outlet>
      <AddNewCabins></AddNewCabins>
    </div>
  )
}
