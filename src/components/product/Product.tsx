import {  } from 'react'
import { useProducts } from '../../redux/api/index'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const Product = () => {
    const { data, isLoading } = useProducts()
    if (isLoading) return <div className='text-center py-5 text-xl font-semibold'>Loading...</div>
    return (
        <div className='container m-auto px-4'>
            <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 '>
                {data.map((product: any) => (
                    <div key={product.id} className='flex flex-col gap-4'>
                        <div className='bg-[#F0EEED] py-5 px-4 rounded-2xl'>
                            <img className='max-w-full h-[400px] bg-[#f0eeed] rounded-xl max-2xl:h-[350px] max-xl:h-[300px] max-[550px]:h-[250px] max-[480px]:h-[200px]' src={product.urls[0]} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 px-2'>
                            <Link to={`product/${product.id}`}>
                                <p className='text-xl font-bold max-md:text-lg max-[600px]:text-base '>{product.title}</p>
                            </Link>
                            <div className='flex items-center text-sm gap-3 max-[470px]:text-xs'>
                                <Rating name="half-rating-read" defaultValue={product.star} precision={0.5} readOnly />
                                <p >{product.star} <span className='text-[#00000099]'>/5</span></p>
                            </div>
                            <p className='text-xl font-bold'>{product.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product