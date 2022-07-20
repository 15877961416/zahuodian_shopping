<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
    <div class="player" @click="checked" ref="show_1">
      <img :src="$store.state.App.baseURL+'img/music.png'" style="width: 100%;height: 100%;">
    </div>
    <div class="music" v-show="music_checked" ref="show">
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450
        src="//music.163.com/outchain/player?type=0&id=7388031234&auto=0&height=430"></iframe>
    </div>

  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        music_checked: false
      }
    },

    methods: {
      checked() {
        this.music_checked = !this.music_checked
      }
    },
    mounted() {
      const id = sessionStorage.getItem('token')
      if (id) {
        this.$api.getProfile(id, {})
      }
      else {
        this.$message({
          message: '对不起，您尚未登录',
        });
      }

      document.addEventListener('click', (e) => {
        if (this.$refs.show && this.$refs.show_1) {
          let isSelf = this.$refs.show.contains(e.target)
          let isSelf_1 = this.$refs.show_1.contains(e.target)
          if (!isSelf && !isSelf_1) {
            this.music_checked = false
          }
        }
      })
    },
  };
</script>

<style>
  #app {
    font-family: "", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

  .player {
    position: fixed;
    height: 50px;
    width: 50px;
    background-color: #111;
    border-radius: 25px;
    bottom: 5px;
    left: 5px;
    z-index: 9999;
    overflow: hidden;
  }

  .music {
    position: fixed;
    height: 400px;
    left: 38px;
    bottom: 49px;
    overflow: hidden;
    z-index: 9999;
    /* display: none; */
  }
</style>