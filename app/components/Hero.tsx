'use client'
import React from 'react'
import Image from 'next/image'
import CustomButton  from './CustomButton'

const hero = () => {
  const handleScroll = () => {
    // Your scroll handling logic here
  }
  return (
    <div className= "hero">
      <div className="flex-1 pt-36 padding-x">
        {/* <h1 className="hero_title">
          it's shitbox dude.
          </h1> */}
          <p className="hero-subtitle text-2xl font-extrabold">
          Welcome to CarHub! Your one-stop destination for finding car listings and engaging with car enthusiasts across various communities. Whether you’re looking to buy or just talk about cars, CarHub has got you covered.
          </p>
          <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/car.png" alt="hero"
            fill className="object-contain"
            />
            </div>
            <div className="hero__image-overlay"/>
        </div>
      </div>
  )
}

export default hero