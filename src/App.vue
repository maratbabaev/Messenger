

<template>
  <div class="h-screen overflow-hidden">
    <v-header/>
    <main class="main-wrap h-full">
        <router-view></router-view>
    </main>
  </div>
</template>




<script>
import vHeader from './components/v-header.vue'
export default {
  components: { vHeader }
}


</script>


<style scoped>

</style>
