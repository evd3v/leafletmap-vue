<template>
    <v-container fluid fill-height style="padding: 0;">
        <v-row no-gutters style="height: 100%;">
            <v-col cols="4">
                <MarkersList />
            </v-col>
            <v-col cols="8">
                <Map />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Map from '@/components/Map'
import MarkersList from '@/components/MarkersList'

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'MapPage',
    components: { MarkersList, Map },
    watch: {
        '$route.params.id': {
            async handler(value) {
                if (typeof value === 'undefined') return

                if (this.selectedMarkId === null) {
                    const id = Number(value)

                    if (id <= this.marks.length && this.marks.length > 0) {
                        this.SET_SELECTED_MARK_ID(value)
                    } else {
                        await this.$router.replace('/map')
                    }
                }
            },
            immediate: true
        },
        selectedMarkId: {
            async handler(value) {
                console.log('hello', value)
                if (Number(this.$route.params.id) !== value) {
                    this.SET_MAP_CENTER(this.marks[value])
                    await this.$router.replace(`/map/${value}`)
                }
            }
        }
    },
    computed: {
        ...mapState(['marks', 'selectedMarkId'])
    },
    methods: {
        ...mapMutations(['SET_MAP_CENTER', 'SET_SELECTED_MARK_ID'])
    }
}
</script>
