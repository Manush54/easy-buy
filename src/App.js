import './App.css'
import Header from './Header.js'
import Home from './Home.js'
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
						<h1>Hey there!</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
