<!--  -->
<template>
  <div class="s_guess">
    <router-link to="/Shopping_list/Guess">
      <h3>猜你喜欢</h3>
    </router-link>
    <div class="item_shopping">
      <ul v-for="(item,index) in guess">
        <li @click="update">
          <router-link :to="'/shopping_det/'+shop_path+'/'+item.id">
            <img :src="$store.state.App.baseURL+item.img" style="
                margin: 0 auto;
                display: block;
                width: 100px;
                height: 125px;
              " />
            <span class="price">{{'￥'+item.price}}</span>
            <a href="#">
              <p>
                {{item.title}}
              </p>
            </a>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "",
    components: {},
    data() {
      //这里存放数据
      return {
        guess: {
        },
        shop_path: this.$route.params.router_path
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_guess(res) {
        this.guess = res
      },
      update() {
        this.$router.go(0)
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.getGoods({}, this.shop_path).then((res) => {
        this.get_guess(res)
        // return res
      })
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
  .s_guess {
    width: 240px;
    height: 100%;
    float: right;
    /* overflow: auto; */
    border-left: 2px solid #eeeeee;
    padding-bottom: 5px;
    background-color: #fff;
  }

  h3 {
    font-size: 18px;
    line-height: 60px;
    height: 60px;
    color: #111;
    border-bottom: 2px solid #eeeeee;
    width: 100%;
    text-align: center;
    font-weight: 200;
    background-color: #eeeeee;
  }

  .item_shopping {
    width: 240px;
    height: 455px;
    overflow: auto;
  }

  .item_shopping ul {
    width: 220px;
  }

  .item_shopping ul li {
    width: 100px;
    float: left;
    margin-top: 15px;
    margin-left: 7px;
    height: 210px;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #eeeeee;
  }

  .item_shopping ul li:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  }

  .item_shopping ul li .price {
    float: left;
    display: block;
    margin-top: 5px;
    line-height: 24px;
    font-size: 20px;
    color: #FD5155;
  }

  .item_shopping ul li .num {
    float: right;
    display: block;
    margin-top: 13px;
    line-height: 24px;
    font-size: 13px;
    color: #9e9d9d;
  }

  .item_shopping ul li p {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 20px;
    font-size: 12px;
    color: #111;
    margin: 5px auto 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .item_shopping ul li p:hover {
    text-decoration: underline;
    color: #ff0036;
  }
</style>