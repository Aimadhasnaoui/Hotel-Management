import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
export default function NavBar({Menu,setMenu}) {
  function SubmitMenu() {
    const newMenuState = !Menu;
    setMenu(newMenuState);
    localStorage.setItem('menu', newMenuState.toString()); // Save the new state as a string
}

  return (
    <div className="w-full h-[50px] bg-[#1f2937] border-b-[1px] px-4 py-4 border-gray-500 flex justify-between items-center">
      <div>
        {!Menu && 
          <div onClick={()=>{SubmitMenu()}}>
            <MenuIcon className='text-white cursor-pointer'></MenuIcon>
          </div>
        }
        {Menu && 
         <div onClick={()=>{SubmitMenu()}}>
            <MenuOpenIcon className='text-white cursor-pointer'></MenuOpenIcon>
          </div>
        }
      </div>
      <div>

      </div>
    </div>
  )
}
