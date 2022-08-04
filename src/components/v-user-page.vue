<template>
  <div class="user-page p-5">
    <div class="user-page__img">
        <img class='w-full' v-bind:src="user.src">
    </div>
    <div class="user-page__row flex items-center justify-between mt-5">
        <span class="user-page__phone font-medium">{{user.phone}}</span>
        <div @click='addChatId' class="user-page__start-chat font-medium text-white rounded-lg bg-orange-400 flex items-center justify-center w-32 h-10">Start chat</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            user: {}
        }
    },
    computed: {
        ...mapState([
            'chats'
        ]),
    },
    mounted () {
        this.chats.find(chat => {
            if (chat.id == this.$route.query.id) {
                this.user = chat
            } 
        })
    },
    methods: {
        addChatId() {
            this.$router.push({
                name: 'chat-list',
                query: {'id': this.user.id}
            })
        }
    }
}
 
</script>

<style>

</style>