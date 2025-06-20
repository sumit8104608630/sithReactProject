import React from 'react'

function Footer() {
  return (
    <div className='bg-black  text-white'>
     <div className=' flex gap-20 px-20 justify-center py-20'>
      <div >
        Logo
      </div>

<section>
  <h1 className="text-2xl font-medium text-gray-300">State</h1>
  <ul className="text-gray-400 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
    <li>Andhra Pradesh</li>
    <li>Arunachal Pradesh</li>
    <li>Assam</li>
    <li>Bihar</li>
    <li>Chhattisgarh</li>
    <li>Goa</li>
    <li>Gujarat</li>
    <li>Haryana</li>
    <li>Himachal Pradesh</li>
    <li>Jharkhand</li>
    <li>Karnataka</li>
    <li>Kerala</li>
    <li>Madhya Pradesh</li>
    <li>Maharashtra</li>
    <li>Manipur</li>
    <li>Meghalaya</li>
    <li>Mizoram</li>
    <li>Nagaland</li>
    <li>Odisha</li>
    <li>Punjab</li>
    <li>Rajasthan</li>
    <li>Sikkim</li>
    <li>Tamil Nadu</li>
    <li>Telangana</li>
    <li>Tripura</li>
    <li>Uttar Pradesh</li>
    <li>Uttarakhand</li>
    <li>West Bengal</li>
  </ul>
</section>
        <section>
        <h1 className='text-2xl font-medium text-gray-300'>Company</h1>
        <ul className='text-gray-400 flex mt-5 flex-col gap-2'>
        <li>Explore the galaxy</li>
        <li>Eat chocolate pizza</li>
        <li>Dance like nobody's watching</li>
        <li>Build a robot friend</li>
        <li>Learn how to juggle fire</li>
        </ul>
      </section>
   <section>
    <h1 className='text-2xl font-medium text-gray-300'>About</h1>
        <ul className='text-gray-400 flex mt-5 flex-col gap-2'>
  <li>Connecting homeowners with trusted professionals</li>
  <li>Fast and reliable home maintenance services</li>
  <li>User-friendly booking and tracking experience</li>
  <li>Real-time job updates and notifications</li>
  <li>Secure payments and transparent pricing</li>
</ul>
      </section>
      </div>
    <hr className='h-[1px] border-none bg-gray-500'></hr>
           <div className='flex justify-center px-2 py-2'> <p>Made with ❤️ for better food delivery experience</p></div>
    </div>
  )
}

export default Footer