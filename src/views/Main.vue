<template>
    <v-container fluid fill-height style="padding: 0;">
        <v-row no-gutters style="height: 100%;">
            <v-col cols="4">
                <MarkersList />
            </v-col>
            <v-col cols="8">
                <Map />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Map from '@/components/Map'
import MarkersList from '@/components/MarkersList'
export default {
    name: 'MainPage',
    components: { MarkersList, Map }
}
</script>
