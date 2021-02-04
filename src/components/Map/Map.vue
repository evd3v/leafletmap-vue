<template>
    <div class="map">
        <l-map :zoom="zoom" :center="center" @click="setPoint">
            <l-tile-layer :url="tileUrl" />
            <template v-if="marks.length">
                <map-marker
                    v-for="(mark, index) in marks"
                    :key="index"
                    :mark="mark"
                    :index="index"
                />
            </template>
        </l-map>
        <v-btn
            icon
            x-large
            color="blue"
            class="map-toggle-mode"
            @click="toggleMapMode"
        >
            <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
    </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import { mapState, mapActions, mapMutations } from 'vuex'
import MapMarker from '@/components/Map/MapMarker'

/**
 * Issue with leaflet markers images
 * https://github.com/Leaflet/Leaflet/issues/4968
 */

// eslint-disable-next-line
delete L.Icon.Default.prototype._getIconUrl
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
    name: 'Map',
    components: {
        MapMarker,
        LMap,
        LTileLayer
    },
    data() {
        return {
            zoom: 13,
            tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            addingMarkMode: false
        }
    },
    computed: {
        ...mapState(['marks', 'mapCenter']),
        center() {
            return latLng(this.mapCenter)
        }
    },
    methods: {
        ...mapActions(['createMark']),
        ...mapMutations(['SET_SELECTED_MARK_ID']),
        setPoint(e) {
            const { latlng } = e
            const lat = latlng.lat
            const lon = latlng.lng

            if (this.addingMarkMode) {
                this.createMark({ lat, lon })
                this.toggleMapMode()
            }
        },
        toggleMapMode() {
            this.addingMarkMode = !this.addingMarkMode
        }
    }
}
</script>

<style lang="scss" scoped>
.map {
    width: 100%;
    height: calc((100vh - var(--navbar-height)) / 2);

    @media (min-width: 992px) {
        max-height: initial;
        height: 100%;
    }

    &-toggle-mode {
        z-index: 1040;
        position: fixed;
        bottom: 30px;
        right: 30px;
    }
}
</style>
