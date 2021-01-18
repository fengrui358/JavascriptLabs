const state = function () {
    return {
        testStr: '',
        innerObj: {

        }
    }
}

import module1StoreTypes from '@/constants/common/module1StoreTypes'

const mutations = {
    [module1StoreTypes.SET_TESTTRE]: function (state, str) {
        state.testStr = str
    },
    [module1StoreTypes.SET_INNEROBJ]: function (state, obj) {
        state.innerObj = obj
    },
}

export default {
    namespaced: true,
    state,
    mutations
}