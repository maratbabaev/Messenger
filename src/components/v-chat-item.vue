<template>
  <div class="chat-item w-1/2 bg-cyan-300 flex p-2 flex-col mt-3" :class="validateMessageClass(chat)">
    <span class="chat-item__message">{{chat.text}}</span>
    <span class="chat-item__time text-xs mt-2 text-orange-600">{{chat.time}}</span>
  </div>
</template>

<script>


export default {
    props: {
        chat: {
            type: Object,
            required: true
        }
    },
    computed: {
    },
    methods: {
        validateMessageClass: function(chat) {
            return chat.type === 'own' ? 'ml-auto' : 'mr-auto'
        },
    }
}
</script>

<style>

</style>