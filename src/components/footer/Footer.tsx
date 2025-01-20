import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import logo from '../../assets/logo.svg'
import { FaTwitter } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import { FaApplePay, FaGooglePay, FaCcPaypal } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='bg-[#F0F0F0] mt-[100px] px-4'>
      <div className='container m-auto relative'>
        <div className='container m-auto px-4 bg-black text-white rounded-3xl absolute top-[-100px] left-0'>
          <div className='flex justify-between items-center py-11 px-16 gap-20 max-lg:flex-col max-lg:gap-7'>
            <p className='text-4xl text-balance max-lg:text-center max-lg:text-2xl max-md:text-xl max-[410px]:text-base max-[410px]:font-semibold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center py-3 pl-3 pr-32 rounded-3xl bg-white gap-3 max-[410px]:pr-16'>
                <TfiEmail className='text-[#00000066] text-lg' />
                <input type="email" placeholder='Enter your email address' className='outline-none text-[#000006]' />
              </div>
              <button className='py-3 bg-white text-black px-24 rounded-3xl text-nowrap max-[410px]:px-16'>Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
        <div className='pt-40 grid grid-cols-5 gap-28 max-lg:grid-cols-3 max-lg:pt-48 max-md:grid-cols-2 max-md:pt-56 max-[555px]:grid-cols-1 max-[455px]:justify-center'>
          <div className='flex flex-col gap-6'>
            <div>
              <img src={logo} alt="" />
            </div>
            <p className='flex-1'>
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className='flex gap-3 items-center'>
              <div className='p-2 bg-white rounded-full'>
                <FaTwitter />
              </div>
              <div className='p-2 bg-white rounded-full'>
                <FaTwitter />
              </div>
              <div className='p-2 bg-white rounded-full'>
                <FaTwitter />
              </div>
              <div className='p-2 bg-white rounded-full'>
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg'>Company</h3>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg'>Help</h3>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg'>FAQ</h3>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg'>Resources</h3>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
        <div className='flex justify-between pt-5 mt-12 pb-20 border-t-2 max-md:flex-col max-md:items-center gap-8'>
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className='flex items-center gap-3 text-2xl'>
            <div className='py-2 px-3 bg-white shadow-md rounded'>
              <RiVisaLine className='text-blue-600'/>
            </div>
            <div className='py-2 px-3 rounded bg-white shadow-md'>
              <RiMastercardFill className='text-orange-400'/>
            </div>
            <div className='py-2 px-3 rounded bg-white shadow-md'>
              <FaCcPaypal className='text-blue-600'/>
            </div>
            <div className='py-2 px-3 rounded bg-white shadow-md'>
              <FaApplePay/>
            </div>
            <div className='py-2 px-3 rounded bg-white shadow-md'>
              <FaGooglePay/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer