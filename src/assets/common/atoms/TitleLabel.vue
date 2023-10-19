<template>
  <div class="t1">
    {{ title }}
    <div class="t2">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'TitleLabel',
  props: {
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.t1 {
  font-size: 50px;
  color: rgb(232, 241, 92);
  margin: 60px 0;
}
.t2 {
  font-size: 18px;
  margin-top: 15px;
}
</style>
