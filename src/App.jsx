import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppRouter as routes } from "./Routers"
import { RouterProvider } from "react-router-dom"
// import {storeApi} from './ContexApi'
function App() {
  const queryCliet = new QueryClient({
    defaultOptions:{
      queries:{
        refetchInterval: 0,
      }
    }
  })


  return (
    <QueryClientProvider client={queryCliet}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Cabins></Cabins>
    <div>
    <Button state={state} onClick={()=>{setstate(true)}}>Click me</Button>
      <img src="https://nyaodbdifwekqpwtsfmt.supabase.co/storage/v1/object/public/CabinImages/cabin-002.jpg" alt="" />
    </div> */}
    {/* <AppLayer></AppLayer> */}
    </QueryClientProvider>
  )
}

export default App
