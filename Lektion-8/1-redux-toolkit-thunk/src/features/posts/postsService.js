import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/'


const getAllPosts = async () => {
  const res = await axios.get(BASE_URL)
  return res.data
}

const getPostById = async (postId) => {
  const res = await axios.get(BASE_URL + postId)
  return res.data
}

const createPost = async (postData) => {
  const res = await axios.post(BASE_URL, postData)
  return res.data
}

const postsService = {
  getAllPosts,
  getPostById,
  createPost
}

export default postsService