<template>
  
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

      <a-row :gutter="24" style="background:#fbf9fe;">
        <keep-alive>
            <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#f0f0f0;">

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

              <div style="background-color:#f0f0f0;">
                <div id="legal-apply-content" class="reward-apply-content" style="height:auto; background:#fbf9fe; margin-top:0px; margin-left: 2.5rem; margin-right: 2.5rem; margin-bottom: 5rem; border: 1px solid #f0f0f0; front-size: 1rem;" >
                <div style="width:100%;margin-left:0px;margin-right:0px;background:#fbf9fe;">

                    <div class="reward-top-button" style="margin-top:20px;margin-bottom:20px; margin-left:20px; background:#fbf9fe;">
                        <a-input-search v-model="legal.value" placeholder="输入搜索关键字、案件名称、相关信息等" style="width:450px;" enter-button @search="execSearch('view' , 0 , 10)" />
                        
                        <div style="display:inline; margin-left:15px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>所在省份</span>
                            <a-auto-complete v-model="search.province" :data-source="search.provinceSource" placeholder="请输入所在省份！" style="width: 200px"  :filter-option="filterOption" />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>行业分类</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入所在省份！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>法人名称</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入企业状态！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <a-button type="primary" @click="execSearch('view' , 0, 10)" >查询</a-button>
                        <a-button type="primary" @click="execExport" >导出</a-button>
                    </div>

                    <div class="reward-top-button" style="margin-top:20px;margin-bottom:20px; margin-left:20px;">

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>机构类型</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入机构类型！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>资本类型</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入资本类型！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>企业类型</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入企业类型！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>企业状态</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入企业状态！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>企业编码</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入企业状态！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                    </div>

                    <div class="reward-top-button" style="margin-top:20px;margin-bottom:20px; margin-left:20px;">

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>企业地址</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入企业状态！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>经营范围</span>
                          <a-input v-model="search.zone" :readonly="false" placeholder="请输入企业状态！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>注册资本</span>
                          <a-input v-model="search.smoney" :readonly="false" placeholder="请输入最小注册资本！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                          至
                          <a-input v-model="search.emoney" :readonly="false" placeholder="请输入最大注册资本！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                        <div style="display:inline; margin-left:10px; margin-right:10px;">
                          <span style="position:relative;" ><span style="color:red;margin-right:0px;position:absolute;left:-10px;top:0px;"></span>成立时间</span>
                          <a-input v-model="search.startEtime" :readonly="false" placeholder="请输入起始成立时间！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                          至
                          <a-input v-model="search.endEtime" :readonly="false" placeholder="请输入最终成立时间！" style="width:150px; border: 0px solid #fefefe; border-bottom: 1px solid #f0f0f0;"  />
                        </div>

                    </div>

                    <div style="margin-left:20px;">
                      <a-tabs default-active-key="1" @change="callback">
                        <a-tab-pane key="1" tab="列表">
                          <a-empty v-if="data.length == 0" style="margin-top:10%;height:580px;"/>
                          <div v-if="data.length > 0" class="reward-content-table" style="margin-left:0px; margin-bottom:20px; width:98%;"> 
                              <a-list item-layout="horizontal" :data-source="data">
                                <a-list-item v-show=" item.status != '已删除' && item.status != '已作废' " slot="renderItem" slot-scope="item, index" style="position:relative;">

                                  <a-list-item-meta :index="index" :description="`地址: ${item.registeredAddress} ，公司类型：${item.companyType}，经营范围: ${ item.businessScope.slice(0,100) + (item.businessScope.length > 100 ? '...' : '' ) } ` " @click="execView(item)" >
                                    <a slot="title" @click="execView(item)" >{{ `序号：${index+1}， 公司：${item.company}，法人：${item.legalRepresentative}，注册资本：${item.munit == 'CNY' ? '￥': (item.munit == 'USD' ? '$': '') }${item.registeredCapital}(万)，成立日期：${item.establish_time}，统一社会信用代码：${item.licenseNumber}，所在地：${item.province}` }}</a>
                                  </a-list-item-meta>

                                </a-list-item>
                              </a-list>
                              <a-divider type="horizontal" />
                              <a-pagination show-size-changer :default-current="1" :showQuickJumper="true" :total="search.total" @showSizeChange="paginationView" @change="paginationView" :pageSizeOptions="['10', '20', '30', '40', '50', '100', '1000', '10000']" > 
                                <template slot="buildOptionText" slot-scope="props">
                                  <span >{{ props.value }}条/页</span>
                                </template>
                              </a-pagination>
                          </div>
                        </a-tab-pane>

                        <a-tab-pane key="3" tab="表单">
                          <a-empty v-if="data.length == 0" style="margin-top:10%;height:580px;"/>
                          <vue-excel-editor v-if="data.length > 0" v-model="data" ref="grid" width="100%" filter-row autocomplete >
                                <vue-excel-column field="caseID"      label="案件编号"          width="120px" />
                                <vue-excel-column field="create_time"    label="填报日期"       width="120px" />
                                <vue-excel-column field="create_by"    label="填报人员"       width="120px" />
                                <vue-excel-column field="legalType"    label="案件级别"       width="120px" />
                                <vue-excel-column field="legalTname"    label="案件类型"       width="120px" />
                                <vue-excel-column field="stage"       label="程序阶段"          width="120px" />
                                <vue-excel-column field="plate"    label="所属板块"       width="120px" />
                                <vue-excel-column field="zone"    label="所属区域"       width="120px" />
                                <vue-excel-column field="zoneProject"    label="项目名称"       width="120px" />
                                <vue-excel-column field="receiveTime" label="接收时间(业务部)" width="120px" />
                                <vue-excel-column field="lawRTime"    label="接收时间(法务部)" width="120px" />
                                <vue-excel-column field="accuser"      label="发起(原告)"          width="150px" />
                                <vue-excel-column field="defendant"    label="应诉(被告)"          width="150px" />
                                <vue-excel-column field="thirdParty"    label="第三人"          width="150px" />
                                <vue-excel-column field="caseType"    label="案件案由"       width="200px" />
                                <vue-excel-column field="handledTime"  label="法院受理时间"       width="120px" />
                                <vue-excel-column field="court"        label="受理法院"          width="200px" />
                                <vue-excel-column field="judge"        label="承办法官"          width="120px" />
                                <vue-excel-column field="judgeMobile"        label="法官电话"          width="120px" />
                                <vue-excel-column field="inHouseLawyers" label="内部律师"      width="120px" />
                                <vue-excel-column field="inHouseLawyersMobile" label="律师电话"      width="120px" />
                                <vue-excel-column field="lawOffice"     label="律所名称"          width="120px" />
                                <vue-excel-column field="lawOfficeTime" label="委托时间"          width="120px" />
                                <vue-excel-column field="lawyer"        label="外聘律师"          width="120px" />
                                <vue-excel-column field="lawyerMobile"  label="律师电话"          width="120px" />
                                <vue-excel-column field="claims"        label="诉讼请求"          width="120px" />
                                <vue-excel-column field="claimsBidSum"  label="诉讼标的额"        width="120px" />
                                <vue-excel-column field="disclosure"    label="事项披露"          width="120px" />
                                <vue-excel-column field="lawcase"       label="案件进展"          width="120px" />
                                <vue-excel-column field="fstEvidence"   label="一审举证期限"          width="120px" />
                                <vue-excel-column field="fstCourtDate"  label="一审开庭时间"          width="120px" />
                                <vue-excel-column field="fstPlan"       label="一审诉讼预案"          width="120px" />
                                <vue-excel-column field="fstReason"     label="一审未填写原因"        width="120px" />
                                <vue-excel-column field="fstConform"    label="一审与预案是否相符"     width="200px" />
                                <vue-excel-column field="fstUnConformReasom"    label="一审不符原因"  width="120px" />
                                <vue-excel-column field="fstDetractionSum"      label="一审减损金额"  width="120px" />
                                <vue-excel-column field="fstValid"      label="一审是否生效"          width="120px" />
                                <vue-excel-column field="fstAppeal"     label="一审是否上诉"          width="120px" />
                                <vue-excel-column field="fstAppealTime" label="一审上诉期"            width="120px" />
                                <vue-excel-column field="secEvidence"   label="二审举证期限"          width="120px" />
                                <vue-excel-column field="secCourtDate"  label="二审开庭时间"          width="120px" />
                                <vue-excel-column field="secPlan"       label="二审诉讼预案"          width="120px" />
                                <vue-excel-column field="secReason"     label="二审未填写原因"        width="120px" />
                                <vue-excel-column field="secConform"    label="二审与预案是否相符"     width="200px" />
                                <vue-excel-column field="secUnConformReasom"    label="二审不符原因"  width="120px" />
                                <vue-excel-column field="secDetractionSum"      label="二审减损金额"  width="120px" />
                                <vue-excel-column field="secValid"      label="二审是否生效"          width="120px" />
                                <vue-excel-column field="secAppeal"     label="二审是否上诉"          width="120px" />
                                <vue-excel-column field="secAppealTime" label="二审上诉期"            width="120px" />
                                <vue-excel-column field="reviewEvidence"   label="再审举证期限"          width="120px" />
                                <vue-excel-column field="reviewCourtDate"  label="再审开庭时间"          width="120px" />
                                <vue-excel-column field="reviewPlan"       label="再审诉讼预案"          width="120px" />
                                <vue-excel-column field="reviewReason"     label="再审未填写原因"        width="120px" />
                                <vue-excel-column field="reviewConform"    label="再审与预案是否相符"     width="200px" />
                                <vue-excel-column field="reviewUnConformReasom"    label="再审不符原因"  width="120px" />
                                <vue-excel-column field="reviewDetractionSum"      label="再审减损金额"  width="120px" />
                                <vue-excel-column field="reviewValid"      label="再审是否生效"          width="120px" />
                                <vue-excel-column field="reviewAppeal"     label="再审是否上诉"          width="120px" />
                                <vue-excel-column field="reviewAppealTime" label="再审上诉期"            width="120px" />
                          </vue-excel-editor>
                        </a-tab-pane>

                      </a-tabs>
                    </div>

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
export default {
  mixins: [window.mixin],
  data() {
    return {
      getUrlParam:Betools.tools.getUrlParam,
      iswechat:false,
      iswework:false,
      pageName: "案件管理",
      momentNewMsg: true,
      activeTabKey: 3,
      acceptType:'*/*',
      uploadURL:'',
      tablename:'bs_company_flow_data',
      viewname:'bs_company_flow_data',
      size: 0,
      options:{},
      legal:{
        value:'',
        stage:'全部',
        caseSType:'全部',
        legalType:'全部',
      },
      search:{
        total:'500',
        zone:'',
        province:'',
        provinceSource:[],
      },
      data: [],
      readonly: false,
      userList:[],
      selectedSheet: null,
      sheetName: null,
      sheets: [{ name: "Sheet1", data: [{}] }],
      collection: [{ }],
      userinfo: '',
      usertitle:'',
      columns:[],
      data:[],
      rowSelection:[],
      stageVal:{},
      breadcrumb:[{icon:'home',text:'首页',path:'/stock/workspace'},{icon:'user',text:'工商管理',path:'/stock/workspace'},{icon:'form',text:'公司工商查询',path:''}],
      statusType:{'valid':'有效','invalid':'删除'},
      zoneType:{'领地集团总部':'领地集团总部','重庆区域':'重庆区域','两湖区域':'两湖区域','川北区域':'川北区域','成都区域':'成都区域','乐眉区域':'乐眉区域','中原区域':'中原区域','攀西区域':'攀西区域','新疆区域':'新疆区域','大湾区域':'大湾区域','北京区域':'北京区域'},
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
      deNull:Betools.tools.deNull,

      async provinceSearch(){
        const { search } = this;
        const value = search.province;
        let list = await Betools.manage.queryTableData('v_company_sum' , ``);
        search.provinceSource = list.map(e=>e.province);
      },

      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
        );
      },

      // 企业微信登录处理函数
      async  weworkLogin  (codeType = 'search', systemType = 'search')  {
        const userinfo_work = await Betools.query.queryWeworkUser(codeType, systemType,'v5');
        const userinfo = await Betools.storage.getStore('system_userinfo');
        this.legal.create_by = (userinfo ? userinfo.realname || userinfo.name || userinfo.lastname : '');
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
          const tableName = this.tablename;
          this.iswechat = Betools.tools.isWechat(); //查询当前是否微信端
          this.iswework = Betools.tools.isWework(); //查询是否为企业微信
          this.userinfo = await this.weworkLogin(); //查询当前登录用户
          this.back = Betools.tools.getUrlParam('back') || '/stock/workspace'; //查询上一页
          this.legal.stage = Betools.tools.getUrlParam('stage') || '全部';
          const userinfo = await Betools.storage.getStore('system_userinfo');  //获取用户基础信息
          this.execSearch('view',0,10);
          this.provinceSearch();
        } catch (error) {
          console.log(error);
        }
      },

      //查询不同状态的领用数据
      async handleList(tableName , status = '存续', userinfo, searchSql , page = 0 , size = 10000){
        if(Betools.tools.isNull(userinfo) || Betools.tools.isNull(userinfo.username)){
            return [];
        }
        const condition = `_where=(registrationStatus,in,${status})${searchSql}&_sort=-registeredCapital&_p=${page}&_size=${size}`;
        let list = await Betools.manage.queryTableData(tableName ,condition );
        this.search.total = await Betools.manage.queryTableDataCount(tableName, condition);
        list.map((item)=>{ 
            item.create_time = dayjs(item.create_time).format('YYYY-MM-DD'); 
            item.establish_time = dayjs(item.establish_time).format('YYYY-MM-DD');
        });
        return list;
      },

      // 案件发起录入申请
      async execApply(){
          const { $router } = this;
          $router.push(`/stock/case/legalapply?type=1&tname=案件录入&apply=new&role=new`);
      },

      // 案件记录修改申请
      async execPatch(elem){
          const { $router } = this;
          $router.push(`/stock/case/legalapply?id=${elem.id}&type=1&tname=案件修改&apply=edit&role=edit`);
      },

      // 案件记录追加进展
      async execProcess(elem){
          const { $router } = this;
          $router.push(`/stock/case/legalapply?id=${elem.id}&type=1&tname=案件进展&apply=process&role=process`);
      },

      // 案件记录查看申请
      async execView(elem){
          const { $router } = this;
          $router.push(`/stock/case/legalapply?id=${elem.id}&type=1&tname=案件详情&apply=view&role=view`);
      },

      // 案件记录发起知会
      async execNotify(elem){
          const { $router } = this;
          $router.push(`/stock/case/legalapply?id=${elem.id}&type=1&tname=案件详情&apply=view&role=notify`);
      },

      // 案件记录删除信息
      async execDelete(elem){
          const { $router , data , tablename , execFresh } = this;
          const that = this;
          this.$confirm({
              title: "温馨提示",
              content: "您好，删除案件记录后不可恢复，您确定执行删除操作?",
              onOk: async() => {
                    Betools.manage.patchTableData(tablename, elem.id, {status:'已删除'})
                    const result = await Betools.manage.patchTableData(tablename, elem.id, {status:'已删除'}); // 向表单提交form对象数据
                    if(result && result.error && result.error.errno){ //提交数据如果出现错误，请提示错误信息
                        return await vant.Dialog.alert({  title: '温馨提示',  message: `系统错误，请联系管理人员，错误编码：[${result.error.code}]. `, });
                    }
                    await execFresh('view');
                    vant.Dialog.alert({  title: '温馨提示',  message: `已执行删除操作！`, }); 
                    await Betools.tools.sleep(300);
                    this.data.map(item => { (item.id == elem.id) ? item.status = '已删除' : null; });
                }
            });
      },

      // 案件记录禁用信息
      async execBan(elem){
          const { $router , data , tablename , execFresh } = this;
          const that = this;
          this.$confirm({
              title: "温馨提示",
              content: "您确定执行禁用操作?",
              onOk: async() => {
                    Betools.manage.patchTableData(tablename, elem.id, {status:'已作废'});
                    const result = await Betools.manage.patchTableData(tablename, elem.id, {status:'已作废'}); // 向表单提交form对象数据
                    if(result && result.error && result.error.errno){ //提交数据如果出现错误，请提示错误信息
                        return await vant.Dialog.alert({  title: '温馨提示',  message: `系统错误，请联系管理人员，错误编码：[${result.error.code}]. `, });
                    }
                    await execFresh('view');
                    vant.Dialog.alert({  title: '温馨提示',  message: `已执行禁用操作！`, }); 
                    await Betools.tools.sleep(300);
                    this.data.map(item => { (item.id == elem.id) ? item.status = '已作废' : null; });
                }
            });
      },

      // 案件周期管理
      async execHear(elem, stage){
          const { $router , data , tablename , execFresh } = this;
          const that = this;

          const preStage = this.stageVal[elem.stage];
          const curStage = this.stageVal[stage];

          if(curStage < preStage){ // 检查案件阶段是否以正常周期流程
            return vant.Dialog.alert({  title: '温馨提示',  message: `您好，不能从‘${elem.stage}’进行到‘${stage}’`, });
          }

          this.$confirm({
              title: "温馨提示",
              content: `您确定进行${stage}操作?`,
              onOk: async() => {
                    Betools.manage.patchTableData(tablename, elem.id, {stage}); // 向表单提交form对象数据
                    const result = await Betools.manage.patchTableData(tablename, elem.id, {stage}); // 向表单提交form对象数据
                    if(result && result.error && result.error.errno){ //提交数据如果出现错误，请提示错误信息
                        return await vant.Dialog.alert({  title: '温馨提示',  message: `系统错误，请联系管理人员，错误编码：[${result.error.code}]. `, });
                    }
                    await execFresh('view'); // vant.Dialog.alert({  title: '温馨提示',  message: `已完成进入${stage}操作！`, });  // 获取到本地缓存数据，然后将缓存数据的列表中的此数据的状态改为stage
                    this.data.map(item => { 
                      (item.id == elem.id) ? item.stage = stage : null; 
                      (item.id == elem.id) ? Betools.query.cacheTableDataByID(tablename, item.id , item) : null ;
                    });
                    $router.push(`/stock/case/legalapply?id=${elem.id}&type=1&stage=${stage}&tname=${stage}&apply=stage&role=stage`);
                }
            });
      },

      // 案件评价管理
      async execEvaluate(elem , status){
        const { $router } = this;
        $router.push(`/stock/case/legalapply?id=${elem.id}&type=1&tname=案件评价&stage=evaluate&apply=case&role=${status}`);
      },

      // 案件记录导出功能
      async execExport(){
          const { $router } = this;
          this.$refs.grid.exportTable('xlsx', false, '案件台账数据');
      },

      // 案件列表执行刷新操作45
      async execFresh(value = '' , page = 0, size = 10){
        await this.execSearch(value, page , size);
      },



      // 案件列表执行搜索功能
      async execSearch(value = '', page = 0 , size = 10){
        console.log(`exec search ...` , dayjs().format('HH:mm:ss'));
        const tableName = this.viewname;
        const cacheRandomKey = value == 'view' ? ',' + Math.random().toString().slice(2,6) : '';
        const toast = value == 'view' ? vant.Toast.loading({ duration: 0,  forbidClick: true,  message: '刷新中...', }):null;
        const { legal, search } = this;
        const userinfo = await Betools.storage.getStore('system_userinfo');  //获取用户基础信息
        let searchSql = typeof legal.value == 'string' ? `~and((company,like,~${legal.value}~)~or(businessScope,like,~${legal.value}~))` : '';
        let stageSql = Betools.tools.isNull(legal.stage) || legal.stage == '全部' ? '' : `~and(registrationStatus,in,存续)`;
        let provinceSql = Betools.tools.isNull(search.province) ? '' :`~and(province,in,${search.province})`;
        const data = await this.handleList(tableName , `存续`, userinfo, stageSql + provinceSql + searchSql , page , size);
        value == 'view' ? (this.data = data)  : null;
        await Betools.tools.sleep(300);
        value == 'view' ? (vant.Toast.clear()) : null;
        return data; 
      },

      // 执行分页查询
      async paginationView(page = 0, size = 10){
        this.execSearch('view', page -1 , size);
      }

  },
};
</script>
<style scoped >
    @import "../../../assets/css/reward.home.css";
    @import "../../../assets/css/reward.apply.css";
</style>
