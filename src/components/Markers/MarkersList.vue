<template>
    <v-list>
        <v-subheader class="text-h5 black--text mb-4 mt-4">Маркеры</v-subheader>
        <v-list-item-group v-model="selectedItem" color="grey-darken-1">
            <marker-list-item
                v-for="(mark, index) in marks"
                :key="index"
                :mark="mark"
                :index="index"
            />
        </v-list-item-group>
    </v-list>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MarkerListItem from '@/components/Markers/MarkerListItem'

export default {
    name: 'MarkersList',
    components: { MarkerListItem },
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
