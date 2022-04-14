<template>
  <div>
    <h1>自定义插件学习</h1>
    <input v-focus type="text" v-model="tel"> <button @click="commitPhone">提交</button>
    <my-msg ref="msg"></my-msg>
    <my-button></my-button>
    <my-demo></my-demo>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: ''
    }
  },
  methods: {
    commitPhone () {
      if (!this.tel) {
        this.$nextTick(() => {
          this.$refs.msg.msgPlugin('请输入电话号码', 1000)
        })
      }
    }
  }
}
</script>

<style>

</style>
