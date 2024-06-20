
import './App.css'
import PostCard from './components/PostCard';
import { useGetPostByIdQuery, useGetPostsQuery, useGetUsersQuery, useSetPostMutation } from './redux/features/api/baseApi'

function App() {

  // const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const { data: post, isLoading, isError, error } = useGetPostByIdQuery(2);
  const { data: users } = useGetUsersQuery();
  const [setPost, { data: postData }] = useSetPostMutation();
  console.log(postData);
  if (isLoading) {
    return <p className='text-9xl text-zinc-300'>Loading...</p>
  }
  if (!isLoading && isError) {
    return <p className='text-9xl text-zinc-300'>Something went wrong</p>
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const post = {
      title
    }
    setPost(post)
  }
  return (
    <div>
      <h1>Feed</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name='title' />
          <button className='text-white mb-4' type='submit'>Post</button>
        </form>
      </div>
      <div className='flex flex-col gap-3'>
        {/* {posts?.map(post =>  */}
        <PostCard key={post.id} post={post}></PostCard>
        {/* )} */}
      </div>
    </div>
  )
}

export default App
