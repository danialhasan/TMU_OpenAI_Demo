<template>
  <div id="app" class="flex flex-col items-center">
    <header class="text-6xl font-bold text-center py-16">OpenAI Demo</header>
    <div id="conversation_container" class="flex flex-col justify-center">
      <div v-for="message in messages">
        <Conversation :user="message.user" :msg="message.contents" />
      </div>
    </div>
    <div id="input_box" class="flex absolute bottom-24">
      <textarea
        name=""
        id=""
        cols="40"
        class="rounded-md text-gray-900"
        v-model="prompt"
      ></textarea>
      <button class="ml-3" @click="handleMessageSubmit">
        <font-awesome-icon icon="right-to-bracket" size="2xl" style="color: #ffffff" />
      </button>
    </div>
  </div>
</template>

<script>
import Conversation from './components/Conversation.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: { Conversation },
  data() {
    return {
      prompt: '',
      messages: [
        {
          user: true,
          contents: 'Hi! How are you today?',
        },
        {
          user: false,
          contents:
            "I'm just a computer program, so I don't have feelings, but I'm here to help you with any questions or tasks you have. How can I assist you today?",
        },
      ],
      openai_secret_key: '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',
    };
  },
  methods: {
    async handleMessageSubmit() {
      /**
       * Get prompt, store in messages as user message. Then,
       * submit openAI request.
       */
      this.messages.push({
        user: true,
        contents: this.prompt,
      });
      this.submitOpenAiRequest(this.prompt);
    },
    async submitOpenAiRequest(prompt) {
      const endpoint = 'https://api.openai.com/v1/chat/completions';
      const request = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      };
      const response = await axios.post(endpoint, request, {
        headers: {
          Authorization: `Bearer ${this.openai_secret_key}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('RESPONSE: ', response);
    },
  },
  mounted() {},
};
</script>

<style></style>
