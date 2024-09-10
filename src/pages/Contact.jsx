import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src='https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Office</p>
          <p className='text-gray-500'>394 Oconee Street <br/> Unit #11, Athens, GA </p>
          <p className='text-gray-500'>Tel: +1-765-553-777 <br/> Email: carecortada@contact.com </p>
          <p className='font-semibold text-xl text-gray-600'>Need assistance?</p>
          <p className='text-gray-500'>Schedule an appointment right now!</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Schedule an appointment</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact