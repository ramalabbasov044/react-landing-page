import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import MovieData from '../../services/data.json'
const HomePage = () => {
  return (
    <>
        <Navbar />

            <main>
                <Slider />

                <Card movieData={MovieData} />
            </main>
    </>
  )
}

export default HomePage