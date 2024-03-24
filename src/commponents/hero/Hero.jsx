import React from 'react';
import './style/hero_style.css';

export default function Hero() {

  return (
    <div className='hero_container w-full flex justify-center'>
        <header className='wrapper flex flex-col-reverse xl:flex-row xl:justify-between'>
           <section className='heroText w-full xl:w-2/5  h-4/6 xl:h-full pt-32 sm:pt-40 xl:pt-10 flex flex-col items-center md:items-start xl:justify-center'>
              <h1 className='text-3xl xl:text-5xl mb-4 text-center md:text-left'>Next generation investment</h1>
              <p className='text-lg mb-8 sm:mb-8 xl:mb-4 text-center md:text-left'>
                  Take your investment life online.
                  Your Bee4Invest account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
              </p>
              <button className='btn btn-neutral w-40 h-14 xl:h-12 rounded-full flex justify-center items-center'>Request invite</button>
           </section>
        </header>
    </div>
  )
}
