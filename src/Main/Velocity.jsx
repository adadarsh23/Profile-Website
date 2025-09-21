import React from 'react'
import ScrollVelocity from '../components/ScrollVelocity';

export default function Velocity() {
  return (
    <div className='overflow-hidden mb-30 flex flex-col space-y-10'>
      <ScrollVelocity
        texts={['React Bits', 'Scroll Down',"Nice Bits", "yo React"]}
        velocity={100}
        className="relative overflow-hidden text-7xl font-bold sm:text-7xl md:text-7xl lg:text-7xl text-white p-4 sm:p-6 z-10 drop-shadow-lg"
      />
    </div>
  )
}
