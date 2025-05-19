import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Posts } from './pages/posts';
import { Root } from './components/Root';
import { Main } from './pages/main';
import { Blog } from './pages/blog';
import { Post } from './pages/posts/components/Post';
import { Item } from './pages/blog/components/Item';
import { Error } from './pages/error';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/login';
import { Protected } from './pages/protected';
import { CheckAuth } from './components/CheckAuth';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
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
        },
        {
          path: '/protected',
          element: <CheckAuth>
            <Protected />
          </CheckAuth>
          
        },
      ]
    },
    {
      path:'/login',
      element: <Login />
    }
  ]);

  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  
  );
}

export default App;
