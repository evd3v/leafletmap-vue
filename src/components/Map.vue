<template>
    <div class="map">
        <l-map
            :zoom="zoom"
            :center="center"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
            @click="setPoint"
        >
            <l-tile-layer :url="tileUrl" />
            <l-marker :lat-lng="testMarkerCoord">
                <l-popup>
                    <div>
                        Test popup
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

import 'leaflet/dist/leaflet.css'

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
            currentZoom: 13,
            center: latLng(47.41322, -1.219482),
            currentCenter: latLng(47.41322, -1.219482),
            tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            testMarkerCoord: latLng(47.41322, -1.219482)
        }
    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom
        },
        centerUpdate(center) {
            this.currentCenter = center
        },
        setPoint(e) {
            const { latlng } = e
            const lat = latlng.lat
            const lng = latlng.lng
            console.log('lat', lat)
            console.log('lng', lng)
        }
    }
}
</script>

<style lang="scss" scoped>
.map {
    height: 500px;
    width: 500px;
}
</style>
