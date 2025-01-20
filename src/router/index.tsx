import {} from 'react'
import {useRoutes} from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Detail from '../pages/detail/Detail'
import Cart from '../pages/cart/Cart'
import Comment from '../components/comment/Comment'
import Check from '../pages/check/Check'

const Routers = () => {
  return (
    <div>
        {
            useRoutes([
                {
                    path: '/',
                    element: <Layout/>,
                    children: [
                        {
                            path: '/',
                            element: <Home/>
                        },
                        {
                            path: '/product/:id',
                            element: <Detail/>
                        },
                        {
                            path: '/product/:id/comments',
                            element: <Comment/>
                        },
                        {
                            path: '/cart',
                            element: <Cart/>
                        },
                        {
                            path: '/check',
                            element: <Check/>
                        },
                        {
                            path: '*',
                            element: <div className='text-center text-3xl font-bold py-10'>404</div>
                        }
                    ]
                }

            ])
        }
    </div>
  )
}

export default Routers