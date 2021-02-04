<template>
    <v-app-bar
        fixed
        app
        color="#fcb69f"
        dark
        src="https://picsum.photos/1920/1080?random"
    >
        <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
        </template>

        <v-app-bar-title>Тестовое задание для SquareGPS</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-web</v-icon>
        </v-btn>

        <template v-slot:extension>
            <v-tabs v-model="activeTab" align-with-title>
                <v-tabs-slider color="white"></v-tabs-slider>

                <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
                    {{ tab.name }}
                </v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            activeTab: `/`,
            tabs: [
                { id: 1, name: 'О задании', route: `/about` },
                { id: 2, name: 'Карта', route: `/` }
            ]
        }
    }
}
</script>

<style scoped></style>
