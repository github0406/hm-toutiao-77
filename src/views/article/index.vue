<template>
  <div class="container">
    <!-- 筛选条件 -->
    <el-card>
      <div slot="header">
        <my-bread>内容管理</my-bread>
      </div>
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model=" repParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="repParams.channel_id" placeholder="请选择">
            <el-option
              v-for="item in  channelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-date-picker
              v-model="dataArr"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果 -->
    <el-card>
      <div slot="header">
         根据筛选条件共查询到0条结果
      </div>
       <!-- 表格组件 el-table-->
      <el-table :data="tableData" style="width: 100%">
        <!-- 表单组件的列 -column-->
        <el-table-column prop="date" label="封面" width="180">
        </el-table-column>
      </el-table>
       <!-- 分页组件 -->
      <div style="text-align:center; margin-top:30px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 筛选项表单数据
      repParams: {
        status: null,
        channel_id: null
      },
      // 频道下拉选项数据
      channelOptions: [
        {
          value: 1,
          label: 'js'
        }
      ],
      // 日期数据
      dataArr: [],
      // 文章列表
      articles: []
    }
  }
}
</script>

<style scoped class="less">

</style>
