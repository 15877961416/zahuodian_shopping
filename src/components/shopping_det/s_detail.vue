<!--  -->
<template>
  <div class="container">
    <div class="container_detail">
      <div class="detail">
        <ul v-for="(item,index) in $store.state.Data_det.detail">
          <li>
            <span>{{item.detail+':'}}</span>
            <span style="margin-left: 2px;">{{item.value}}</span>
          </li>
        </ul>
      </div>
      <div class="detail_img" v-for="(item,index) in $store.state.Data_det.detail_img">
        <img :src="$store.state.App.baseURL+item.img" />
      </div>
    </div>
    <div class="fill"></div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "s_detail",
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
    mounted() { },
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
  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .container_detail {
    width: 956px;
    float: left;
  }

  .fill {
    position: absolute;
    right: 0;
    float: right;
    width: 240px;
    height: 2200px;
    background-color: #dad6d6;
  }

  .detail {
    width: 100%;
    padding: 20px 40px;
    border-bottom: 2px solid #eeeeee;
    overflow: hidden;
  }

  .detail ul li {
    float: left;
    width: 33%;
    font-size: 14px;
    margin-top: 14px;
    text-align: left;
  }

  .detail_img img {
    height: 500px;
    width: 400px;
    margin: 0 auto;
  }
</style>