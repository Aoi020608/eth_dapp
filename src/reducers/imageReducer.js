import { SET_ERROR, UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS } from '../actions/types.js';


const initialState = {
	images: null, 
	image: null, 
	loading: false, 
	error: null,
}

const imageRreducer= (state = initialState, action) => {
	switch(action.type) {

		case 'UPLOAD_IMAGE': 
			return {
				...state,
			    loading: true,
			    error: null,
			}

		case 'UPLOAD_IMAGE_SUCCESS': 
			return {
				...state,
		        images: [...state.images, action.payload],
		        loading: false,
		        error: null,
			}

		case 'SET_ERROR': 
			return{
				...state,
	        	loading: false,
	        	error: action.payload,
		}

		default: 
			return state;
	}
}

export default imageRreducer;
