<!--  -->
<template>
  <div>
    <!-- 时尚潮装 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_a" id="">
      <a>
        <h3>
          时尚潮装
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/">
            <li>更多</li>
          </router-link>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul v-for="(item,index) in clothes" v-if="index<5">
          <li v-if="item.onsale">
            <router-link :to="'/shopping_det/Clothes'+'/'+item.id">
              <img :src="$store.state.App.baseURL+item.img" style="
                  margin: 0 auto;
                  display: block;
                  width: 200px;
                  height: 250px;
                " />
              <span class="price">{{'￥'+item.price}}</span>
              <span class="num">{{'月销 '+item.sales}}</span>
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
    <!-- ------ -->

    <!-- 时尚潮鞋 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_b">
      <a>
        <h3>
          时尚潮鞋
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/Shoe">
            <li>更多</li>
          </router-link>
        </ul>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul>
          <ul v-for="(item,index) in shoe" v-if="index<5">
            <li v-if="item.onsale">
              <router-link :to="'/shopping_det/Shoe'+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" style="
                    margin: 0 auto;
                    display: block;
                    width: 200px;
                    height: 250px;
                  " />
                <span class="price">{{'￥'+item.price}}</span>
                <span class="num">{{'月销 '+item.sales}}</span>
                <a href="#">
                  <p>
                    {{item.title}}
                  </p>
                </a>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <!-- ------ -->

    <!-- 生活必备 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_c">
      <a>
        <h3>
          生活必备
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/Life">
            <li>更多</li>
          </router-link>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul>
          <ul v-for="(item,index) in life" v-if="index<5">
            <li v-if="item.onsale">
              <router-link :to="'/shopping_det/Life'+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" style="
                    margin: 0 auto;
                    display: block;
                    width: 200px;
                    height: 250px;
                  " />
                <span class="price">{{'￥'+item.price}}</span>
                <span class="num">{{'月销 '+item.sales}}</span>
                <a href="#">
                  <p>
                    {{item.title}}
                  </p>
                </a>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <!-- ------ -->

    <!-- 学习用品 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_d">
      <a>
        <h3>
          学习用品
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/Learn">
            <li>更多</li>
          </router-link>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul>
          <ul v-for="(item,index) in learn" v-if="index<5">
            <li v-if="item.onsale">
              <router-link :to="'/shopping_det/Learn'+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" style="
                    margin: 0 auto;
                    display: block;
                    width: 200px;
                    height: 250px;
                  " />
                <span class="price">{{'￥'+item.price}}</span>
                <span class="num">{{'月销 '+item.sales}}</span>
                <a href="#">
                  <p>
                    {{item.title}}
                  </p>
                </a>
              </router-link>
            </li>
          </ul>
        </ul>

      </div>
    </div>
    <!-- ------ -->

    <!-- 数码产品 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_e">
      <a>
        <h3>
          数码产品
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/Digital">
            <li>更多</li>
          </router-link>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul>
          <ul v-for="(item,index) in digital" v-if="index<5">
            <li v-if="item.onsale">
              <router-link :to="'/shopping_det/Digital'+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" style="
                    margin: 0 auto;
                    display: block;
                    width: 200px;
                    height: 250px;
                  " />
                <span class="price">{{'￥'+item.price}}</span>
                <span class="num">{{'月销 '+item.sales}}</span>
                <a href="#">
                  <p>
                    {{item.title}}
                  </p>
                </a>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <!-- ------ -->

    <!-- 运动健康 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_f">
      <a>
        <h3>
          运动健康
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/Sports">
            <li>更多</li>
          </router-link>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul>
          <ul v-for="(item,index) in sports" v-if="index<5">
            <li v-if="item.onsale">
              <router-link :to="'/shopping_det/Sports'+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" style="
                    margin: 0 auto;
                    display: block;
                    width: 200px;
                    height: 250px;
                  " />
                <span class="price">{{'￥'+item.price}}</span>
                <span class="num">{{'月销 '+item.sales}}</span>
                <a href="#">
                  <p>
                    {{item.title}}
                  </p>
                </a>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <!-- ------ -->

    <!-- 猜你喜欢 -->
    <!-- 头部 -->
    <span class="item_nav item_nav_g">
      <a>
        <h3>
          猜你喜欢
        </h3>
      </a>
      <div>
        <ul>
          <router-link to="/Shopping_list/">
            <li>更多</li>
          </router-link>
        </ul>
      </div>
    </span>
    <!-- 头部 -->
    <div>
      <div class="item_shopping">
        <ul>
          <ul v-for="(item,index) in clothes" v-if="index<5">
            <li v-if="item.onsale">
              <router-link :to="'/shopping_det/Clothes'+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" style="
                    margin: 0 auto;
                    display: block;
                    width: 200px;
                    height: 250px;
                  " />
                <span class="price">{{'￥'+item.price}}</span>
                <span class="num">{{'月销 '+item.sales}}</span>
                <a href="#">
                  <p>
                    {{item.title}}
                  </p>
                </a>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <!-- ------ -->

  </div>

