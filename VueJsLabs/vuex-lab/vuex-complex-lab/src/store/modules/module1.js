const state = function () {
    return {
        testStr: '',
        innerObj: {

        },
        list: []
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
    [module1StoreTypes.SET_LIST]: function (state, list) {
        state.list = list
    },
    [module1StoreTypes.SET_LISTITEM]: function (state, item) {
        for (let index = 0; index < state.list.length; index++) {
            const element = state.list[index];
            if (element.name === item.name) {
                element.index = item.index
                break
            }
        }

        //修改完并不会影响getter属性排序
    },
    [module1StoreTypes.ADD_LISTITEM]: function (state, item) {
        state.list.push(item)
        console.log(state.list)
    }
}

const getters = {
    listIndexs: function (state) {
        console.log('读取listIndexs')
        return state.list.map(s => "name:" + s.name).sort().reverse()
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}