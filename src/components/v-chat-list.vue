<template>
  <div class="chat-list h-full">
    <div class="chat-list__wrap overflow-auto">
        <v-chat-item
            v-for="chat in user.chat"
            :key="chat.id"
            :chat="chat"
        ></v-chat-item>
    </div>
    <div class="input-block absolute bottom-0 flex items-center h-15 p-4 bg-orange-400 w-full justify-between">
        <input class='border-0 h-10 w-9/12 p-2 focus:outline-none' type="text" v-model="message" placeholder="Type a message...">
        <button class='w-3/12 bg-sky-600 text-white h-10 font-medium text-lg' @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vChatItem from './v-chat-item.vue'


export default {
  components: { vChatItem },
    data(){
        return {
            user: {},
            message: ''
        }
    },
    props: {
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
        sendMessage() {
            let newMessage = {}
            newMessage.text = this.message
            let d = new Date()
            newMessage.time = [d.getHours(), d.getMinutes()].map(x => x < 10 ? "0" + x : x).join(":")
            newMessage.id = this.chats[this.chats.length - 1].id + 1
            newMessage.type = 'own'
            this.user.chat.push(newMessage)
        }
    } 
}
</script>

<style>

</style>