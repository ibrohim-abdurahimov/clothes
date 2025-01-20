import {} from 'react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slice/car-slice';

const Check = () => {
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }
  return (
    <div className='mt-5 pb-10 max-md:mt-20'>
        <div className='container m-auto'>
            <p className='text-center text-5xl font-semibold'>Check Out</p>
            <div className='mt-10 border py-10 px-6 flex flex-col gap-6'>
                <p className='text-xl font-serif font-semibold'>Contact Infomation</p>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <p className='text-xs text-[#6C7275] font-bold font-serif'>FIRST Name</p>
                        <input className='w-full px-4 py-2 outline-none border rounded-md mt-3' type="text" placeholder='First name'/>
                    </div>
                    <div>
                        <p className='text-xs text-[#6C7275] font-bold font-serif'>LAST Name</p>
                        <input className='w-full px-4 py-2 outline-none border rounded-md mt-3' type="text" placeholder='Last name'/>
                    </div>
                </div>
                <div>
                    <p className='text-xs text-[#6C7275] font-bold font-serif'>Phone Number</p>
                    <input className='w-full px-4 py-2 outline-none border rounded-md mt-3' type="tel" placeholder='Phone number'/>
                </div>
                <div>
                    <p className='text-xs text-[#6C7275] font-bold font-serif'>Email address</p>
                    <input className='w-full px-4 py-2 outline-none border rounded-md mt-3' type="email" placeholder='Your Email'/>
                </div>
            </div>
            <button className='w-full bg-black text-white py-3 rounded-md mt-6' onClick={handleClearCart}>Place Order</button>
        </div>
    </div>
  )
}

export default Check