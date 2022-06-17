import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import subRedditReducer from './subRedditReducer';

export default configureStore({

    reducer: combineReducers({
        subreddit: subRedditReducer
    })
})

