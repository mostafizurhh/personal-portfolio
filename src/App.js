import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Pages/Router/Routes/Routes';
function App() {
  return (
    <div className='mx-4'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
