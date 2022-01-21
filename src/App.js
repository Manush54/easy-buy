import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/'>
						<Header />
						<Home />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
