export const initialState = {
	basket: [],
}

export const reducer = (state, action) => {
	console.log('Action', action)
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state, // copy whatever state was there previously
				basket: [...state.basket, action.item], // Add the already present items to the basket using ...state and then add action.item i.e. The newly added item
			}
			defualt: return state
	}
}
