import { 
    SEARCH_WEATHER,
    SET_LOADING,
    WEATHER_ERROR
 } from './constants/WeatherConstants';


 export default (state, action) => { 
     switch(action.type) {
         default: 
           return state; 

        case SEARCH_WEATHER: 
        return { 
            ...state,
            weather: action.payload,
            loading: false,
        }
        case SET_LOADING: 
        return { 
            ...state,
            loading: true 
        }
        case WEATHER_ERROR: 
        return { 
            ...state,
            loading: false,
            error: action.payload
        }
     }
 }
 