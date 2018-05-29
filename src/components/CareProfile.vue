<template>
  <div class="careProfile">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.careProfile{
  background-color: #dcdcdc;
  padding: 15px 10px;
  @media screen and (min-width: 1024px) {
    padding:  35px 15%;
  }
}
hr{
  height: 1px;
  background-color: #b5b5b5;
  border-top: solid 1px #b5b5b5;
}
</style>
