<template>
    <v-list>
        <v-subheader class="text-h5 black--text mb-4 mt-4">Маркеры</v-subheader>
        <v-list-item-group v-model="selectedItem" color="grey-darken-1">
            <v-list-item v-for="(item, i) in marks" :key="i">
                <v-list-item-content>
                    <v-list-item-title
                        v-text="`Метка № ${i}`"
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
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'MarkersList',
    computed: {
        ...mapState(['marks', 'selectedMarkId']),
        selectedItem: {
            get() {
                return this.selectedMarkId
            },
            set(value) {
                this.SET_SELECTED_MARK_ID(value)
            }
        }
    },
    methods: {
        ...mapMutations(['SET_SELECTED_MARK_ID'])
    }
}
</script>

<style scoped></style>
