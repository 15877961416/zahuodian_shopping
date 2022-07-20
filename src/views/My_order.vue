<!--  -->
<template>
  <div class="my_order">
    <NavHead></NavHead>
    <main>
      <div class="car">
        <div class="car_title2">商品图片</div>
        <div class="car_title3">商品描述</div>
        <div class="car_title4">商品单价</div>
        <div class="car_title5">商品款式</div>
        <div class="car_title6">商品数量</div>
        <div class="car_title7">商品价格</div>
        <div class="car_title8">确认收货</div>


      </div>

      <div class="container" v-if="$store.state.Profile.My_order">
        <div v-for="(item,index) in $store.state.Profile.My_order">
          <div class="cart">
            <div class="cart_item2">
              <router-link :to="'/shopping_det/'+item.path+'/'+item.id">
                <img :src="$store.state.App.baseURL+item.img" alt="暂无图片" />
              </router-link>
            </div>
            <div class="cart_item3">
              <router-link :to="'/shopping_det/'+item.path+'/'+item.id">
                <p>
                  {{item.title}}
                </p>
              </router-link>

            </div>
            <div class="cart_item4">¥<span>{{item.price}}</span></div>
            <div class="cart_item5"><span>{{item.color+'，'+item.size}}</span></div>

            <div class="cart_item6">
              <span>{{item.num}}</span>
            </div>

            <div class="cart_item7">¥<span>{{item.num*item.price|numFilter}}</span></div>
            <div class="cart_item8">
              <el-button style="border: 0; background-color: #eeeeee;" @click="sure_order(index,item.num)"
                v-if="item.active===0">
                确认收货</el-button>
              <el-button style="border: 0; background-color: #eeeeee; color: rgb(53, 139, 238);"
                @click="common_order(index)" v-else-if="item.active===1">
                前往评价</el-button>
              <span v-else-if="item.active===2">已评价</span>
            </div>

          </div>
        </div>
      </div>
    </main>
    <Footer_f></Footer_f>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";
  import Footer_f from "@/components/Footer_f";
  var showtime = function () {
    var nowdate = new Date();
    var year = nowdate.getFullYear(),
      month = nowdate.getMonth() + 1,
      date = nowdate.getDate(),
      day = nowdate.getDay(),
      h = nowdate.getHours(),
      m = nowdate.getMinutes()
    return year + "年" + month + "月" + date + "日" + " " + h + ":" + m;
  }
  export default {
    //import引入的组件需要注入到对象中才能使用
    filters: {
      numFilter(value) {
        let realVal = parseFloat(value).toFixed(2)
        return realVal
      }
    },
    name: "My_order",
    components: {
      NavHead,
      Footer_f,
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
    methods: {
      sure_order(index, num) {

        this.$confirm('是否确认收货?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '确认收货成功!'
          });
          this.$store.commit('PUT_My_order', [index, 1])
          this.$api.patchMy_order(this.$store.state.Profile.id, {
            My_order: this.$store.state.Profile.My_order
          })

        })
        var sales = this.$store.state.Profile.My_order[index].sales
        this.$api.patchGoods_com(this.$store.state.Profile.My_order[index].path, this.$store.state.Profile.My_order[index].id, { sales: sales + num })

        this.$api.get_sales({}).then((res) => {
          // console.log(res.sales);
          if (this.$store.state.Profile.My_order[index].path == 'Clothes')
            res.sales.Clothes = res.sales.Clothes + num
          else if (this.$store.state.Profile.My_order[index].path == 'Shoe')
            res.sales.Shoe = res.sales.Shoe + num
          else if (this.$store.state.Profile.My_order[index].path == 'Learn')
            res.sales.Learn = res.sales.Learn + num
          else if (this.$store.state.Profile.My_order[index].path == 'Life')
            res.sales.Life = res.sales.Life + num
          else if (this.$store.state.Profile.My_order[index].path == 'Digital')
            res.sales.Digital = res.sales.Digital + num
          else if (this.$store.state.Profile.My_order[index].path == 'Sports')
            res.sales.Sports = res.sales.Sports + num
          // console.log(res.sales.price, this.$store.state.Profile.My_order[index].price);
          res.sales.price = parseFloat(parseFloat(this.$store.state.Profile.My_order[index].price) + parseFloat(res.sales.price)).toFixed(2)
          // console.log(res.sales.price);
          this.$api.post_sales({ sales: res.sales })
        })

      },
      common_order(index) {

        this.$prompt('请输入您的评价', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '内容不能为空'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您的评价是: ' + value
          });
          this.$store.commit('PUT_My_order', [index, 2])
          this.$api.patchMy_order(this.$store.state.Profile.id, {
            My_order: this.$store.state.Profile.My_order
          })
          this.$api.getGoods_com(this.$store.state.Profile.My_order[index].path, this.$store.state.Profile.My_order[index].id).then((res) => {
            res.push({
              Avatar: "img/avatar/man.jpg",
              nickname: this.$store.state.Profile.Nickname,
              comment: value,
              time: showtime()
            })
            this.$api.patchGoods_com(this.$store.state.Profile.My_order[index].path, this.$store.state.Profile.My_order[index].id, { comment: res })
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });

        // var newArr = []
        // var i = 0
        // for (let item in this.$store.state.Profile.My_order) {
        //   // console.log(this.$store.state.Profile.Car[item]);
        //   if (item == index) {
        //     newArr[i] = this.$store.state.Profile.My_order[item]
        //     newArr[i].active = 2
        //     i++;
        //   }
        //   else {
        //     newArr[i] = this.$store.state.Profile.My_order[item]
        //     i++;
        //   }
        // }
        // this.$store.commit('PUT_My_order', newArr)
        // this.$api.patchMy_order(this.$store.state.Profile.id, {
        //   My_order: this.$store.state.Profile.My_order
        // })


      },

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
  header {
    height: 50px;
    width: 1200px;
    margin: 30px auto;
  }

  main {
    padding-top: 15px;
    position: relative;
    overflow: hidden;
    width: 1200px;
    margin: 10px auto;
    min-height: 460px;
  }

  .car {
    width: 100%;
    height: 45px;
    background-color: #eeeeee;
  }

  .container {
    width: 100%;
    min-height: 100px;

  }

  .cart {
    width: 100%;
    background-color: #eeeeee;
    height: 120px;
    margin-top: 15px;
    padding: 10px 0;
    text-align: center;
    vertical-align: middle;
  }

  .car>div {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
  }

  .cart>div {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    overflow: hidden;
  }


  .car_title2,
  .cart_item2 {
    width: 140px;
  }

  .car_title3,
  .cart_item3 {
    width: 200px;
  }

  .car_title4,
  .car_title5,
  .car_title6,
  .car_title7,
  .car_title8,
  .cart_item4,
  .cart_item5,
  .cart_item6,
  .cart_item7,
  .cart_item8 {
    width: 160px;
  }

  .cart_item6 div {
    height: 100%
  }

  .cart_item2 img {
    height: 100px;
    width: 80px;
  }

  img {
    height: 100px;
    width: 80px;
  }

  .cart_item3 p {
    width: 100%;
    line-height: 18px;
    font-size: 12px;
    margin-top: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cart_item8 span:hover {
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
  }
</style>