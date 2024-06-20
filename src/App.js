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
import Room from "./views/RoomSingle";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Reservation from './views/Reservation';

const publicRouter = createBrowserRouter(createRoutesFromElements(
	<Route element={<LandingPageLayout />}>
		<Route path="/" element={<Home />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/rooms" element={<Rooms />} />
		<Route path="/services" element={<Services />} />
		<Route path="/room" element={<Room />} />
		<Route path="/reservation" element={<Reservation />} />
	</Route>
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
    	<RouterProvider router={logged ? privateRouter : publicRouter} />
    );
};

export default App;