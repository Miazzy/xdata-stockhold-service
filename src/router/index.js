// import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

// app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [{
    path: '/legal',
    name: "案件管理",
    component: resolve => require(["../components/legal/home.vue"], resolve)
}, {
    path: '/',
    name: "工作台",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/workspace.vue"], resolve)
    }
}, {
    path: '/legal/workspace',
    name: "工作台",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/workspace.vue"], resolve)
    }
}, {
    path: '/legal/case/legalapply',
    name: "案件申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legalapply.vue"], resolve)
    }
}, {
    path: '/legal/case/legalview',
    name: "案件管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legalapply.vue"], resolve)
    }
}, {
    path: '/legal/firm/firmapply',
    name: "律所申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/firm/firmapply.vue"], resolve)
    }
}, {
    path: '/legal/lawyer/lawyerapply',
    name: "律师申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/lawyer/lawyerapply.vue"], resolve)
    }
}, {
    path: '/legal/firm/firmlist',
    name: "律所管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/firm/firmlist.vue"], resolve)
    }
}, {
    path: '/legal/lawyer/lawyerlist',
    name: "律师管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/lawyer/lawyerlist.vue"], resolve)
    }
}, {
    path: '/legal/firm/firmview', //lawyerview
    name: "律所详情",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/firm/firmview.vue"], resolve)
    }
}, {
    path: '/legal/lawyer/lawyerview', //lawyerview
    name: "律师详情",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/lawyer/lawyerview.vue"], resolve)
    }
}, {
    path: '/legal/case/legallist',
    name: "案件管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legallist.vue"], resolve)
    }
}, {
    path: '/legal/course/lawsuitlist',
    name: "结案记录",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legallist.vue"], resolve)
    }
}, {
    path: '/legal/case/firstlist',
    name: "一审管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legallist.vue"], resolve)
    }
}, {
    path: '/legal/case/secondlist',
    name: "二审管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legallist.vue"], resolve)
    }
}, {
    path: '/legal/case/executelist',
    name: "执行管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legallist.vue"], resolve)
    }
}, {
    path: '/legal/case/thirdlist',
    name: "再审管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/case/legallist.vue"], resolve)
    }
}, {
    path: '/legal/court/courtapply',
    name: "法院录入",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/court/courtapply.vue"], resolve)
    }
}, {
    path: '/legal/court/courtlist',
    name: "法院管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/court/courtlist.vue"], resolve)
    }
}, {
    path: '/legal/court/courtview',
    name: "法院查看",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/court/courtview.vue"], resolve)
    }
}, {
    path: '/legal/court/judgeapply',
    name: "法官录入",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/court/judgeapply.vue"], resolve)
    }
}, {
    path: '/legal/court/judgelist',
    name: "法官管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/court/judgelist.vue"], resolve)
    }
}, {
    path: '/legal/court/judgeview',
    name: "法官查看",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/court/judgeview.vue"], resolve)
    }
}, {
    path: '/legal/netdisk',
    name: "云文件",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/netdisk.vue"], resolve)
    }
}, {
    path: '/legal/collect',
    name: "案件收藏",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/collect.vue"], resolve)
    }
}, {
    path: '/legal/contact',
    name: "联系人",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/contact.vue"], resolve)
    }
}, {
    path: '/legal/message',
    name: "消息",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/message.vue"], resolve)
    }
}, {
    path: '/legal/report/legalmonth',
    name: "月度报表",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/report/legalmonth.vue"], resolve)
    }
}, {
    path: '/legal/report/legalquarter',
    name: "季度报表",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/report/legalquarter.vue"], resolve)
    }
}, {
    path: '/legal/company/companyapply',
    name: "设立公司申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/company/companyapply.vue"], resolve)
    }
}, {
    path: '/legal/company/companylist',
    name: "公司工商查询",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/company/companylist.vue"], resolve)
    }
}, {
    path: '/legal/pledge/pledgeapply',
    name: "录入质押申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/pledge/pledgeapply.vue"], resolve)
    }
}, {
    path: '/legal/pledge/pledgelist',
    name: "质押记录管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/pledge/pledgelist.vue"], resolve)
    }
}, {
    path: '/legal/qualification/qualificationapply',
    name: "录入资质申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/qualification/qualificationapply.vue"], resolve)
    }
}, {
    path: '/legal/qualification/qualificationlist',
    name: "资质记录管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/qualification/qualificationlist.vue"], resolve)
    }
}, {
    path: '/legal/subsidy/subsidyapply',
    name: "录入补贴记录申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/subsidy/subsidyapply.vue"], resolve)
    }
}, {
    path: '/legal/subsidy/subsidylist',
    name: "补贴记录管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/subsidy/subsidylist.vue"], resolve)
    }
}, {
    path: '/legal/pledge/pledgeapply',
    name: "录入补贴记录申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/pledge/pledgeapply.vue"], resolve)
    }
}, {
    path: '/legal/pledge/pledgelist',
    name: "补贴记录管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/pledge/pledgelist.vue"], resolve)
    }
}, {
    path: '/legal/property/propertyapply',
    name: "录入知识产权申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/property/propertyapply.vue"], resolve)
    }
}, {
    path: '/legal/property/propertylist',
    name: "知识产权管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/property/propertylist.vue"], resolve)
    }
}, {
    path: '/legal/punishment/punishmentapply',
    name: "录入处罚记录申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/punishment/punishmentapply.vue"], resolve)
    }
}, {
    path: '/legal/punishment/punishmentlist',
    name: "处罚记录管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/punishment/punishmentlist.vue"], resolve)
    }
}, {
    path: '/legal/identity/identityapply',
    name: "录入身份记录申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/punishment/punishmentapply.vue"], resolve)
    }
}, {
    path: '/legal/identity/identitylist',
    name: "身份记录管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/identity/identitylist.vue"], resolve)
    }
}, {
    path: '/legal/license/licenseapply',
    name: "录入证照信息申请",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/license/licenseapply.vue"], resolve)
    }
}, {
    path: '/legal/license/licenselist',
    name: "证照信息管理",
    components: {
        "default": resolve => require(["../components/legal/home.vue"], resolve),
        "subPage": resolve => require(["../components/legal/license/licenselist.vue"], resolve)
    }
}];

// 设置路由信息
const router = new Router({ base: "/", routes, });

// history模式跳转到新页面，返回顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

export default router;