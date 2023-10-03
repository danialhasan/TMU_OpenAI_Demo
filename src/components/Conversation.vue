<template>
  <div class="max-w-[560px] min-h-[50px] border-4 border-gray-50 my-6">
    <font-awesome-icon icon="user" style="color: #fff" v-if="user"/>
    <font-awesome-icon icon="bolt" style="color: #ffffff" v-else/>
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
