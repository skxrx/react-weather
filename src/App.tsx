import { Routes, Route } from 'react-router-dom';

import { Main } from './pages';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/main' element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
