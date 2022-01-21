import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'

function Checkout() {
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_jpg'
					alt='Ad'
					className='checkout__ad'
				/>
				<div>
					<div>
						<h3>Hello User!</h3>
						<h2 className='checkout__title'>Your Shopping Cart</h2>
					</div>
				</div>
			</div>
			<div className='checkout_right'>
				<Subtotal />
			</div>
		</div>
	)
}

export default Checkout
