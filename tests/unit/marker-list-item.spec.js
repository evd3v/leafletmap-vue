import Vue from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import MarkerListItem from '@/components/Markers/MarkerListItem'

const props = {
    mark: {
        lat: 32.324312421421421,
        lon: 54.434234324324324
    },
    index: 1
}

describe('MarkerListItem.vue', () => {
    beforeEach(() => {
        Vue.use(Vuetify)
    })

    it('component mounted if props are available', () => {
        const component = mount(MarkerListItem, {
            mocks: {
                $t: () => {}
            },
            propsData: {
                ...props
            }
        })
        expect(component.exists()).toBe(true)
    })

    it('title is exists', () => {
        const component = mount(MarkerListItem, {
            mocks: {
                $t: () => {}
            },
            propsData: {
                ...props
            }
        })
        expect(component.find('.v-list-item__title').exists()).toBe(true)
    })

    it('subtitle is exists', () => {
        const component = mount(MarkerListItem, {
            mocks: {
                $t: () => {}
            },
            propsData: {
                ...props
            }
        })
        expect(component.find('.v-list-item__subtitle').exists()).toBe(true)
    })
})
