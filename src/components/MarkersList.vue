<template>
    <v-list>
        <v-subheader class="text-h5 black--text mb-4 mt-4">Маркеры</v-subheader>
        <v-list-item-group v-model="selectedItem" color="grey-darken-1">
            <v-list-item v-for="(item, i) in marks" :key="i" :to="`/map/${i}`">
                <v-list-item-content>
                    <v-list-item-title
                        v-text="`Метка № ${i + 1}`"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                        v-text="
                            `${item.lon.toFixed(6)}, ${item.lat.toFixed(6)}`
                        "
                    ></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MarkersList',
    data() {
        return {
            selectedItem: 1
        }
    },
    computed: {
        ...mapState(['marks'])
    }
}
</script>

<style scoped></style>
