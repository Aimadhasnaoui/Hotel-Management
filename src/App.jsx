// import styled from "styled-components"
import Button from "./Ui/Button"
import { useEffect, useState } from "react"
import { getCabins } from "./Services/ApiCabin"
function App() {
  const [state,setstate] = useState(false)
  useEffect(()=>{
    console.log(getCabins())
  },[])
//   const H1 = styled.h1`
//   font-size:31px;
//   font-weight:400;
//   color: #333;
//   `;


  return (
    <div>
      <Button state={state} onClick={()=>{setstate(true)}}>Click me</Button>
      <img src="https://nyaodbdifwekqpwtsfmt.supabase.co/storage/v1/object/public/CabinImages/cabin-002.jpg" alt="" />
    </div>
  )
}

export default App
