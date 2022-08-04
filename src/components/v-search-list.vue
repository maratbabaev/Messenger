<template>
  <div class="user-item flex justify-between h-20 items-center px-5" v-bind:class='itemBackground(i)' @click="toUserPage">
    <div class="user-item__ava w-14 h-14 rounded-full">
        <img class='rounded-full w-full h-full object-cover' v-bind:src="chat.src">
    </div>
    <div class="user-item__content flex flex-col items-center">
        <span class="user-item__name text-xl font-medium">{{chat.name}}</span>
        <span class="user-item__last-message">{{chat.chat[chat.chat.length-1].text}}</span>
    </div>
    <div class="user-item__time text-sm">{{chat.chat[chat.chat.length-1].time}}</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>