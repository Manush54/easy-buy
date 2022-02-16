import React from 'react'
import './css/Home.css'
import coverpic from './Resources/EasyBuyHome.png'
import Product from './Product.js'
function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img className='home__image' src={coverpic} alt='Cover Photo' />

				<div className='home__row'>
					<Product
						id='128'
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback] Paperback"
						image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
						price={398}
						rating={5}
					/>
					<Product
						id='129'
						title='Kenwood kMix Stand Mixer for Banking, Stylish, Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass BOwl'
						image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
						price={398}
						rating={5}
					/>
				</div>

				<div className='home__row'>
					<Product
						id='130'
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg'
						price={41999}
						rating={4}
					/>
					<Product
						id='131'
						title='Amazon Echo (3rd Generation | Smart Speaker with Alexa Charcoal Fabric'
						image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
						price={2000}
						rating={3}
					/>
					<Product
						id='132'
						title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
						image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg'
						price={41999}
						rating={4}
					/>
				</div>

				<div className='home__row'>
					<Product
						id='135'
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
						price={46233}
						rating={4}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
