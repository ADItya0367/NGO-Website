import React from 'react'
import buddha from './buddha.png'
export default function Hero() {
  return (
    <div className='container-fluid row mt-4 hero '>
        <div className='col-md-7'>
            <h1 className='display-1'>Help the Poor, take your Blessings</h1>
            <i class="ri-hand-heart-fill d-block m-2">Help the needy</i>
            <i class="ri-hand-heart-fill d-block m-2"> Sukh milega sabko</i>
            <i class="ri-hand-heart-fill d-block m-2">Shanti milega sabko</i>
            <p className='lead'>Millions of movies, TV shows and people to discover. Explore now.</p>
            <button type='button' className='btn btn-primary mb-2 me-2'>Donate</button>
            <button type='button' className='btn btn-danger mb-2 btn2'>Donate</button>
        </div>

      <img src={buddha} className='buddha' ></img>
    </div>
  )
}
