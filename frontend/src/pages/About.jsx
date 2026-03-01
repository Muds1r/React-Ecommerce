import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md: w-2/4 text-gray-700'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus est sunt quis suscipit ad similique esse amet in repudiandae enim nam, quae officiis inventore dolore, ab totam? Debitis, impedit.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis minima voluptates sunt, illum tempora nesciunt quibusdam fugit qui ipsum voluptatibus veritatis alias quis fuga? Molestias laboriosam beatae inventore exercitationem assumenda!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui saepe perferendis repellat, delectus omnis aliquid obcaecati facere blanditiis doloremque cupiditate culpa. Ea deserunt error ipsum ut inventore fugiat eveniet qui!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea nemo numquam quia, itaque illum voluptate temporibus a quis possimus? Quod, repudiandae natus! Ratione provident laborum ut aut numquam incidunt!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit commodi facere ex, rem ut aut. Quod asperiores tempora cum consequuntur beatae hic aut alias magnam? Enim, ea. Voluptatem, a.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem delectus error. Distinctio dicta voluptate eos, tempore nisi autem earum consequatur nobis sit facere esse maxime voluptates asperiores, repellendus sapiente.</p>
        </div>
      </div >

      <NewsletterBox />
    </div >
  )
}

export default About