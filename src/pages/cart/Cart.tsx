import { } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../../redux/slice/car-slice';
import { RootState } from '../../redux';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiDeleteBin6Fill } from "react-icons/ri";


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.items)



    const handleRemove = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id: string) => {
        dispatch(incrementItem(id));
    };

    const handleDecrement = (id: string) => {
        dispatch(decrementItem(id));
    };
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)
    return (
        <div className='mt-5 pb-10 max-md:mt-20'>
            <div className='container m-auto px-4'>
                <ul className="flex items-center gap-2">
                    <li>
                        <NavLink to={"/"}>
                            <span className='text-[#00000099]'>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <MdKeyboardArrowRight className='text-[#00000099]' />
                    </li>
                    <li>
                        <NavLink to={"/cart"}>
                            <span> Cart</span>
                        </NavLink>
                    </li>
                </ul>
                <h2 className='mt-6 text-4xl font-bold font-serif'>Your cart</h2>
                <div className='mt-6 grid grid-cols-2 gap-5 max-xl:grid-cols-1'>
                    <div className=' flex flex-col gap-5'>
                        {cart.map(item => (
                            <div key={item.id} className='p-6 border rounded-xl flex gap-4 max-sm:flex-col'>
                                <div className='w-[200px] max-sm:m-auto'>
                                    <img className='object-cover' src={item.urls[0]} alt="" />
                                </div>
                                <div className='flex justify-between flex-1 max-[475px]:flex-col gap-4'>
                                    <div className='flex flex-col justify-between gap-4'>
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-xl font-bold font-serif'>{item.title}</h3>
                                            <p className='text-sm'>Size: <span className='text-[#00000099]'>{item.size[1]}</span></p>
                                            <p className='text-sm'>Color: <span className='text-[#00000099]'>Green</span></p>
                                        </div>
                                        <p className='text-2xl font-bold'>${item.price}</p>
                                    </div>
                                    <div className='flex flex-col justify-between gap-4 items-end max-[475px]:flex-row max-[475px]:items-center'>
                                        <div onClick={() => handleRemove(item.id)} className='cursor-pointer'>
                                            <RiDeleteBin6Fill className='text-2xl text-red-600' />
                                        </div>
                                        <div className='bg-[#f0f0f0] flex gap-4 py-3 px-8 rounded-md items-center'>
                                            <button className='text-xl' onClick={() => handleDecrement(item.id)}>-</button>
                                            <span className='text-xl'>{item.quantity}</span>
                                            <button className='text-xl' onClick={() => handleIncrement(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='p-6 border rounded-xl flex flex-col justify-between'>
                        <div>
                            <h2 className='text-2xl font-bold max-[450px]:text-xl'>Order Summary</h2>
                            <div className='mt-6 flex justify-between text-xl max-[450px]:text-base'>
                                <p className='text-[#00000099] '>Delivery Fee</p>
                                <p className='font-bold'>$15</p>
                            </div>
                            <div className='mt-6 flex justify-between text-xl max-[450px]:text-base'>
                                <p className='text-[#00000099] '>Subtotal</p>
                                <p className='font-bold'>${totalPrice}</p>
                            </div>
                            <div className='mt-6 flex justify-between text-xl max-[450px]:text-base'>
                                <p>Total</p>
                                <p className='font-bold'>${totalPrice + 15}</p>
                            </div>
                        </div>
                        <button className='mt-6 block w-full rounded-xl py-5 text-center bg-black text-white'>Go to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart