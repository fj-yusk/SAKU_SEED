<template>
  <div class="margin">
      <router-link :to="url">
        <button class="btn btn-flat">
          <span v-if="stage">{{ $t('stage.title') }}</span>
          <span v-else>{{ $t('common.detail_button') }}</span>
        </button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailButton',
  props: {
    url: {
      type: String,
      default: null
    },
    stage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.margin {
  margin: 40px 0;
  text-align: center;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
.btn,
a.btn,
button.btn {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

.btn-flat {
  overflow: hidden;

  padding: 1.5rem 6rem;

  color: #dcdcdc;
  border-radius: 0;
  background: #e6e6fa;
}

.btn-flat span {
  position: relative;
}

.btn-flat:before {
  position: absolute;
  top: 0;
  left: 0;

  width: 150%;
  height: 500%;

  content: "";
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);

  background: #00b7ee;
}

.btn-flat:hover:before {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>
