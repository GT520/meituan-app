<template>
  <div class="nav">
    <router-link class="nav-item" to="/goods">
      点菜
      <i class="line"></i>
    </router-link>
    <router-link class="nav-item" to="/ratings">
      评价({{commentNum}})
      <i class="line"></i>
    </router-link>
    <router-link class="nav-item" to="/seller">
      商家
      <i class="line"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      commentNum: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e4e4e4;
  }

  .nav-item {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #666;
    position: relative;
  }

  .nav .active {
    color: #ffbb22;
  }

  .nav .active .line {
    width: 20px;
    height: 2px;
    position: absolute;
    background-color: #ffbb22;
    display: inline-block;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }

  .nav .active:nth-child(2) .line {
    width: 66px;
    margin-left: -33px;
  }
</style>
