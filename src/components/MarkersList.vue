<template>
    <v-list>
        <v-subheader class="text-h5 black--text mb-4 mt-4">Маркеры</v-subheader>
        <v-list-item-group v-model="selectedItem" color="grey-darken-1">
            <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    <v-list-item-subtitle
                        v-text="`${item.lon}, ${item.lat}`"
                    ></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: 'MarkersList',
    data() {
        return {
            selectedItem: 1,
            items: [
                {
                    text: 'Первый',
                    lat: '47.4324234',
                    lon: '47.324234'
                },
                {
                    text: 'Второй',
                    lat: '47.4324234',
                    lon: '47.324234'
                },
                {
                    text: 'Третий',
                    lat: '47.4324234',
                    lon: '47.324234'
                }
            ]
        }
    }
}
</script>

<style scoped></style>
