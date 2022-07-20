<!--  -->
<template>
  <!-- nav导航 -->
  <section class="topnav">
    <nav>
      <News></News>
      <!--全部商品分类-->
      <div class="aside">
        <i class="el-icon-s-grid" style="font-size: 15px; position: relative; top: 1px;"></i> 主营商品



        <aside style="top:42px;">
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/">时尚潮装</router-link>
                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>
              <router-link to="/Shopping_det/Clothes/4">半高领打底衫</router-link>
              <router-link to="/Shopping_det/Clothes/3">潮痞帅气衬衣</router-link>

            </li>
          </ul>
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/Shoe">时尚潮鞋</router-link>
                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>
              <router-link to="/Shopping_det/Shoe/1">高帮鞋女马丁靴</router-link>
              <router-link to="/Shopping_det/Shoe/6">玛速主义</router-link>
            </li>
          </ul>
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/Life">生活必备</router-link>

                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>
              <router-link to="/Shopping_det/Life/6">桌面收纳盒</router-link>
              <router-link to="/Shopping_det/Life/4">居家宿舍住校神器</router-link>
            </li>
          </ul>
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/Learn">学习用品</router-link>

                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>
              <router-link to="/Shopping_det/Learn/4">人世间</router-link>
              <router-link to="/Shopping_det/Learn/6">mrace星球</router-link>

            </li>
          </ul>
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/Digital">数码产品</router-link>

                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>

              <router-link to="/Shopping_det/Digital/4">Matepad11</router-link>
              <router-link to="/Shopping_det/Digital/3">K40</router-link>

              <router-link to="/Shopping_det/Digital/6">相机</router-link>

            </li>
          </ul>
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/Sports">运动健康</router-link>

                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>
              <router-link to="/Shopping_det/Sports/4">优步跑步机</router-link>
              <router-link to="/Shopping_det/Digital/6">磁控自行车</router-link>
            </li>
          </ul>
          <ul>
            <li class="nav_list">
              <p>
                <router-link to="/Shopping_list/Guess">猜你喜欢</router-link>
                <i
                  style="font-family:'宋体';color:#666; line-height:40px; padding-right:20px; font-size:20px; float:right">></i>
              </p>
            </li>
          </ul>
        </aside>



      </div>
      <!--结束-->
      <div class="top_list">
        <ul>
          <li>
            <router-link to="/Shopping_list/">时尚潮装</router-link>
          </li>
          <li>
            <router-link to="/Shopping_list/Shoe">时尚潮鞋</router-link>
          </li>
          <li>
            <router-link to="/Shopping_list/Life">生活必备</router-link>
          </li>
          <li>
            <router-link to="/Shopping_list/Learn">学习用品</router-link>
          </li>
          <li>
            <router-link to="/Shopping_list/Digital">数码产品</router-link>
          </li>
          <li>
            <router-link to="/Shopping_list/Sports">运动健康</router-link>
          </li>
          <li>
            <router-link to="/Shopping_list/Guess">猜你喜欢</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import News from '@/components/main/News'

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Topnav",
    components: {
      News
    },
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
  .topnav {
    width: 100%;
    height: 42px;
    background: #000;
  }

  .topnav nav {
    width: 1200px;
    height: 42px;
    margin: 0 auto;
    position: relative
  }

  .topnav nav .aside {
    display: block;
    width: 205px;
    height: 42px;
    background: #FF0036;
    color: #fff;
    font-size: 12px;
    line-height: 42px;
    cursor: pointer;
    float: left;
    position: relative
  }

  .top_list {
    float: left;
    height: 30px;
    margin-left: 15px;
    perspective: 100px
  }

  .top_list ul li {
    float: left;
  }

  .top_list a {
    display: block;
    float: left;
    font-size: 12px;
    color: #fff;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 42px;
    height: 42px;
    position: relative;
    margin-right: 10px
  }

  .top_list a:hover {
    background: #FF0036
  }

  aside {
    width: 205px;
    height: 500px;
    background: rgba(255, 255, 255);
    position: absolute;
    /* top: -480px; */
    left: 0;
    display: block;
    z-index: 2000;
    /* opacity: 0; */
    /* box-shadow: 0 0 6px rgba(0,0,0,0.3); */
  }

  /* 
  详细阴影
  .aside {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3)
  } */

  aside ul li:hover {
    background: #eeeeee;
  }

  aside ul li {
    overflow: hidden;
    margin: 10px auto;
    height: 60px;
    font-size: 14px;
    color: #000;
  }

  aside ul li p {
    display: block;
    height: 40px;
    width: 200px;
    height: auto;
    margin-left: 10px
  }

  aside ul li p a {
    display: block;
    font-size: 20px;
    line-height: 40px;
    margin-left: 50px;
    float: left;
    color: #666
  }

  aside ul li a:hover a,
  aside ul li p:hover a {
    color: #FF0036
  }

  .nav_list>a {
    float: left;
    font-size: 12px;
    line-height: 20px;
    margin-left: 15px;
  }
</style>