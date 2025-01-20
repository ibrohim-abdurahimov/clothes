import { memo } from 'react'
import Product from '../../components/product/Product'
import logo from '../../../public/hero2.png'
import zara from '../../assets/zara.svg'
import gucci from '../../assets/gucci.svg'
import prada from '../../assets/prada.svg'
import versaci from '../../assets/Group (1).svg'
import calvin from '../../assets/Group (2).svg'

const Home = () => {
  return (
    <div className=' pb-20 max-md:mt-20 relative'>
      <section className='bg-hero bg-no-repeat bg-cover	bg-right	py-28 h-[800px] w-full max-lg:pb-0 max-lg:bg-[#F2F0F1] max-lg:bg-none max-lg:h-auto max-lg:py-10'>
        <div className='container m-auto px-4 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:text-center'>
          <h1 className='text-6xl font-bold max-w-[577px] font-serif max-lg:max-w-full max-lg:text-center max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-[588px]:text-2xl'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className='text-[#00000099] mt-8 max-w-[577px] max-lg:max-w-full max-[588px]:text-sm'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className='mt-8 py-4 px-16 bg-black text-white rounded-full'>Shop Now</button>
          <div className='mt-12 flex gap-8 max-lg:justify-center max-[588px]:flex-wrap max-[450px]:grid max-[450px]:grid-cols-1 max-[450px]:justify-center'>
            <div className='pr-8 border-r-2 max-[450px]:border-none max-[450px]:text-center'>
              <h2 className='text-4xl font-bold max-sm:text-2xl'>200+</h2>
              <p className='text-[#00000099]'>International Brands</p>
            </div>
            <div className='pr-8 border-r-2 max-[588px]:border-none'>
              <h2 className='text-4xl font-bold max-sm:text-2xl'>2,000+</h2>
              <p className='text-[#00000099]'>High-Quality Products</p>
            </div>
            <div>
              <h2 className='text-4xl font-bold max-sm:text-2xl'>30,000+</h2>
              <p className='text-[#00000099]'>Happy Customers</p>
            </div>
          </div>
          <div className=' flex justify-center'>
            <img className='hidden max-lg:block w-full h-[500px] object-contain' src={logo} alt="" />
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <div className='container m-auto px-4 py-11 flex items-center justify-center gap-24 max-md:flex-wrap max-[480px]:flex-col'>
          <div>
            <img src={versaci} alt="" />
          </div>
          <div>
            <img src={zara} alt="" />
          </div>
          <div>
            <img src={gucci} alt="" />
          </div>
          <div>
            <img src={prada} alt="" />
          </div>
          <div>
            <img src={calvin} alt="" />
          </div>
        </div>
      </section>
      <section className='mt-16'>
        <h2 className='text-center text-5xl font-bold mb-16 font-serif max-lg:text-4xl max-sm:text-3xl max-[450px]:text-2xl'>NEW ARRIVALS</h2>
        <Product />
      </section>
      <section className='mt-20'>
        <div className='bg-[#F0F0F0] container m-auto px-16 rounded-3xl py-20'>
          <h2 className='text-5xl font-bold font-serif text-center mb-16 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-[500px]:text-xl'>BROWSE BY dress STYLE</h2>
          <div className='grid grid-cols-3 gap-5 justify-center max-lg:grid-cols-1'>
            <div className='pb-52 pt-6 px-9 rounded-2xl shadow-lg bg-white bg-casual bg-no-repeat bg-right-top max-lg:col-span-2 max-[500px]:pb-44'>
              <p className='text-4xl font-bold font-serif max-md:text-3xl max-sm:text-2xl max-[500px]:text-xl'>Casual</p>
            </div>
            <div className='pb-52 pt-6 px-9 rounded-2xl shadow-lg bg-white col-span-2 bg-formal bg-no-repeat bg-right-top max-lg:col-span-3 max-[500px]:pb-44'>
              <p className='text-4xl font-bold font-serif max-md:text-3xl max-sm:text-2xl max-[500px]:text-x max-[570px]:text-right'>Formal</p>
            </div>
            <div className='pb-52 pt-6 px-9 rounded-2xl shadow-lg bg-white col-span-2 bg-party bg-no-repeat bg-right-top max-lg:3 max-[500px]:pb-44'>
              <p className='text-4xl font-bold font-serif max-md:text-3xl max-sm:text-2xl max-[500px]:text-xl max-[570px]:text-right'>Party</p>
            </div>
            <div className='pb-52 pt-5 px-9 rounded-2xl shadow-lg bg-white bg-gym bg-no-repeat bg-right-top max-lg:col-span-2 max-[500px]:pb-44'>
              <p className='text-4xl font-bold font-serif max-md:text-3xl max-sm:text-2xl max-[500px]:text-xl'>Gym</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default memo(Home)