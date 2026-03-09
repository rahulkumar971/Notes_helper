import React from 'react'
import SearchBar from '../components/SearchBar'
import NotesCard from '../components/NotesCard'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
   <div>
    
    <NavBar />
      <SearchBar />
     <NotesCard />
     
    </div>
   
  )
}

export default Home