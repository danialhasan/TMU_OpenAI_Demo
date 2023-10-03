<template>
    <div class="w-[560px] min-h-[50px] border-2 border-gray-50 my-6 flex mx-auto" :class="user ? 'bg-gray-700': ''">
      <div id="icon" class="h-12 flex items-center w-auto p-2">
        <font-awesome-icon icon="user" style="color: #fff" size="lg" v-if="user" />
        <font-awesome-icon icon="bolt" style="color: #ffffff" size="lg" v-else />
      </div>
      <p id="text" class="p-4">
        {{ msg }}
      </p>
  </div>
</template>

<script>
export default {
  name: 'Conversation',
  props: {
    msg: String, // contents of component
    user: Boolean, // is this a user written conversation piece?
  },
};
</script>
