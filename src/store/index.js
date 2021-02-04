import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        marks: [],
        mapCenter: {
            lat: '47.41322',
            lon: '-1.219482'
        },
        selectedMarkId: null
    },
    mutations: {
        ADD_MARK(state, mark) {
            state.marks.push(mark)
        },
        SET_MAP_CENTER(state, center) {
            state.mapCenter = { ...center }
        },
        SET_SELECTED_MARK_ID(state, id) {
            state.selectedMarkId = id
        }
    },
    actions: {
        createMark({ commit }, { lat, lon }) {
            const mark = { lat, lon }
            commit('ADD_MARK', mark)
        }
    },
    modules: {}
})
