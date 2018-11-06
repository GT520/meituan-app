<template>
  <div id="app">
    <my-header :poiInfo="poiInfo"></my-header>
    <my-nav :commentNum="commentNum"></my-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MyHeader from "./components/header/MyHeader"
  import MyNav from "./components/nav/MyNav"

  export default {
    name: 'App',
    data() {
      return {
        poiInfo: {},
        commentNum: 0
      }
    },
    components: {
      MyHeader,
      MyNav
    },
    created() {
      fetch("/api/goods")
        .then(res => res.json())
        .then(response => {
          if (response.code == 0) {
            this.poiInfo = response.data.poi_info
          }
        })

      fetch("/api/ratings")
        .then(res => res.json())
        .then(response => {
          if (response.code == 0) {
            this.commentNum = response.data.comment_num
          }
        })
    }
  }
</script>

<style>
</style>
