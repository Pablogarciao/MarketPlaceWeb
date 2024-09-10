import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600' >
                Care Cortada marketplace has a lot of variety in their products. Subscribe to one of our memberships and enjoy the exclusive catalog products that we offer...
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About us</li></Link>
                <Link to='/contact'><li>Contact us</li></Link>
                <Link to='/membership'><li>Exclusive Membership</li></Link>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 text-center'>CONTACT LA CARE CORTADA</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-765-553-777</li>
                    <li>carecortada@contact.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ carecortada.com - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer