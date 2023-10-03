<template>
  <div id="app" class="flex flex-col items-center">
    <header class="text-6xl font-bold text-center py-16">OpenAI Demo</header>
    <div id="conversation_container" class="flex flex-col justify-center">
      <div v-for="message in messages">
        <Conversation :user="message.user" :msg="message.content" />
      </div>
    </div>
    <div id="input_box" class="flex sticky ">
      <textarea
        name=""
        id=""
        cols="40"
        class="rounded-md text-gray-900 min-h-[50px] max-h-[200px]"
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
      messages: [],
      // DON'T PUSH THIS KEY, OTHERWISE OPENAI WILL DETECT AND DEACTIVATE
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
        content: this.prompt,
      });
      this.submitOpenAiRequest(this.prompt);
      this.prompt = '';
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
      if (response) {
        console.log(response.data.choices[0].message.content);
        this.messages.push({
          user: false,
          content: response.data.choices[0].message.content,
        });
      }
      return response;
    },
  },
  mounted() {},
};
</script>

<style></style>
