<template>
  <div class="stage-list stage-width">
    <div class="title">
      <div>{{ title }}</div>
      <div class="sub-title">{{ sub_title }}</div>
    </div>
    <div class="list" v-for="(stage, index) in schedules" :key="index">
      <span class="date">{{ stage.date }}</span><span v-if="!members" class="name">{{ stage.title }}</span><a v-else :href="stage.link" target="_blank" class="link">{{ stage.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: {
    title: {
      type: String,
      default: null
    },
    sub_title: {
      type: String,
      default: null
    },
    schedules: {
      type: Array,
      default: null
    },
    members: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.stage-list {
  height: auto;
  background-color: #333333;
  border-radius: 30px;
  margin: 100px auto;
  padding: 0 0 20px;
}
.title {
  font-size: 25px;
  padding: 20px 0 10px;
  border-bottom: solid 2px #1C1B18;
  text-align: center;
}
.sub-title {
  font-size: 18px;
}
.list {
  text-align: left;
  padding: 10px 10px 10px 20px;
  font-size: 20px;
  display: flex;
  border-bottom: solid 2px #1C1B18;
}
.date {
  flex: 1;
}

.name {
  flex: 1;
}

.link {
  flex: 1;
  color: skyblue;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .stage-width {
    width: 90%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .stage-width {
    width: 90%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .stage-width {
    width: 70%;
  }
}

@media screen and (min-width:960px) {
  .stage-width {
    width: 40%;
  }
}
</style>
