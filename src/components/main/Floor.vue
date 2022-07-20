<!--  -->
<template>
  <div class="floor" v-show="top>=650">
    <div class="floor_1">
      <ul>
        <li @click="get_top1" :class="{'active':top>=650&&1100>top}">时尚潮装</li>
        <li @click="get_top2" :class="{'active':top>=1100&&1550>top}">时尚潮鞋</li>
        <li @click="get_top3" :class="{'active':top>=1550&&2050>top}">生活必备</li>
        <li @click="get_top4" :class="{'active':top>=2050&&2500>top}">学习用品</li>
        <li @click="get_top5" :class="{'active':top>=2500&&2950>top}">数码产品</li>
        <li @click="get_top6" :class="{'active':top>=2950&&3400>top}">运动健康</li>
        <li @click="get_top7" :class="{'active':top>=3400}">猜你喜欢</li>
      </ul>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Floor",
    components: {},
    data() {
      //这里存放数据
      return {
        top: 0
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_Scroll() {
        // this.top = window.pageYOffset
        this.top = document.documentElement.scrollTop
        // console.log(this.top);
      },
      get_top1() {
        document.documentElement.scrollTop = 651
      },
      get_top2() {
        document.documentElement.scrollTop = 1101
      },
      get_top3() {
        document.documentElement.scrollTop = 1551
      },
      get_top4() {
        document.documentElement.scrollTop = 2051
      },
      get_top5() {
        document.documentElement.scrollTop = 2501
      },
      get_top6() {
        document.documentElement.scrollTop = 2951
      },
      get_top7() {
        document.documentElement.scrollTop = 3401
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      window.addEventListener('scroll', this.get_Scroll)
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>

<style scoped>
  .floor {
    width: 1200px;
    height: 1px;
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -600px;
  }

  .floor_1 {
    position: absolute;
    top: 0;
    left: -80px;
    width: 66px;
    /* display: none; */
    background: rgba(255, 255, 255, 0.3);
  }

  .floor ul li {
    font-size: 12px;
    line-height: 34px;
    /* border-bottom: 1px solid #c2c2c2; */
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: #666;
    height: 34px;
  }

  .floor_1 ul li:hover {
    background: #333;
    color: #fff;
  }

  .active {
    color: #fff;
    background: #ff0036 !important;
  }
</style>