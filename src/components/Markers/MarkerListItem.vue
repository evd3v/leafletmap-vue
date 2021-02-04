<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: 'MarkerListItem',
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
        title() {
            return `Метка № ${this.index}`
        },
        subtitle() {
            return `${this.mark.lon.toFixed(6)}, ${this.mark.lat.toFixed(6)}`
        }
    }
}
</script>

<style scoped></style>
