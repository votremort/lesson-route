import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Posts } from './pages/posts';
import { Root } from './components/Root';
import './App.css';
import { Main } from './pages/main';
import { Blog } from './pages/blog';
import { Post } from './pages/posts/components/Post';
import { Item } from './pages/blog/components/Item';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main/>
        },
        {
          path: 'posts',
          element: <Posts />
        },
        {
          path: 'posts/:postId',
          element: <Post />
        },
        {
          path: 'blog',
          element: <Blog/>
        },
        {
          path: 'blog/:itemId',
          element: <Item />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
