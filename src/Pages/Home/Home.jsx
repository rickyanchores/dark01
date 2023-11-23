import React from 'react'
import Card from '../../Components/Card/Card';

const Home = () => {

  let heroImage = "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className='Home'>
        <div className="hero">
          <h1>Home</h1>
          <p>This home</p>
          <button className='btn'>
            <h5>Read more</h5>
          </button>
        </div>
        <div className="hero-img">
          <Card image={heroImage} text="Black and White"/>
        </div>
    </div>
  )
}

export default Home;