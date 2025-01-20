import { } from 'react'
import Rating from '@mui/material/Rating';
import { useDetail } from '../../redux/api'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementItem, incrementItem } from '../../redux/slice/car-slice'
import Comment from '../../components/comment/Comment';
import { RootState } from '../../redux';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
// }

const Detail = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.items)
  const cartItem = cart.find(item => item.id === id)
  const { data, isLoading } = useDetail(Number(id!))
  if (isLoading) return <div className='text-center pb-5 text-lg'>Loading...</div>
  const handleAddToCart = () => {
    dispatch(addToCart(data));
  }
  const handleIncrement = () => {
    if (cartItem) {
      dispatch(incrementItem(cartItem.id));
    }
  };

  const handleDecrement = () => {
    if (cartItem) {
      dispatch(decrementItem(cartItem.id));
    }
  };
  return (
    <>
      <div className='mt-5 pb-10 max-md:mt-16 '>
        <div className='container m-auto max-xl:px-4'>
          <div className='grid grid-cols-2 gap-10 max-xl:flex flex-col'>
            <div className='flex gap-4 max-sm:flex-col-reverse'>
              <div className='grid grid-rows-3 gap-4 w-[230px] max-sm:grid-cols-3 max-sm:grid-rows-1 max-sm:w-full'>
                <div className='bg-[#F0EEED] py-5 px-5 rounded-xl'>
                  <img className='w-full h-full object-cover block m-auto rounded-xl' src={data.urls[1]} alt="" />
                </div>
                <div className='bg-[#F0EEED] py-5 px-5 rounded-xl'>
                  <img className='w-full h-full object-cover rounded-xl' src={data.urls[2]} alt="" />
                </div>
                <div className='bg-[#F0EEED] py-5 px-5 rounded-xl'>
                  <img className='w-full h-full object-cover rounded-xl block m-auto' src={data.urls[3]} alt="" />
                </div>
              </div>
              <div className='bg-[#f0eeed] px-12 py-12 rounded-3xl w-full'>
                <img className='h-full w-full rounded-3xl object-cover' src={data.urls[0]} alt="" />
              </div>
            </div>
            <div>
              <h2 className='text-4xl font-bold font-mono'>{data.title}</h2>
              <div className='mt-4 flex items-center gap-3'>
                <Rating name="half-rating-read" defaultValue={data.star} precision={0.5} readOnly />
                <p >{data.star} <span className='text-[#00000099]'>/5</span></p>
              </div>
              <p className='mt-4 text-3xl font-bold'>{data.price}$</p>
              <p className='mt-5 font-serif text-[#00000099]'>{data.desc}</p>
              <div className='mt-6 py-6 border-t-2 flex flex-col gap-4'>
                <p className='text-[#00000099]'>Select Colors</p>
                <div className='flex gap-4'>
                  <div className='p-4 bg-black rounded-full'></div>
                  <div className='p-4 bg-green-900 rounded-full'></div>
                  <div className='p-4 bg-sky-950 rounded-full'></div>
                </div>
              </div>
              <div className='py-6 border-t-2 flex flex-col gap-4 text-[#00000099]'>
                <p className=''>Choose Size</p>
                <div className='flex gap-4 max-[500px]:flex-wrap' >
                  {
                    data.size.map((size: string) => (
                      <p className='py-3 px-6 bg-[#F0F0F0] rounded-full'>{size}</p>
                    ))
                  }
                </div>
              </div>
              <div className='flex items-center gap-5 max-[500px]:flex-col cursor-pointer'>
                <div className='bg-[#f0f0f0] flex gap-4 py-3 px-8 rounded-md items-center'>
                  <button className='text-xl' onClick={handleDecrement}>-</button>
                  <span className='text-xl'>{cartItem ? cartItem.quantity : 0}</span>
                  <button className='text-xl' onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleAddToCart} className='bg-black text-white py-3 px-28 rounded'>Add to Cart</button>
              </div>
            </div>
          </div>
          <div>
            <Comment />
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail