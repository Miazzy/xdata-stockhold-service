<template>
  
  <div id="reward-home">

      <div style="background-color:#f0f0f0;">

      <a-menu mode="horizontal">
        <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper" >
              <a-avatar :src="userinfo.avatar" style="margin-left:0.25rem; margin-right:0.55rem;" />
              {{ usertitle }} 
            </span>
            <a-menu-item-group title="应用中心">
            <a-menu-item key="setting:1" :to="`/stock/message`"  @click="redirectView('/stock/message')" >
                审批
            </a-menu-item>
            <a-menu-item key="setting:2" :to="`/stock/workspace`" @click="redirectView('/stock/workspace')" >
                工作台
            </a-menu-item>
            </a-menu-item-group>
        </a-sub-menu>
      </a-menu>

      <a-row :gutter="24">
        <keep-alive>
          <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">

            <div id="" class="" style="padding-left:2.75rem;padding-top:0.25rem;padding-bottom:0.25rem;background-color:#fefefe;" >
              <a-breadcrumb>
                <template v-for="(elem,index) in breadcrumb">
                  <a-breadcrumb-item :key="elem.icon" :index="index" >
                    <a-icon :type="elem.icon" />
                    <span @click="redirectView(elem.path)">{{ elem.text }}</span>
                  </a-breadcrumb-item>
                </template>
              </a-breadcrumb>
            </div>

            <!-- 设立公司申请 -->
            <div style="background-color:#f0f0f0;">

              <div id="legal-apply-content" class="reward-apply-content" style="height:auto; background-color:#fefefe; margin-top:0px; margin-left: 2.5rem; margin-right: 2.5rem; margin-bottom: 5rem; border: 1px solid #f0f0f0; front-size: 1rem;" >

                <div class="reward-apply-header" style="height:80px; width:100%; text-align:center; margin-top:20px; font-size: 1.5rem; ">
                  设立公司申请
                </div>

                <div class="reward-apply-content-item reward-apply-content-title" style="padding-top:5px;">
                   <a-row style="border-top: 1px dash #f0f0f0;" >
                    <a-col class="reward-apply-content-title-text" :span="4" style="font-size:1.1rem;">
                      基础信息
                    </a-col>
                   </a-row>
                </div>

                <div v-if="isNull(id)" class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>填报日期</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.create_time" readonly placeholder="请填写填报日期！" @blur="validFieldToast('create_time')" style="border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;"  />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>填报人员</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.create_by" readonly placeholder="请输入填报人员！" @blur="validFieldToast('create_by')" style="border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;"  />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>公司名称</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.lawyer_name" :readonly="false" placeholder="请输入公司名称！" @blur="validFieldToast('lawyer_name')" style="border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;"  />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>所属行业</span>
                    </a-col>
                    <a-col :span="8">
                      <a-select mode="single" v-model="company.territory"  @blur="validFieldToast('territory')"  placeholder="请选择所属行业！" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;">
                        <template v-for="(elem,index) in industryList ">
                          <a-select-option :key="elem" :index="index" :value="elem">
                            {{elem}}
                          </a-select-option>
                        </template>
                      </a-select>
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>所属区域</span>
                    </a-col>
                    <a-col :span="8">
                      <a-cascader v-model="company.zone" :options="options.zoneOptions" placeholder="请选择所属区域" @blur="validFieldToast('zone')"  style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;"  />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>登记状态</span>
                    </a-col>
                    <a-col :span="8">
                      <a-select mode="single" v-model="company.territory"  @blur="validFieldToast('territory')"  placeholder="请选择登记状态！" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;">
                        <template v-for="(elem,index) in statusList ">
                          <a-select-option :key="elem" :index="index" :value="elem">
                            {{elem}}
                          </a-select-option>
                        </template>
                      </a-select> 
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>营业执照编号</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.college" :default-value="options.college" placeholder="请输入营业执照编号！" @blur="validFieldToast('college')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>注册地址</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.college" :default-value="options.college" placeholder="请输入注册地址！" @blur="validFieldToast('college')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>注册资本(万)</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入注册资本(单位万人民币)" @blur="validFieldToast('start_time')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>实缴资本(万)</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入实缴资本(单位万人民币)" @blur="validFieldToast('mobile')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>认缴时间</span>
                    </a-col>
                    <a-col :span="8">
                      <a-date-picker v-model="company.handledTime" :default-value="options.datetime" placeholder="请输入认缴时间！" @blur="validFieldToast('handledTime')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>实缴时间</span>
                    </a-col>
                    <a-col :span="8">
                      <a-date-picker v-model="company.handledTime" :default-value="options.datetime" placeholder="请输入实缴时间！" @blur="validFieldToast('handledTime')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>成立日期</span>
                    </a-col>
                    <a-col :span="8">
                      <a-date-picker v-model="company.handledTime" :default-value="options.datetime" placeholder="请输入公司成立日期！" @blur="validFieldToast('handledTime')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>营业期限</span>
                    </a-col>
                    <a-col :span="8">
                      <a-date-picker v-model="company.handledTime" :default-value="options.datetime" placeholder="请输入营业期限！" @blur="validFieldToast('handledTime')" style="width:120px; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                      至
                      <a-date-picker v-model="company.handledTime" :default-value="options.datetime" placeholder="请输入营业期限！" @blur="validFieldToast('handledTime')" style="width:120px; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>公司类型</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请选择公司类型！" @blur="validFieldToast('start_time')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>设立原因</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入公司设立原因！" @blur="validFieldToast('mobile')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="height:auto; font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>经营范围</span>
                    </a-col>
                    <a-col :span="20">
                      <a-textarea
                        v-model="company.brief"
                        placeholder="请输入公司经营范围！"
                        :auto-size="{ minRows: 4, maxRows: 100 }"
                        style="height:60px; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;"
                      />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item reward-apply-content-title" style="padding-top:5px;">
                   <a-row style="border-top: 1px dash #f0f0f0;" >
                    <a-col class="reward-apply-content-title-text" :span="4" style="font-size:1.1rem;">
                      人员信息
                    </a-col>
                   </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>法定代表人</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入法定代表人" @blur="validFieldToast('start_time')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>印章保管人</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入印章保管人" @blur="validFieldToast('mobile')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>备案联络员</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入备案联络员" @blur="validFieldToast('start_time')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                    <a-col :span="4" style="font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>财务负责人</span>
                    </a-col>
                    <a-col :span="8">
                      <a-input v-model="company.mobile" placeholder="请输入财务负责人" @blur="validFieldToast('mobile')" style="width:100%; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;" />
                    </a-col>
                  </a-row>
                </div>

                <div class="reward-apply-content-item" style="margin-top:5px;margin-bottom:5px; margin-right:10px;">
                  <a-row>
                    <a-col :span="4" style="height:auto; font-size:1.0rem; margin-top:5px; text-align: center;">
                      <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;">*</span>备注信息</span>
                    </a-col>
                    <a-col :span="20">
                      <a-textarea
                        v-model="company.out_reason"
                        placeholder="请输入备注信息！"
                        :auto-size="{ minRows: 4, maxRows: 100 }"
                        style="height:60px; border: 0px solid #fefefe;  border-bottom: 1px solid #f0f0f0;"
                      />
                    </a-col>
                  </a-row>
                </div>

                <div v-show="role != 'view' && isNull(id) " class="reward-apply-content-item" style="margin-top:35px;margin-bottom:5px; margin-right:10px;">
                   <a-row style="border-top: 1px dash #f0f0f0;" >
                    <a-col :span="8">
                    </a-col>
                    <a-col class="reward-apply-content-title-text" :span="4" style="">
                      <a-button type="primary" style="width: 120px;color:c0c0c0;" @click="handleSave();"  >
                        保存
                      </a-button>
                    </a-col>
                    <a-col class="reward-apply-content-title-text" :span="4" style="">
                      <a-button type="primary" style="width: 120px;" @click="handleApply();"  >
                        提交
                      </a-button>
                    </a-col>
                    <a-col :span="8">
                    </a-col>
                   </a-row>
                </div>

                <div v-show="role != 'view' && !isNull(id)  " class="reward-apply-content-item" style="margin-top:35px;margin-bottom:5px; margin-right:10px;">
                   <a-row style="border-top: 1px dash #f0f0f0;" >
                    <a-col :span="8">
                    </a-col>
                    <a-col class="reward-apply-content-title-text" :span="4" style="margin-left:100px;">
                      <a-button type="primary" style="width: 120px;color:c0c0c0;" @click="handlePatch();"  >
                        修改
                      </a-button>
                    </a-col>
                    <a-col :span="8">
                    </a-col>
                   </a-row>
                </div>

                <div style="height:100px;">
                </div>
              </div>
            </div>
          </a-col>
        </keep-alive>
      </a-row>
    </div>
  </div>
