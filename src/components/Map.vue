<template>
    <div class="map">
        <l-map
            :zoom="zoom"
            :center="center"
            @update:center="centerUpdate"
            @click="setPoint"
        >
            <l-tile-layer :url="tileUrl" />
            <template v-if="marks.length">
                <l-marker
                    @click="() => scrollToMark(mark)"
                    v-for="(mark, index) in marks"
                    :key="index"
                    :lat-lng="latLng(mark.lat, mark.lon)"
                >
                    <l-popup>
                        <div>ID: {{ index + 1 }}</div>
                        <div>Lat: {{ mark.lat.toFixed(6) }}</div>
                        <div>Lon: {{ mark.lon.toFixed(6) }}</div>
                    </l-popup>
                </l-marker>
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
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import { mapState, mapActions, mapMutations } from 'vuex'

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
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    data() {
        return {
            zoom: 13,
            latLng,
            tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            addingMarkMode: false
        }
    },
    computed: {
        ...mapState(['marks', 'mapCenter']),
        center: {
            get() {
                return latLng(this.mapCenter)
            },
            set(value) {
                this.SET_MAP_CENTER(value)
            }
        }
    },
    methods: {
        ...mapActions(['createMark']),
        ...mapMutations(['SET_MAP_CENTER']),
        scrollToMark(mark) {
            this.center = latLng(mark.lat, mark.lon)
        },
        centerUpdate(center) {
            this.center = center
        },
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
    height: 100%;
    width: 100%;
    &-toggle-mode {
        z-index: 1040;
        position: fixed;
        bottom: 30px;
        right: 30px;
    }
}
</style>
