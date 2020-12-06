import {createStore} from 'trim-redux'

const state = {
    auth: true,
    userInfo: {},
    mobileNumber: "",
    step: "",
    depositModal: false,
    exportModal: false,
    AddBalanceModal: false,
    TransferBalanceModal: false,
    addBankCard: false,
    addBankAccount: false,
    uploadMelli: false,
    uploadSelfie: false,
    addCard: false,
    systemVars: "",
    buyLowPrice:0,
    sellHighPrice:0,
    statistics:{}

};
const store = createStore(state);

export default store;