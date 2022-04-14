<template>
  <div>
    <div class="msg" ref="msg" :class="{active:msgStatus}">
      <div class="msg-wapper">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myMsg',
  data () {
    return {
      text: '',
      msgStatus: false
    }
  },
  methods: {
    // 以默认配置为优先，以用户传入为覆盖
    msgPlugin (msg, time = 2000) {
      this.text = msg
      this.msgStatus = true
      setTimeout(() => {
        this.msgStatus = false
      }, time)
    }
  }

}
</script>

<style lang="less" scoped>
.msg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 0;
  min-height: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #fff;
  transition: all .5s;
  z-index: -1;
  opacity: 0;
}
.msg.active{
  width: 180px;
  height: 30px;
  line-height: 30px;
  opacity: 1;
  z-index: 11;
}
</style>
