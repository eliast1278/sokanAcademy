import {createStore} from 'trim-redux'

const state = {
    userModal: false

};
const store = createStore(state);

export default store;