import { memo } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Rating } from '@mui/material'

const Comment = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading } = useQuery({
        queryKey: ['comment'], queryFn: () => {
            return axios
                .get(`https://6789383c2c874e66b7d806d8.mockapi.io/products/${id}/comments`)
                .then((res) => res.data)
        }
    })

    if (isLoading) return <div className='text-center pb-5 text-lg'>Loading...</div>
    return (
        <div className='mt-10 grid grid-cols-2 gap-5 max-lg:grid-cols-1'>
            {
                data?.map(((com: any) => (
                    <div key={com.id} className='border py-7 px-8 rounded-xl flex flex-col justify-between gap-6'>
                        <div>
                            <div>
                                <Rating name="half-rating-read" defaultValue={com.star} precision={0.5} readOnly />
                            </div>
                            <p className='mt-4 text-xl font-bold'>{com.author}</p>
                            <p className='mt-4 text-[#00000099]'>{com.text}</p>
                        </div>
                        <p className='text-[#00000099]'>Posted on {com.createdAt}</p>
                    </div>
                )))
            }
        </div>
    )
}

export default memo(Comment) 