</template>
<script>
import * as workconfig from '@/request/workconfig';

export default {
  mixins: [window.mixin],
  data() {
    return {
      iswechat:false,
      iswework:false,
      pageName: "工商管理",
      momentNewMsg: true,
      activeTabKey: 3,
      acceptType:'*/*',
      uploadURL:'',
      tablename:'bs_company_flow_data',
      size: 0,
      options:{
        create_time:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        in_time:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        establish_time:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        start_time:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        coop_time:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        out_time:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        datetime:moment(dayjs().format('YYYY-MM-DD'),'YYYY-MM-DD'),
        zoneOptions:JSON.parse(`[{"label":"融量集团","value":"融量集团","children":[{"label":"融量集团总部","value":"融量集团总部"},{"label":"地产板块","value":"地产板块","children":[{"label":"领地集团总部","value":"领地集团总部"},{"label":"重庆区域","value":"重庆区域"},{"label":"两湖区域","value":"两湖区域"},{"label":"川北区域","value":"川北区域"},{"label":"成都区域","value":"成都区域"},{"label":"川南区域","value":"川南区域"},{"label":"中原区域","value":"中原区域"},{"label":"攀西区域","value":"攀西区域"},{"label":"新疆区域","value":"新疆区域"},{"label":"大湾区域","value":"大湾区域"},{"label":"北京区域","value":"北京区域"},{"label":"园林公司","value":"园林公司"}]},{"label":"金融板块","value":"金融板块","children":[{"label":"量石投资","value":"量石投资"}]},{"label":"物业板块","value":"物业板块","children":[{"label":"领悦集团总部","value":"领悦集团总部"},{"label":"川南区域","value":"川南区域"},{"label":"商写事业部","value":"商写事业部"},{"label":"川北区域","value":"川北区域"},{"label":"新疆区域","value":"新疆区域"},{"label":"攀西区域","value":"攀西区域"},{"label":"长春区域","value":"长春区域"},{"label":"大湾区域","value":"大湾区域"},{"label":"郑州荆州区域","value":"郑州荆州区域"},{"label":"贵阳区域","value":"贵阳区域"},{"label":"佳美物业公司","value":"佳美物业公司"}]},{"label":"医疗健康板块","value":"医疗健康板块","children":[{"label":"健康事业部","value":"健康事业部"},{"label":"至诚和爱健管中心","value":"至诚和爱健管中心"},{"label":"高康国际医院","value":"高康国际医院"}]},{"label":"商业板块","value":"商业板块","children":[{"label":"宝瑞商管","value":"宝瑞商管"}]},{"label":"合作方财务公司","value":"合作方财务公司","children":[{"label":"共享财务中心","value":"共享财务中心"}]}]}]`),
      },
      id:'',
      company: {
          create_time: dayjs().format('YYYY-MM-DD'),
          brief_info: '--', //公司简介
          companyName: '', //公司名称
          companyNameEn: '--', //英文名称
          taxpayer_id: '--', //纳税人识别号
          regist_number: '--', //工商注册号
          organ_code: '--', //组织机构代码
          examine_date: dayjs().format('YYYY-MM-DD'), //核准日期
          regist_authority: '--', //登记机关
          industry: '房地产行业', //所属行业
          companyCode: '融量集团/地产板块/成渝区域', //所属区域
          registrationStatus: '存续', //登记状态
          cancellationTime: '2099-12-31', //注销时间
          licenseNumber: '', //营业执照
          businessScope: '', //经营范围
          registeredAddress: '', //注册地址
          registeredCapital: '', //注册资本(万)
          paidCapital: '', //实缴资本(万)
          establish_time: dayjs().format('YYYY-MM-DD'), //成立日期
          paidTime: dayjs().format('YYYY-MM-DD'), //认缴时间
          paidTureTime: dayjs().format('YYYY-MM-DD'), //实缴时间
          businessTerm: dayjs().format('YYYY-MM-DD'), //营业期限
          companyType: '有限责任公司', //公司类型
          reason: '--', //设立原因
          usages: '--', //使用情况
          legalRepresentative: '', //法定代表人
          sealKeeper: '陈乐丽、杨高春、刘娟、彭琦', //印章保管人
          liaison: '--', //备案联络员
          responsiblePerson: '--', //财务负责人
          remark: '暂无备注', //备注信息
      },
      director: {
          directorChairman: '', //董事长
          director: '', //董事
          directorExecutive: '', //执行董事
          manager: '', //总经理/经理
          supervisorChairman: '', //监事会主席
          supervisor: '' //监事
      },
      qualification:{
          qualificationType :'', // '资质类型',
          qualificationLevel : '', //  '资质等级',
          qualificationNumber : '', //'资质编号',
          qualificationPeriod:'', // '资质证有效期',
          qualificationStatus :'', // '资质状态',
          validityPeriod1: dayjs().format('YYYY-MM-DD HH:mm:ss'),
          validityPeriod2: dayjs().format('YYYY-MM-DD HH:mm:ss'),
          cancellationReason:'', //     
      },
      stock: {
          shareholder0: '', //股东
          ratioDetail0: 0, //占股明细
          shareholder1: '', //股东
          ratioDetail1: 0, //占股明细
          shareholder2: '', //股东
          ratioDetail2: 0, //占股明细
          shareholder3: '', //股东
          ratioDetail3: 0, //占股明细
          shareholder4: '', //股东
          ratioDetail4: 0, //占股明细
          shareholder5: '', //股东
          ratioDetail5: 0, //占股明细
          shareholder6: '', //股东
          ratioDetail6: 0, //占股明细
          shareholder7: '', //股东
          ratioDetail7: 0, //占股明细
          shareholder8: '', //股东
          ratioDetail8: 0, //占股明细
          shareholder9: '', //股东
          ratioDetail9: 0, //占股明细
          shareholder10: '', //股东
          ratioDetail10: 0, //占股明细
          shareholder11: '', //股东
          ratioDetail11: 0, //占股明细
          shareholder12: '', //股东
          ratioDetail12: 0, //占股明细
          shareholder13: '', //股东
          ratioDetail13: 0, //占股明细
          shareholder14: '', //股东
          ratioDetail14: 0, //占股明细
          shareholder15: '', //股东
          ratioDetail15: 0, //占股明细
          shareholder16: '', //股东
          ratioDetail16: 0, //占股明细
          shareholder17: '', //股东
          ratioDetail17: 0, //占股明细
          shareholder18: '', //股东
          ratioDetail18: 0, //占股明细
          shareholder19: '', //股东
          ratioDetail19: 0, //占股明细
      },
      data: [],
      readonly: false,
      userList:[],
      firmlist:[],
      firmNamelist:[],
      release_userlist:[],
      approve_userlist:[],
      approve_executelist:[],
      role:'',
      file:'',
      selectedSheet: null,
      sheetName: null,
      collection: [{ }],
      userinfo: '',
      usertitle:'',
      columns: workconfig.columns.reward.items,
      wfcolumns: workconfig.columns.reward.wfcolumns,
      message: workconfig.compValidation.legalapply.message,
      valid: workconfig.compValidation.legalapply.valid,
      goodsborrowtype: workconfig.goodsborrowtype,
      diplomaType: workconfig.compcolumns.diplomaTypeColumns,
      acceptType: workconfig.compcolumns.acceptType,
      commonTypeColumns: workconfig.compcolumns.commonTypeColumns,
      sealTypeColumns: workconfig.compcolumns.sealTypeColumns,
      statusList:['存续','注销','经营异常'],
      industryList:[ '房地产行业', '物业行业', '商管行业', '金融行业', '商贸行业', '建筑行业', '高新技术行业', '监理行业', '医疗行业', '商务咨询行业', '环保行业', '教育行业'],
      breadcrumb:[{icon:'home',text:'首页',path:'/stock/workspace'},{icon:'user',text:'工商管理',path:'/stock/workspace'},{icon:'form',text:'设立公司申请',path:''}],
      statusType:{'valid':'有效','invalid':'删除'},
      zoneType:{'领地集团总部':'领地集团总部','成渝区域':'成渝区域','两湖区域':'两湖区域','川北区域':'川北区域','乐眉区域':'乐眉区域','中原区域':'中原区域','攀西区域':'攀西区域','新疆区域':'新疆区域','大湾区域':'大湾区域','北京区域':'北京区域'},
    };
  },
  activated() {
  },
  mounted() {
    this.queryInfo();
  },
  methods: {
      moment,
      isNull:Betools.tools.isNull,

      // 律所名称过滤
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
        );
      },

      // 企业微信登录处理函数
      async  weworkLogin  (codeType = 'search', systemType = 'search')  {
          const userinfo_work = await Betools.query.queryWeworkUser(codeType, systemType,'v5');
          const userinfo = await Betools.storage.getStore('system_userinfo');
          this.company.create_by = (userinfo ? userinfo.realname || userinfo.name || userinfo.lastname : '');
          this.usertitle = (userinfo && userinfo.parent_company && userinfo.parent_company.name ? userinfo.parent_company.name + ' > ' :'')  + (userinfo ? userinfo.realname || userinfo.name || userinfo.lastname : '');
          return userinfo;
      },
      
      // 执行页面跳转
      async redirectView(path) {
          Betools.tools.isNull(path) ? null: this.$router.push(path);
      },
     
      // 获取基础信息
      async queryInfo() {
        try {
          this.iswechat = Betools.tools.isWechat(); //查询当前是否微信端
          this.iswework = Betools.tools.isWework(); //查询是否为企业微信
          this.userinfo = await this.weworkLogin(); //查询当前登录用户
          this.back = Betools.tools.getUrlParam('back') || '/stock/workspace'; //查询上一页
          
          const userinfo = await Betools.storage.getStore('system_userinfo');  //获取用户基础信息
          this.company.apply_realname = userinfo.realname;
          this.company.apply_username = userinfo.username;
         
          const id = this.id = Betools.tools.getUrlParam('id');
          if(!Betools.tools.isNull(id)){
            this.company = await this.handleList(this.tablename , id);
          } else {
           
          }
        } catch (error) {
          console.log(error);
        }
      },

      // 查询不同状态的律所数据
      async handleList(tableName , id){
        let element = await Betools.query.queryTableData(tableName , id);
        return Betools.tools.isNull(element) ? element : {};
      },

      // 验证字段
      validField(fieldName){
        const userinfo = Betools.storage.getStore('system_userinfo'); // 获取用户基础信息
        const regMail = workconfig.system.config.regexp.mail; // 邮箱验证正则表达式
        this.message[fieldName] = Betools.tools.isNull(this.legal[fieldName]) ? this.valid[fieldName] : '';
        if(fieldName.toLocaleLowerCase().includes('mail')) {
          this.message[fieldName] = regMail.test(this.legal[fieldName]) ? '' : '请输入正确的邮箱地址！';
        }
        Betools.storage.setStore(`system_${this.tablename}_item#${this.company.type}#@${userinfo.realname}` , JSON.stringify(this.legal) , 3600 * 2 );
        return Betools.tools.isNull(this.message[fieldName]);
      },

      // 验证字段信息
      validFieldToast(fieldName){
        const flag = !this.validField(fieldName);
        if(flag){
          this.$toast.fail(`${this.message[fieldName]}！` );
          return false;
        }
      },
      
      // 用户提交入职登记表函数
      async handleApply() {
        await this.handleSave(); //先执行保存操作，保存完毕后执行流程跳转功能
      },

      // 保存用户数据但是不提交
      async handleSave(){
        
        this.loading = true; // 显示加载状态
        const userinfo = await Betools.storage.getStore('system_userinfo'); // 获取用户基础信息
        const id = Betools.tools.queryUniqueID(); // 表单ID
        this.company.create_time = dayjs().format('YYYY-MM-DD');
        this.company.create_by = (userinfo ? userinfo.realname || userinfo.name || userinfo.lastname : '');

        // 验证数据是否已经填写
        const keys = Object.keys({ title: '' })

        const invalidKey =  keys.find(key => {
          const flag = this.validField(key);
          return !flag;
        });

        if(invalidKey != '' && invalidKey != null){
          return await vant.Dialog.alert({
            title: '温馨提示',
            message: `请确认内容是否填写完整，错误：请输入[${invalidKey}]信息！`,
          });
        }

        // 是否确认提交此自由流程?
        this.$confirm({
            title: "确认操作",
            content: "是否确认提交此设立公司申请单?",
            onOk: async() => {
                  const { company } = this;
                  const result = await Betools.manage.postTableData(this.tablename , company); // 向表单提交form对象数据
                  if(result && result.error && result.error.errno){ //提交数据如果出现错误，请提示错误信息
                      return await vant.Dialog.alert({  title: '温馨提示',  message: `系统错误，请联系管理人员，错误编码：[${result.error.code}]. `, });
                  }
                  this.loading = false; //设置状态
                  this.readonly = true;
                  this.role = 'view';
                  vant.Dialog.alert({  title: '温馨提示',  message: `设立公司申请提交成功！`, }); //this.$toast.success('律师录入申请成功！');
                  await this.handleList(this.tablename , id);
               }
          });
      },

      // 修改用户数据但是不提交
      async handlePatch(){
        
        this.loading = true; // 显示加载状态
        const userinfo = await Betools.storage.getStore('system_userinfo'); // 获取用户基础信息
        const id = Betools.tools.getUrlParam('id'); // 表单ID

        // 验证数据是否已经填写
        const keys = Object.keys({ title: '' })

        const invalidKey =  keys.find(key => {
          const flag = this.validField(key);
          return !flag;
        });

        if(invalidKey != '' && invalidKey != null){
          return await vant.Dialog.alert({
            title: '温馨提示',
            message: `请确认内容是否填写完整，错误：请输入[${invalidKey}]信息！`,
          });
        }

        //是否确认提交此自由流程?
        this.$confirm({
            title: "确认操作",
            content: "是否确认修改此设立公司申请单?",
            onOk: async() => {
                  const company  = JSON.parse(JSON.stringify(this.company));
                  const result = await Betools.manage.patchTableData(this.tablename, id, company); // 向表单提交form对象数据
                  if(result && result.error && result.error.errno){ //提交数据如果出现错误，请提示错误信息
                      return await vant.Dialog.alert({  title: '温馨提示',  message: `系统错误，请联系管理人员，错误编码：[${result.error.code}]. `, });
                  }
                  this.loading = false;
                  this.readonly = true;
                  this.role = 'view';
                  vant.Dialog.alert({  title: '温馨提示',  message: `修改操作成功！`, }); //this.$toast.success('律师修改操作成功！');
                  await this.handleList(this.tablename , id);
               }
          });
      },

  },
};
</script>
<style scoped >
    @import "../../../assets/css/reward.home.css";
    @import "../../../assets/css/reward.apply.css";
</style>
