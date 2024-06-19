import { useSelector } from 'react-redux';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import LandingPageLayout from "./views/LandingPageLayout";
import Home from "./views";
import Rooms from "./views/Rooms";
import Services from "./views/Services";
import Users from "./views/Users";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";

const publicRouter = createBrowserRouter(createRoutesFromElements([
	{
		path: '/',
		element: <LandingPageLayout />,
		children: [
			<Route path='/' element={<Home />} />,
			<Route path='login' element={<Login />}/>,
			<Route path='register' element={<Register />} />,
			<Route path='rooms' element={<Rooms />} />,
			<Route path='services' element={<Services />} />,
			<Route path='reviews' element={<Users />} />
		]
	}
]));

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
    	<RouterProvider router={logged ? privateRouter : publicRouter} />
    );
};

export default App;