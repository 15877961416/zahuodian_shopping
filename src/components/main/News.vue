<!--  -->
<template>
  <div class="news" style="top:42px;">
    <h4>最新公告</h4>
    <div class="notice_new">
      <p v-for="(item,index) in $store.state.News">
        <router-link :to="'/Shopping_det/'+item.path+'/'+item.id">{{item.New}}</router-link>
      </p>
    </div>
    <a href="#">
      <div class="notice_img">
        <img :src="$store.state.App.baseURL+'img/activity.jpg'" class="img1">
        <img :src="$store.state.App.baseURL+'img/activity.jpg'" class="img1">
      </div>
    </a>
  </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "News",
    components: {},
    data() {
      //这里存放数据
      return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.getNews()
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
  .news {
    width: 250px;
    height: 500px;
    position: absolute;
    right: 0;
    z-index: 3000;
    background: #fff;
  }


  .news h4 {
    font-size: 14px;
    color: #333;
    font-weight: 100;
    line-height: 50px;
    border-bottom: 1px dashed #cccccc;
    width: 230px;
    margin: 0 auto
  }

  .notice_new {
    width: 230px;
    height: 220px;
    margin: 0 auto;
  }

  .notice_new a {
    font-size: 12px;
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    line-height: 30px;
    transition: 0.6s;
  }

  .notice_new p {
    display: block;
    width: 230px;
    height: 30px;
    margin: 0 auto;
    overflow: hidden;
    perspective: 1200px
  }

  .notice_new p:hover a {
    color: #FF0036;
    transform: rotatex(360deg)
  }

  .notice_img {
    width: 230px;
    height: 219px;
    margin: 0 auto;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    perspective: 1200px;
    overflow: hidden;
    position: relative
  }

  .notice_img img {
    display: block;
    width: 230px;
    height: 219px;
    transition: 1.6s;
    position: absolute;
    top: 0;
    left: 0
  }

  .img2 {
    transform: rotateY(90deg)
  }

  .notice_img:hover img {
    transform: rotateY(360deg)
  }
</style>