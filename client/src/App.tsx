import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { Login, SignUp } from './pages';
import SplashPage from './pages/SplashPage/Splash';
import WaitingRoom from './pages/WatingRoom';
import CartPage from './pages/Cart';
import Menu from './pages/Menu';

const socket = io('http://localhost:8080');

const TestComponent = () => {
  const sendMessage = () => {
    console.log('hi there');
  };

  useEffect(() => {
    socket.emit('send_message', { message: 'hello' });
  });

  return (
    <>
      <input type="text" placeholder="write your massage" />
      <button type="button" onClick={sendMessage}>
        send massage
      </button>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/cartPage',
    element: <CartPage />,
  },
  {
    path: '/waiting-room',
    element: <WaitingRoom />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/testSocket',
    element: <TestComponent />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
