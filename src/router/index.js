// import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

// app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [{
    path: '/legal',
    name: "案件管理",
    component: resolve => require(["../components/stock/home.vue"], resolve)
}, {
    path: '/',
    name: "工作台",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/workspace.vue"], resolve)
    }
}, {
    path: '/stock/workspace',
    name: "工作台",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/workspace.vue"], resolve)
    }
}, {
    path: '/stock/case/legalapply',
    name: "案件申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legalapply.vue"], resolve)
    }
}, {
    path: '/stock/case/legalview',
    name: "案件管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legalapply.vue"], resolve)
    }
}, {
    path: '/stock/firm/firmapply',
    name: "律所申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/firm/firmapply.vue"], resolve)
    }
}, {
    path: '/stock/lawyer/lawyerapply',
    name: "律师申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/lawyer/lawyerapply.vue"], resolve)
    }
}, {
    path: '/stock/firm/firmlist',
    name: "律所管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/firm/firmlist.vue"], resolve)
    }
}, {
    path: '/stock/lawyer/lawyerlist',
    name: "律师管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/lawyer/lawyerlist.vue"], resolve)
    }
}, {
    path: '/stock/firm/firmview', //lawyerview
    name: "律所详情",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/firm/firmview.vue"], resolve)
    }
}, {
    path: '/stock/lawyer/lawyerview', //lawyerview
    name: "律师详情",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/lawyer/lawyerview.vue"], resolve)
    }
}, {
    path: '/stock/case/legallist',
    name: "案件管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legallist.vue"], resolve)
    }
}, {
    path: '/stock/course/lawsuitlist',
    name: "结案记录",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legallist.vue"], resolve)
    }
}, {
    path: '/stock/case/firstlist',
    name: "一审管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legallist.vue"], resolve)
    }
}, {
    path: '/stock/case/secondlist',
    name: "二审管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legallist.vue"], resolve)
    }
}, {
    path: '/stock/case/executelist',
    name: "执行管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legallist.vue"], resolve)
    }
}, {
    path: '/stock/case/thirdlist',
    name: "再审管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/case/legallist.vue"], resolve)
    }
}, {
    path: '/stock/court/courtapply',
    name: "法院录入",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/court/courtapply.vue"], resolve)
    }
}, {
    path: '/stock/court/courtlist',
    name: "法院管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/court/courtlist.vue"], resolve)
    }
}, {
    path: '/stock/court/courtview',
    name: "法院查看",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/court/courtview.vue"], resolve)
    }
}, {
    path: '/stock/court/judgeapply',
    name: "法官录入",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/court/judgeapply.vue"], resolve)
    }
}, {
    path: '/stock/court/judgelist',
    name: "法官管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/court/judgelist.vue"], resolve)
    }
}, {
    path: '/stock/court/judgeview',
    name: "法官查看",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/court/judgeview.vue"], resolve)
    }
}, {
    path: '/stock/netdisk',
    name: "云文件",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/netdisk.vue"], resolve)
    }
}, {
    path: '/stock/collect',
    name: "案件收藏",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/collect.vue"], resolve)
    }
}, {
    path: '/stock/contact',
    name: "联系人",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/contact.vue"], resolve)
    }
}, {
    path: '/stock/message',
    name: "消息",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/message.vue"], resolve)
    }
}, {
    path: '/stock/report/legalmonth',
    name: "月度报表",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/report/legalmonth.vue"], resolve)
    }
}, {
    path: '/stock/report/legalquarter',
    name: "季度报表",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/report/legalquarter.vue"], resolve)
    }
}, {
    path: '/stock/company/companyapply',
    name: "设立公司申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/company/companyapply.vue"], resolve)
    }
}, {
    path: '/stock/company/companylist',
    name: "公司工商查询",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/company/companylist.vue"], resolve)
    }
}, {
    path: '/stock/pledge/pledgeapply',
    name: "录入质押申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/pledge/pledgeapply.vue"], resolve)
    }
}, {
    path: '/stock/pledge/pledgelist',
    name: "质押记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/pledge/pledgelist.vue"], resolve)
    }
}, {
    path: '/stock/qualification/qualificationapply',
    name: "录入资质申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/qualification/qualificationapply.vue"], resolve)
    }
}, {
    path: '/stock/qualification/qualificationlist',
    name: "资质记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/qualification/qualificationlist.vue"], resolve)
    }
}, {
    path: '/stock/annals/annalsapply',
    name: "上传年报申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/annals/annalsapply.vue"], resolve)
    }
}, {
    path: '/stock/annals/annalslist',
    name: "年报记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/annals/annalslist.vue"], resolve)
    }
}, {
    path: '/stock/subsidy/subsidyapply',
    name: "录入补贴记录申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/subsidy/subsidyapply.vue"], resolve)
    }
}, {
    path: '/stock/subsidy/subsidylist',
    name: "补贴记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/subsidy/subsidylist.vue"], resolve)
    }
}, {
    path: '/stock/pledge/pledgeapply',
    name: "录入补贴记录申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/pledge/pledgeapply.vue"], resolve)
    }
}, {
    path: '/stock/pledge/pledgelist',
    name: "补贴记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/pledge/pledgelist.vue"], resolve)
    }
}, {
    path: '/stock/property/propertyapply',
    name: "录入知识产权申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/property/propertyapply.vue"], resolve)
    }
}, {
    path: '/stock/property/propertylist',
    name: "知识产权管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/property/propertylist.vue"], resolve)
    }
}, {
    path: '/stock/punishment/punishmentapply',
    name: "录入处罚记录申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/punishment/punishmentapply.vue"], resolve)
    }
}, {
    path: '/stock/punishment/punishmentlist',
    name: "处罚记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/punishment/punishmentlist.vue"], resolve)
    }
}, {
    path: '/stock/identity/identityapply',
    name: "录入身份记录申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/punishment/punishmentapply.vue"], resolve)
    }
}, {
    path: '/stock/identity/identitylist',
    name: "身份记录管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/identity/identitylist.vue"], resolve)
    }
}, {
    path: '/stock/license/licenseapply',
    name: "录入证照信息申请",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/license/licenseapply.vue"], resolve)
    }
}, {
    path: '/stock/license/licenselist',
    name: "证照信息管理",
    components: {
        "default": resolve => require(["../components/stock/home.vue"], resolve),
        "subPage": resolve => require(["../components/stock/license/licenselist.vue"], resolve)
    }
}];

// 设置路由信息
const router = new Router({ base: "/", routes, });

// history模式跳转到新页面，返回顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

export default router;