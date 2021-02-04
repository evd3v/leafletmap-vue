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
            handler(value) {
                if (typeof value === 'undefined') return

                const id = Number(value)

                if (id <= this.marks.length) {
                    this.SET_MAP_CENTER(this.marks[id])
                } else {
                    this.$router.replace('/map')
                }
            },
            immediate: true
        }
    },
    computed: {
        ...mapState(['marks'])
    },
    methods: {
        ...mapMutations(['SET_MAP_CENTER'])
    }
}
</script>
