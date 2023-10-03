<template>
  <div id="app" class="">
    <header class="text-6xl font-bold text-center py-16">OpenAI Demo</header>
    <div
      id="conversation_container"
      class="border border-red-500 flex flex-col justify-items-center"
    >
      <Conversation user />
      <Conversation />
      <Conversation user />
      <Conversation />
    </div>
  </div>
</template>

<script>
import Conversation from './components/Conversation.vue';
export default {
  name: 'App',
  components: { Conversation },
};
</script>

<style></style>
