import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

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
        },
        setCenterToGeolocation({ state, commit }) {
            navigator.geolocation.getCurrentPosition(async (result) => {
                if (!state.selectedMarkId) {
                    const { latitude, longitude } = result.coords
                    const center = { lat: latitude, lon: longitude }
                    commit('SET_MAP_CENTER', center)
                }
            })
        }
    },
    modules: {},
    plugins: [
        /** vuex plugin for save state in localStorage */
        new VuexPersistence({
            reducer: (state) => ({
                /** save marks to localStorage before page closed/reloaded */
                marks: state.marks
            })
        }).plugin
    ]
})
