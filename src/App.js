import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from "./views";
import Rooms from "./views/Rooms";
import Services from "./views/Services";
import Users from "./views/Users";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Header from "./components/header";
import Footer from "./components/footer";

const publicRouter = createBrowserRouter(createRoutesFromElements(
  [
    <Route path='/' element={<Home />} />,
    <Route path='login' element={<Login />}/>,
    <Route path='register' element={<Register />} />,
    <Route path='rooms' element={<Rooms />} />,
    <Route path='services' element={<Services />} />,
    <Route path='reviews' element={<Users />} />
  ]
));

const privateRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
            <Route path='start'>
                
            </Route>
      </Route>
    ),
);

function App() {
    const logged = useSelector((state) => state.app.data);
    
    return (
      <>
        <Header />
        <RouterProvider router={logged ? privateRouter : publicRouter} />
        <Footer />
      </>
    );
};

export default App;