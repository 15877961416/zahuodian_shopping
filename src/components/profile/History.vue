<!--  -->
<template>
  <div style="position: relative;">
    <div class="checkall">
      <el-checkbox :value="checked" @change="check_all"></el-checkbox>
      <el-button type="" style="margin-left: 5px;" @click="delete_check">删除选中</el-button>
    </div>
    <div class="item_shopping">
      <el-checkbox-group v-model="checkList" style="font-size: 0;">
        <ul v-for="(item,index) in this.$store.state.Profile.History">
          <li>
            <el-checkbox :label="index" class="checkbox" @change="get_check(index)"></el-checkbox>
            <router-link :to="'/shopping_det/'+item.path+'/'+item.id">
              <img :src="$store.state.App.baseURL+item.img" style="
                margin: 0 auto;
                display: block;
                width: 200px;
                height: 250px;
              " />
              </a>
              <span class="price">￥{{item.price}}</span>
              <a href="#">
                <p>
                  {{item.title}}
                </p>
              </a>
            </router-link>
          </li>
        </ul>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "History",
    components: {},
    data() {
      //这里存放数据
      return {
        checkList: [],
        checked: false,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      check_all() {
        // console.log(1);
        this.checkList.splice(0)
        this.checked = !this.checked
        if (this.checked) {
          for (let i = 0; i < this.$store.state.Profile.History.length; i++) {
            this.checkList.push(i)
          }
        }
      },
      get_check(index) {
        this.checked = this.checkList.length !== this.$store.state.Profile.History.length ? false : true
      },
      delete_check() {
        while (this.checkList.length) {
          let once = this.checkList.pop()
          var arr = JSON.parse(JSON.stringify(this.$store.state.Profile.History))
          // console.log(this.$route.name, this.goods[once].id);
          // this.$api.deleteGoods(this.$route.name, this.goods[once].id, {})
          arr.splice(once, 1)
          // console.log(arr); 
          this.$store.commit('Delete_History', arr)
          // console.log(this.check_list[i]);
          // console.log(this.check_list.length);
        }
        this.$api.patchHistory(sessionStorage.getItem('token'), { History: arr })

      }
    },
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
  .item_shopping {
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
  }

  .item_shopping ul {
    width: 1000px;
  }

  .item_shopping ul li {
    width: 230px;
    float: left;
    margin-right: 12px;
    padding: 12px;
    height: 350px;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ddd;
  }

  .item_shopping ul:nth-child(n+5) li {
    margin-top: 15px;
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

  .el-checkbox>>>.el-checkbox__label {
    display: none;
  }

  .checkbox {
    position: absolute;
    right: 2px;
    top: 0;
  }

  .checkall {
    position: absolute;
    /* background-color: pink; */
    right: 0;
    top: -45px;
  }
</style>