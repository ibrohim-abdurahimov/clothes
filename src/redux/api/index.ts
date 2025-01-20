import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('https://6789383c2c874e66b7d806d8.mockapi.io/products');
  return response.data;
}
const fetchProductById = async (id: number) => {
  const response = await axios.get(`https://6789383c2c874e66b7d806d8.mockapi.io/products/${id}`);
  return response.data;
}
const fetchCommentById = async (id: number) => {
  const response = await axios.get(`https://6789383c2c874e66b7d806d8.mockapi.io/products/${id}/comments`);
  return response.data;
}

export const useProducts = () => {
  return useQuery('products', fetchProducts);
}
export const useDetail = (id: number) => {
  return useQuery(['product', id], () => fetchProductById(id));
}
export const useComment = (id: number) => {
  return useQuery(['product', id], ()=> fetchCommentById(id))
}
