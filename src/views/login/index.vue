<template>
  <div class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单 -->
      <el-form ref="loginForm" :rules="loginRules" :model="loginForm" status-icon> <!--status-icon他是验证过后成功后有一个对号的标识，错误报一个红X-->
        <!-- loginRules这个就是下面校验的格式     loginForm自定义的名称可以写成其他的 -->
        <el-form-item prop="mobile"> <!--mobile这个是后台服务器的参数，必须是这个字段，写其他的提交不了数据-->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code"><!--这个跟mobile是一样的都是后台服务器的参数-->
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:236px;margin-right:10px;"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- :value="true"他是默认勾选，如果不写这个没有勾选的样式 -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- type="primary"这个是背景色 -->
          <el-button type="primary" style="width:100%" @click="login()">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    // 申明校验函数
    const checkMobile = (rule, value, callback) => {
      // 校验手机号  1开头 第二位3-9  9位数字 ^这个表示起始位置  1代表第一个数字  [3-9]代表第二个数字只要在这个范围的都可以的
      //    \d{9}表示后面9位数字 \d是匹配数字 $表示结束
      // 这个判断表示如果不是这样的报错弹出手机号格式不对
      if (!/^1[3-9]\d{9}$/.test(value)) { return callback(new Error('手机号格式不对')) }
      callback()// 这个回调函数表示验证成功
    }
    return {
      // 表单对象数据
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 表单校验规则数据
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }, // 这个是验证输入框中是否有值
          { validator: checkMobile, trigger: 'blur' }// 这个是用正则表达式判断手机号的格式，不符合报错
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }, // 这个是验证输入框中是否有值
          { len: 6, message: '长度是6位', trigger: 'blur' }// 验证码的长度必须是6位数字，不能多也不能少
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整个表单进行校验
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // 请求登录接口
          // this.$http
          //   .post(
          //     'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
          //     this.loginForm
          //   )
          //   .then(res => {
          //     // res 响应对象   包含响应主体
          //     // console.log(res.data)
          //     // 存储用户信息
          //     store.setUser(res.data.data)
          //     // 跳转去首页
          //     this.$router.push('/')
          //   })
          //   .catch(() => {
          //     // 错误提示提示
          //     this.$message.error('手机号或验证码错误')
          //   })
          // 使用async&await 怎么处理错误
          // try{}catch(e){}捕捉异常
          try {
            const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
            store.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error(' 手机号或验证码错误！')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  // 背景图定位 / 背景图尺寸 contain 等比缩放完整在容器内显示  cover  等比缩放完全铺面容器
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
}
.my-card {
  width: 400px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  img {
    display: block;
    width: 200px;
    margin: 0 auto 20px;
  }
}
</style>
