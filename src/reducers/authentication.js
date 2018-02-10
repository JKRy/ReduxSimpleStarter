import { handleActions } from 'redux-actions';
import { CHANGE_AUTH } from '../actions/types';

export default handleActions({
    [CHANGE_AUTH]: (state, { payload }) => payload
}, false);