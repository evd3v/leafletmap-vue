<template>
    <v-app>
        <navbar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import Navbar from '@/components/Navbar'

export default {
    name: 'App',
    components: { Navbar },
    mounted() {
        this.setCenterToGeolocation()
    },
    methods: {
        ...mapActions(['setCenterToGeolocation'])
    }
}
</script>
