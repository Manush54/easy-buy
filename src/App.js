import { useEffect } from 'react'
import { auth } from './firebase'
import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout.js'
import Login from './Login.js'
import { useStateValue } from './StateProvider'

function App() {
	const [{}, dispatch] = useStateValue()

	useEffect(() => {
		// will only run once when the app component laods...
		// eg. Whenever the user logs in/out on the website
		auth.onAuthStateChanged((authUser) => {
			console.log('THE USER IS >>> ', authUser)

			if (authUser) {
				// The user just logged in / the user was logged in

				dispatch({
					type: 'SET_USER',
					user: authUser,
				})
			} else {
				//  The user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				})
			}
		})
	}, [])
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
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
