<template>
    <v-app-bar
        fixed
        app
        color="#fcb69f"
        dark
        class="navbar"
        src="https://picsum.photos/1920/1080?random"
    >
        <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
        </template>

        <v-app-bar-title>{{ $t('task_title') }}</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    <v-icon>mdi-web</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(language, index) in languages"
                    @click="() => selectLanguage(language)"
                    :key="index"
                >
                    <v-list-item-title>{{ language.long }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

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
            languages: [
                { long: 'Русский', short: 'ru' },
                { long: 'English', short: 'en' }
            ]
        }
    },
    computed: {
        tabs() {
            return [
                { id: 1, name: this.$t('about_task'), route: `/about` },
                { id: 2, name: this.$t('map'), route: `/map` }
            ]
        }
    },
    methods: {
        selectLanguage(item) {
            this.$i18n.locale = item.short
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    z-index: 1080 !important;
}
</style>
