<template>
  <button class="lv-button">
    <slot />
  </button>
</template>

<script>
export default {
name: "LearnVueButton"
}
</script>

<style scoped>
.lv-button {
  background: #43b883;
  color: white;
  outline: none;
  border: none;
}
</style>

// in other components it will be imported as
// import LearnVueButton from "/lv-button"
// app.use(LearnVueButton)