</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: '',
    components: {},
    data() {

      //这里存放数据
      return {
        shopping_item: '时尚潮装',
        clothes: {
        },
        shoe: {
        },
        life: {
        },
        learn: {
        },
        digital: {
        },
        sports: {
        }

      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_clothes(res) {
        this.clothes = res
      },
      get_shoe(res) {
        this.shoe = res
      },
      get_life(res) {
        this.life = res
      },
      get_learn(res) {
        this.learn = res
      },
      get_digital(res) {
        this.digital = res
      },
      get_sports(res) {
        this.sports = res
      }


    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.getGoods({}, 'Clothes').then((res) => {
        this.get_clothes(res)
        return res
      }),
        this.$api.getGoods({}, 'Shoe').then((res) => {
          this.get_shoe(res)
          return res
        }),
        this.$api.getGoods({}, 'Life').then((res) => {
          this.get_life(res)
          return res
        }),
        this.$api.getGoods({}, 'Learn').then((res) => {
          this.get_learn(res)
          return res
        }),
        this.$api.getGoods({}, 'Digital').then((res) => {
          this.get_digital(res)
          return res
        }),
        this.$api.getGoods({}, 'Sports').then((res) => {
          this.get_sports(res)
          return res
        })

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
  /* 头部 */
  .item_nav {
    width: 1200px;
    height: 45px;
    margin: 0 auto;
    display: block;
    overflow: hidden;
    margin-top: 40px;
    background: #eff0f8;
    padding-top: 1px;
  }

  .item_nav a {
    float: left;
    padding: 0 auto;
  }

  .item_nav div {
    float: right;
    height: 45px;
    line-height: 45px;
  }

  .item_nav div ul li {
    float: left;
    overflow: hidden;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    height: 45px;
    line-height: 45px;
    color: #666;
  }

  .item_nav div ul li:hover {
    background: #FF0036;
    color: #fff;
  }

  .item_nav h3 {
    font-size: 18px;
    line-height: 45px;
    overflow: hidden;
    width: 190px;
    height: 45px;
    color: #fff;
    text-align: center;
    font-weight: 200;
    float: left;
  }

  .item_nav h3:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3)
  }

  /* -------- */

  .item_shopping {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .item_shopping ul {
    width: 1300px;
  }

  .item_shopping ul li {
    width: 230px;
    float: left;
    margin-right: 12px;
    margin-top: 15px;
    padding: 12px;
    height: 350px;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ddd;
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
    width: 200px;
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

  .item_nav_a {
    border-top: 2px solid #ca4283;
  }

  .item_nav_a h3 {
    background: #ca4283;
  }

  .item_nav_b {
    border-top: 2px solid #e89621;
  }

  .item_nav_b h3 {
    background: #e89621;
  }

  .item_nav_c {
    border-top: 2px solid #325bb4;
  }

  .item_nav_c h3 {
    background: #325bb4;
  }

  .item_nav_d {
    border-top: 2px solid #1c9daf;
  }

  .item_nav_d h3 {
    background: #1c9daf;
  }

  .item_nav_e {
    border-top: 2px solid #d13837;
  }

  .item_nav_e h3 {
    background: #d13837;
  }

  .item_nav_f {
    border-top: 2px solid #6EA168;
  }

  .item_nav_f h3 {
    background: #6EA168;
  }

  .item_nav_g {
    border-top: 2px solid #e89621;
  }

  .item_nav_g h3 {
    background: #e89621;
  }
</style>