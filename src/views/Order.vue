<!--  -->
<template>
  <div class="order">
    <NavHead></NavHead>
    <main>
      <h3>请核对您的信息，是否正确:</h3>
      <el-form label-width="80px" style="margin: 50px; ">

        <el-form-item label="收货电话:">
          <div v-if="check_phone_get">
            <span class="change change_2" v-if="$store.state.Profile.Phone_get">
              {{$store.state.Profile.Phone_get}}
              <span class="change change_edit2" style="float:right;" @click="edit_2">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_2 unfill" v-else>
              {{'未填写'}}
              <span class="change change_edit2" style="float:right;" @click="edit_2">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else style="float: left;">
            <el-input style="float: left; width: 300px;" clearable v-model="phone_get" @keydown.enter.native="sure_2">
            </el-input>
            <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px;" @click="sure_2">
              确定
            </el-button>
            <el-button round style="float: left;" @click="cancel_2">取消</el-button>
          </div>
        </el-form-item>

        <el-form-item label="收货地址:">
          <div v-if="check_address_get">
            <span class="change change_3" v-if="$store.state.Profile.Address_get">
              {{$store.state.Profile.Address_get}}
              <span class="change change_edit3" style="float:right;" @click="edit_3">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_3 unfill" v-else>
              {{'未选择'}}
              <span class="change change_edit3" style="float:right;" @click="edit_3">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else style="float: left;">
            <el-cascader :options="options" v-model="selectedOptions" @change="get_address_get"
              style="width: 300px; float: left;">
            </el-cascader>
            <el-input placeholder="详细地址" style="float: left; width: 300px;" clearable v-model="address_get_r"
              @keydown.enter.native="sure_3">
            </el-input>
            <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px;" @click="sure_3">
              确定
            </el-button>
            <el-button round style="float: left;" @click="cancel_3">取消</el-button>
          </div>
        </el-form-item>


      </el-form>
      <div class="car">
        <div class="car_title2">商品图片</div>
        <div class="car_title3">商品描述</div>
        <div class="car_title4">商品单价</div>
        <div class="car_title5">商品款式</div>
        <div class="car_title6">商品数量</div>
        <div class="car_title7">商品价格</div>

      </div>

      <div class="container">
        <div v-for="(item,index) in Order_date">
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

          </div>
        </div>
      </div>

      <div class="car_bottom" ref="show">
        <el-button type="danger" style="float: right; margin-left: 10px;" @click="pay()">去支付</el-button>
        <div class="total_price">总计：<span>￥{{total_price}}</span></div>
      </div>
    </main>
    <div :class="{pay,active:isActive}">
      <h3>请扫码支付</h3>
      <img :src="$store.state.App.baseURL+'img/pay.png'" alt="">
    </div>
    <Footer_f></Footer_f>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from '@/components/NavHead'
  import Footer_f from '@/components/Footer_f'
  import { regionData, CodeToText } from 'element-china-area-data'

  export default {
    //import引入的组件需要注入到对象中才能使用
    filters: {
      numFilter(value) {
        let realVal = parseFloat(value).toFixed(2)
        return realVal
      }
    },
    name: "Order",
    components: {
      NavHead,
      Footer_f
    },
    data() {
      //这里存放数据
      return {
        phone_get: '',
        address_get: '',
        address_get_l: '',
        address_get_r: '',
        options: regionData,
        selectedOptions: [],
        check_phone_get: 1,
        check_address_get: 1,
        Order_date: '',
        total_price: '',
        isActive: 0,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

      edit_2() {
        this.check_phone_get = 0
      },
      sure_2() {
        var res_pho = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (res_pho.test(this.phone_get)) {
          this.$store.commit('SET_Phone_get', this.phone_get)
          this.$api.patchPhone_get(this.$store.state.Profile.id, {
            Phone_get: this.phone_get,
          })
          this.check_phone_get = 1
          // console.log(this.phone_get);
        } else {
          this.$alert('请输入正确的电话号码', '警告', {
            confirmButtonText: '确定'
          });
        }
      },
      cancel_2() {
        this.check_phone_get = 1
      },

      get_address_get() {
        this.address_get_l = CodeToText[this.selectedOptions[0]] + ' / ' + CodeToText[this.selectedOptions[1]] + ' / ' + CodeToText[this.selectedOptions[2]]

      },
      edit_3() {
        this.check_address_get = 0
      },
      sure_3() {
        if (this.address_get_l !== '' && this.address_get_r !== '') {
          this.check_address_get = 1
          this.address_get = this.address_get_l + ' / ' + this.address_get_r
          this.$store.commit('SET_Address_get', this.address_get)
          this.$api.patchAddress_get(this.$store.state.Profile.id, {
            Address_get: this.address_get,
          })
        }
        else {
          this.$message({
            message: "请输入完整信息"
          })
        }
      },
      cancel_3() {
        this.check_address_get = 1
      },
      get_total_price() {
        for (let item in this.Order_date) {
          if (this.Order_date[item]) {
            var price1 = this.total_price
            var price2 = parseFloat(this.Order_date[item].num * this.Order_date[item].price).toFixed(2)
            var r1, r2, m;
            try {
              r1 = price1.toString().split(".")[1].length
            } catch (e) {
              r1 = 0
            }
            try {
              r2 = price2.toString().split(".")[1].length
            } catch (e) {
              r2 = 0
            }
            m = Math.pow(10, Math.max(r1, r2))
            this.total_price = ((price1 * m + price2 * m) / m).toFixed(2)
          }
        }
      },

      pay() {
        this.isActive = 1
        var newArr = JSON.parse(JSON.stringify(this.Order_date));
        newArr.forEach(e => {
          e.ID = sessionStorage.getItem('token')
          e.Nickname = this.$store.state.Profile.Nickname
          e.active = 0
          e.Phone_get = this.$store.state.Profile.Phone_get
          e.Address_get = this.$store.state.Profile.Address_get
        });
        var arr_order = JSON.parse(JSON.stringify(newArr));
        for (let item in this.$store.state.Profile.My_order) {
          if (this.$store.state.Profile.My_order[item]) {
            newArr.push(this.$store.state.Profile.My_order[item])
          }
        }
        this.$store.commit('PUT_My_order_order', newArr)
        this.$api.patchMy_order(sessionStorage.getItem('token'), { My_order: newArr })
        this.$api.get_order({}).then((res) => {
          // console.log(res);
          var arr = res.order

          arr_order.push(...arr)
          // console.log(arr_order);
          this.$api.post_order({
            order: arr_order
          })
        });
        // this.$router.push('/MY_order')
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.Order_date = JSON.parse(sessionStorage.getItem('Order'))
      this.get_total_price()
      document.addEventListener('click', (e) => {
        if (this.$refs.show) {
          let isSelf = this.$refs.show.contains(e.target)
          if (!isSelf) {
            this.isActive = false
          }
        }
      })

    },

    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() {
    }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style>
  header {
    height: 50px;
    width: 1200px;
    margin: 30px auto;
  }

  main {
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

  .car_bottom {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 40px;
    margin-top: 15px;
    font-size: 16px;
    background-color: #eeeeee;
    line-height: 40px;
  }

  .total_price {
    float: right;
  }

  .total_price>span {
    color: #ff0036;
    font-size: 16px;
  }

  .change {
    float: left;
    font-size: 15px;
    padding: 0 5px;
    margin-left: 17px;
    font-weight: 500;
    color: #111;
  }

  .change_edit2 {
    display: none;
  }

  .change_2:hover .change_edit2 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit3 {
    display: none;
  }

  .change_3:hover .change_edit3 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  h3 {
    font-size: 18px;
    line-height: 45px;
    overflow: hidden;
    height: 45px;
    font-weight: 400;
    float: left;
  }

  .pay {
    display: none;
    position: fixed;
    width: 400px;
    height: 600px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #eeeeee;
    z-index: 999;
    overflow: hidden;
    border: 1px solid #848181;
  }

  .pay h3 {
    width: 100%;
    text-align: center;
    margin: 10px 0;
    border-bottom: 1px solid #848181;
  }

  .pay img {
    width: 350px;
    height: 500px;
    margin: 10px;
  }

  .active {
    display: block;
  }
</style>