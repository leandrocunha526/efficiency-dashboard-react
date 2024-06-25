import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Realtime from './pages/Realtime';
import Navbar from './components/Navbar';
import MachineEfficiencyTable from './pages/Table';
import Home from './pages/Home';

export const App: React.FC = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/realtime" element={<Realtime />} />
			<Route path="/logs" element={<MachineEfficiencyTable />} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<h1>Not Found</h1>} />
		</Routes>
	</BrowserRouter>
);
