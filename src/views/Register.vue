<!--  -->
<template>
  <div class="">
    <NavHead></NavHead>
    <div class="register">
      <div class="register_view">
        <h3>新用户注册</h3>
        <el-form :model="register_form" class="register_form demo-dynamic" :rules="rules" ref="register_form">

          <el-form-item prop="pho">
            <el-input type=" text" v-model="register_form.pho" placeholder="手机号" prefix-icon="el-icon-phone"
              style="width: 66%" clearable>
            </el-input>
            <el-button type="info" style="width: 32%; background: #5a5985" @click="get_code">发送验证码</el-button>
          </el-form-item>

          <el-form-item prop="pass">
            <el-input type="password" v-model="register_form.pass" placeholder="密码" prefix-icon="el-icon-lock"
              show-password clearable>
            </el-input>
          </el-form-item>

          <el-form-item prop="check_pass">
            <el-input type="password" v-model="register_form.check_pass" placeholder="确认密码" prefix-icon="el-icon-lock"
              show-password clearable>
            </el-input>
          </el-form-item>

          <el-form-item prop="code">
            <el-input type="text" v-model="register_form.code" placeholder="验证码" prefix-icon="el-icon-message">
              <i slot="suffix" style="margin-right: 10px">{{register_form.time}}S</i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" style="width: 50%; background: #5a5985" @click="register">注册</el-button>
          </el-form-item>
          <el-checkbox v-model="register_form.active" style="color: #d9d9d9;float: left;">我已同意以下协议
          </el-checkbox>
          <router-link to="/Login" class="rou">已注册，立刻登录</router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "",
    components: { NavHead },
    data() {
      var validatePho = (rule, value, callback) => {
        var res_pho = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (value === '') {
          callback(new Error("请输入手机号码"));
          this.pho_success = 0
        } else if (!res_pho.test(value)) {
          callback(new Error("请输入正确的手机号码"));
          this.pho_success = 0
        }
        else {
          this.pho_success = 1
          callback();
        }
      }
      var validatePass = (rule, value, callback) => {
        var reg_pass = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else
          if (!reg_pass.test(value)) {
            callback(new Error('密码必须由8-16位的数字、字母和特殊符号组成'));
          } else {
            callback();
          }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.register_form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else
          if (this.register_form.check_pass == this.register_form.pass) {
            callback(new Error('密码一致!'));
          } else {
            callback();
          }
      };
      var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
          this.code_success = 0
        }
        else {
          this.code_success = 1
          callback();
        }
      };
      //这里存放数据
      return {
        pho_success: 0,
        code_success: 0,
        code: '',
        register_form: {
          pho: "",
          pass: "",
          check_pass: "",
          code: "",
          active: 0,
          time: 60,
        },
        rules: {
          pho: [
            { validator: validatePho, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          check_pass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' },
          ]
        }
      };
    },
    //监听属性 类似于data概念
    computed: {
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      async get_code() {
        if (this.pho_success) {
          var newcode = ''
          for (let i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 9);
            newcode += num
          }
          this.code = newcode
          console.log(this.code);
          // this.$axios({
          //   method: 'get',
          //   headers: {  //单个请求设置请求头
          //     "Content-Type": "application/x-www-form-urlencoded",
          //     // "Access-Control-Allow-Origin": "*"
          //     // "Connection": "Keep - Alive"
          //   },
          //   url: '/message',
          //   params: {
          //     method: 'Submit',
          //     account: "C97985838",
          //     password: '10e6cce46abbe8cdc3c20b0f48f36c2f',
          //     mobile: this.register_form.pho,
          //     content: "您的验证码是：" + newcode + "。请不要把验证码泄露给其他人。"
          //   }
          // });
          if (this.register_form.time == 0) this.register_form.time = 60
          if (this.register_form.time == 60) {
            let countdown = setInterval(() => {
              if (this.register_form.time > 0) {
                this.register_form.time--
              }
              else { clearInterval(countdown) }
            }, 1000);
          }
        }
        else {
          this.$message({
            message: "电话号码错误"
          })
        }
      },


      register() {
        if (this.register_form.active != 1) {
          this.$message({
            message: '对不起，协议尚未同意!',
            type: 'warning'
          });
        }
        else if (this.pho_success === 1 && this.code_success === 1 && this.register_form.check_pass == this.register_form.pass) {
          if (this.register_form.code == this.code)
            this.$api.register(this.register_form.pho, {
              id: this.register_form.pho,
              Password: window.btoa(this.register_form.pass),
              Nickname: '',
              Avatar: '',
              Sex: '',
              Introduce: '',
              Address: '',
              Birth: '',
              Phone_get: '',
              Address_get: '',
              Emile: '',
              Car: [],
              History: [],
              Collect: [],
              Order: [],
              My_order: [],
            })
          else {
            this.$message({
              message: '对不起，验证码错误!',
              type: 'warning'
            });
          }
        }
        else {
          this.$message({
            message: '对不起，请核对您的信息',
            type: 'warning'
          });
        }
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
  .register {
    background: url("../assets/img/Login.jpg") no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: fixed;
  }

  .register_view {
    position: absolute;
    width: 450px;
    height: 470px;
    background-color: #5a5985;
    border: 1px solid #d9d9d9;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -250px;
    padding: 0 25px;
    opacity: 0.9;
    overflow: hidden;
  }

  .register_view:hover {
    opacity: 1;
  }

  .register_view h3 {
    font-size: 30px;
    line-height: 30px;
    overflow: hidden;
    width: 100%;
    height: 30px;
    color: #d9d9d9;
    font-weight: 300;
    margin: 20px auto;
  }

  .register_form {
    border-top: 1px solid #d9d9d9;
    padding: 25px 25px;
  }

  .rou {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 66px;
  }
</style>