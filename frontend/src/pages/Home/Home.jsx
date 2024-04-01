import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDissplay from '../../components/FoodDisplay/FoodDissplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

      const[category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDissplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
