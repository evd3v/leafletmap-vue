<template>
    <l-marker @click="selectMark" :lat-lng="leafletCoordinates">
        <l-popup>
            <div>ID: {{ index }}</div>
            <div>Lat: {{ lat }}</div>
            <div>Lon: {{ lon }}</div>
        </l-popup>
    </l-marker>
</template>

<script>
import { latLng } from 'leaflet'
import { mapMutations } from 'vuex'

import { LMarker, LPopup } from 'vue2-leaflet'

export default {
    name: 'MapMarker',
    components: {
        LMarker,
        LPopup
    },
    props: {
        mark: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        leafletCoordinates() {
            return latLng(this.mark.lat, this.mark.lon)
        },
        lat() {
            return this.mark.lat.toFixed(6)
        },
        lon() {
            return this.mark.lon.toFixed(6)
        }
    },
    methods: {
        ...mapMutations(['SET_SELECTED_MARK_ID']),
        selectMark() {
            this.SET_SELECTED_MARK_ID(this.index)
        }
    }
}
</script>

<style scoped></style>
