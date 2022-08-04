<template>
    <div class="header flex items-center h-15 p-4 bg-orange-400 text-lg font-medium text-white">
        <div class="back-btn w-4/12" @click="toMain" v-if="!isCoreRoute">
            <span>Back</span>
        </div>
        <div v-if="!isCoreRoute" class="title w-4/12 flex justify-center">
            <span>{{headerUser}}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
           
        }
    },
    computed: {
        ...mapState([
            'headerUser'
        ]),
        isCoreRoute() {
            return this.$route.path === '/'
        }
    },
    methods: {
        toMain(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>