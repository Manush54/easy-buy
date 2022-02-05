import { React, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct.js'
import { Link } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer.js'

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue()

	// Used For Payment Methods Eg. Card Details, Verify Card Number, Handle Payment, etc.
	// www.stripe.com
	const stripe = useStripe()
	const elements = useElements()

	// Payment Success Flag
	const [succeeded, setSucceeded] = useState(false)

	// Payment Processing Flag
	const [processing, setProcessing] = useState('')

	// Handle Errors and Disable Submit Button in the Payment Method (Stripe)
	const [error, setError] = useState(null)
	const [disabled, setDisabled] = useState(true)

	const handleSubmit = (e) => {}

	const handleChange = (e) => {
		// Listen for changes in the Card Element
		// and display any errors as the customer types their card details
		setDisabled(e.empty)
		setError(e.error ? e.error.message : '')
	}
	return (
		<div className='payment'>
			<div className='payment__container'>
				{/* Payment Section - Title */}
				<h1>Checkout {<Link to='/checkout'>({basket?.length} items)</Link>}</h1>
				{/* Payment Section - Delivery Address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angles, CA</p>
					</div>
				</div>
				{/* Payment Section - Review Items */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review Items and Delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map((items) => (
							<CheckoutProduct
								id={items.id}
								title={items.title}
								image={items.image}
								price={items.price}
								rating={items.rating}
							/>
						))}
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					{/* Payment Section - Payment Methods */}
					<div className='payment__details'>
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className='payment__priceContainer'>
								<CurrencyFormat
									renderText={(value) => (
										<div>
											<h3>Order Total: {value}</h3>
										</div>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'₹'}
								/>
								{/* Disable the Button if the current event is Processing/Succeeded/Disabled For other reasons */}
								<button disabled={processing || disabled || succeeded}>
									{/* Show Processing if the current state is processing */}
									<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
								</button>
							</div>

							{/* Errors */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment
