import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Board from './pages/Board.jsx';
import Discover from './pages/Discover.jsx';
import Library from './pages/Library.jsx';
import Detail from './pages/Detail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Board />,
      },
      {
        path: 'discover',
        element: <Discover />,
      },
      {
        path: 'library',
        element: <Library />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);