<template>
    <div class="user-list">
        <v-user-item 
            v-for="(chat, i) in searchResult"
            :key="chat.id"
            :chat="chat"   
            :i="i"
            @toUserPage="toUserPage(chat)"
        ></v-user-item>
    </div>
    <div class="search absolute bottom-0 flex items-center h-15 p-4 bg-orange-400 w-full justify-center">
        <input class='border-0 h-10 w-9/12 p-2 focus:outline-none' type="text" @input='getUser(message)' v-model="message" placeholder="Type a user...">
    </div>
</template>

<script>
import vUserItem from './v-user-item.vue'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            message: ''
        }
    },
    components: { vUserItem },
    computed: {
        ...mapState([
            'chats',
            'searchResult'
        ]),
    },
    methods: {
        ...mapActions([
            'SET_USER_TO_HEADER',
            'GET_USER',
            'ADD_DATA'
        ]),
        toUserPage(chat) {
            this.$router.push({
                name: 'contact',
                query: {'id': chat.id}
            })
            this.SET_USER_TO_HEADER(chat.name)
        },
        getUser(message) {
            this.GET_USER(message)
        }
    },
    mounted() {
        this.ADD_DATA()
    }
}
</script>

<style>

</style>