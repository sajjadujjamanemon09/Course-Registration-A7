import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [remainingHour, setRemainingHour] = useState(20)
  const [totalCredit , setTotalCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
 
  const handleAddToBookmark = course =>{
    const isExist = bookmarks.find((item) => item.id == course.id)
    if(remainingHour > 0 && course.credit <= remainingHour){
      if(isExist){
        toast("Warning ! This Course already has selected.");
      }
      else{
        const newBookmarks = [...bookmarks, course]
        const newRemainingHour = remainingHour - course.credit
        const newTotal = totalCredit + course.credit
        const newPrice = totalPrice + course.price
    
        setRemainingHour(newRemainingHour)
        setTotalCredit(newTotal)
        setBookmarks(newBookmarks)
        setTotalPrice(newPrice)
      }
    }
    else{
      toast("Sorry ! You don't have enough Credit remaining");
      }
  }
  

  return (
    <>
     <div className='max-w-screen-2xl mx-auto'>
     <Header></Header>
     <div className='md:flex'>
     <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
     <Bookmarks bookmarks={bookmarks} remainingHour={remainingHour} totalCredit={totalCredit} totalPrice={totalPrice} ></Bookmarks>
     </div>
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
