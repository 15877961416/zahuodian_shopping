<!--  -->
<template>
  <div class="box_container">
    <div class="box">
      <div class="small">
        <img :src="$store.state.App.baseURL+img" />
        <div class="mask"></div>
        <div class="big">
          <img :src="$store.state.App.baseURL+img" />
        </div>
      </div>
    </div>
    <div class=" box_bot">
      <img :src="$store.state.App.baseURL+$store.state.Data_det.img" @click='change_img' />
      <img :src="$store.state.App.baseURL+$store.state.Data_det.img1" @click='change_img1' />
      <img :src="$store.state.App.baseURL+$store.state.Data_det.img2" @click='change_img2' />
      <img :src="$store.state.App.baseURL+$store.state.Data_det.img3" @click='change_img3' />
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "s_img",
    components: {},
    data() {
      //这里存放数据
      return {
        img: this.$store.state.Data_det.img,
        once: true
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      change_img() {
        this.img = this.$store.state.Data_det.img
      },
      change_img1() {
        this.once = false
        this.img = this.$store.state.Data_det.img1
      },
      change_img2() {
        this.once = false
        this.img = this.$store.state.Data_det.img2
      },
      change_img3() {
        this.once = false
        this.img = this.$store.state.Data_det.img3
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() {
      if (this.once)
        if (this.img !== this.$store.state.Data_det.img) {
          this.img = this.$store.state.Data_det.img
          // once = false
        }
    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style scoped>
  .box {
    height: 375px;
    width: 300px;
    /* overflow: hidden; */
  }

  .small {
    position: relative;
    width: 300px;
    height: 380px;
    border: 1px solid #eeeeee;
  }

  .box_bot {
    width: 300px;
    height: 95px;
  }

  .small img {
    width: 100%;
    height: 100%;
  }

  .box_bot img {
    display: block;
    float: left;
    height: 100%;
    width: 75px;
    cursor: pointer;
    border: 1px solid #eeeeee;
  }

  .mask {
    width: 150px;
    height: 190px;
    background: #000;
    filter: alpha(opacity=25);
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
    z-index: 2500;
    display: none;
  }

  .big {
    width: 300px;
    height: 375px;
    top: -375px;
    right: -340px;
    position: relative;
    z-index: 200;
    border: 1px solid #eeeeee;
    display: none;
    overflow: hidden;
  }

  .big img {
    width: 200%;
    height: 200%;
  }

  .small:hover .mask {
    display: block;
  }

  .small:hover .big {
    display: block;
  }

  .box_container {
    float: left;
    margin: 20px 0 0 20px;
  }
</style>