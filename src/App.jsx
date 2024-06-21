import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import Edit from './components/Edit'
import Read from './components/Read'
import Create from './components/create';
import NotFound from './components/NotFound';

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/edit/:id' element={<Edit />}/>
      <Route path='/Read/:id' element={<Read />}/>
      <Route  path='/*' element={<NotFound />}/>
    </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
