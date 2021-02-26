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
            if (element.index === item.index) {
                Object.assign(element, item)
                break
            }
        }
    },
    [module1StoreTypes.ADD_LISTITEM]: function (state, item) {
        state.list.push(item)
        console.log(state.list)
    },
    [module1StoreTypes.REMOVE_LISTITEM]: function (state, item) {
        let index = -1
        for (let i = 0; i < state.list.length; i++) {
            if (item === state.list[i]) {
                index = i
                break
            }
        }

        if (index >= 0) {
            state.list.splice(index, 1)
        }
    }
}

const getters = {
    listIndexs: function (state) {
        return [...state.list].sort((a, b) => {
            return a.order - b.order
        }).reverse();
    },
    getItemsByType: function (state) {
        return function (type = 'odd') {
            //根据索引筛选奇数或者偶数
            let result;
            if (type == 'odd') {
                result = state.list.filter(s => s.order % 2 == 1)
            }
            else {
                result = state.list.filter(s => s.order % 2 == 0)
            }
            return result
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}