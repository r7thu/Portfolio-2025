"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {

     const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        setTime(`${hours}:${minutes}`);
        };

        updateTime(); // initial run
        const interval = setInterval(updateTime, 1000 * 60); // update every minute

        return () => clearInterval(interval); // clean up interval on unmount
    }, []);


  return (
    <div className='flex justify-between items-center text-[12.5px] sm:text-[15px] mt-1.5 sm:mt-4 mx-3 sm:mx-8'>
        <p className='text-white'>IN {time}</p>
        <p className='text-white'>Kerala, India</p>
    </div>
  )
}

export default Navbar