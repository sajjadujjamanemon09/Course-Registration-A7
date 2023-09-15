import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [remainingHour, setRemainingHour] = useState(20)
  const [totalCredit , setTotalCredit] = useState(0)
 
  const handleAddToBookmark = course =>{
    const newBookmarks = [...bookmarks, course]
    const newRemainingHour = remainingHour - course.credit
    const newTotal = totalCredit + course.credit

    setRemainingHour(newRemainingHour)
    setTotalCredit(newTotal)
    setBookmarks(newBookmarks)
  }
  

  return (
    <>
     <div className='max-w-screen-2xl mx-auto'>
     <Header></Header>
     <div className='md:flex'>
     <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
     <Bookmarks bookmarks={bookmarks} remainingHour={remainingHour} totalCredit={totalCredit} ></Bookmarks>
     </div>
     </div>
    </>
  )
}

export default App
