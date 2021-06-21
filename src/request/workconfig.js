/**
 * @description 邮件配置
 */
export const mailconfig = {

};

/**
 * @description 账户配置
 */
export const config = {

}

/**
 * @description 系统配置信息
 */
export const system = {
    config: {
        regexp: {
            mail: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            mobile: '',
        }
    }
}

/**
 * @description 工作组配置
 */
export const group = {

}

/**
 * @description 行政管理用印状态类型
 */
export const statusType = {
    'none': '待用印',
    'seal': '已用印',
    'receive': '已领取',
    'sending': '已寄送', //我方先用印，则已用印后，将合同寄给对方
    'getback': '已寄回', //收到对方盖章后的合同后，接收人，将合同设置为已返回
    'front': '移交前台',
    'archive': '归档完成',
    'done': '已归档',
}

/**
 * @description 合同类别对应编号名称
 */
export const sealTypeNoName = {
    '合同类': '合同编号',
    '非合同类': '流水编号',
}

/**
 * @description 下拉组件选择类型
 */
export const compcolumns = {
    commonTypeColumns: ['是', '否'],
    archiveTypeColumns: ['财务归档', '档案归档'],
    orderTypeColumns: ['我方先印', '常规用印'],
    sealTypeColumns: ['合同类', '非合同类'],
    sealStatusColumns: ['待用印', '已用印', '已领取', '已寄送', '移交前台', '档案归档', '财务归档', '已退回', '已作废'],
    diplomaTypeColumns: ['博士', '硕士', '本科', '专科', '高中', '初中', '小学'],
    acceptType: ['*/*'],
    approveColumns: ['OA系统', 'ERP系统', '费控系统', '创达OA系统', 'CRM系统', 'EHR系统', '资金系统', '领地HR', '宝瑞商管'],
}

/**
 * @description 物品领用类型
 */
export const goodstype = {
    'office': '办公用品',
    'drug': '药品',
    'prevent': '防疫物资',
    '办公用品': 'office',
    '药品': 'drug',
    '防疫物资': 'prevent',
};

/**
 * @description 物品借用类型
 */
export const goodsborrowtype = {
    'common': '信息设备',
    'box': '传屏设备',
};

/**
 * @description Reward类型
 */
export const rewardtype = {
    '0': '业绩考核奖',
    '1': '总裁专项奖',
    '2': '总经理专项奖',
    '3': '特殊贡献奖',
    '4': '其他股权管理',
};

/**
 * @description 股权管理界面默认配置
 */
export const reward = ($router) => {
    return [{
        id: 'task-pane',
        title: '任务面板',
        display: true,
        taskflows: [{
            name: "我的知会",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/liebiao_jy.png`,
            href: "/account/myrewardlist",
            description: '查看我的知会信息',
            click: () => {
                $router.push(`/stock/message?panename=myrewardlist&type=7&back=/stock/workspace`, '_blank');
            },
        }, {
            name: "我的待办",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/time_00.png`,
            href: "/account/todolist",
            description: '查看待处理的审批流程',
            click: () => {
                $router.push(`/stock/message?panename=mytodolist&type=7&back=/stock/workspace`, '_blank');
            }
        }, {
            name: "我的已办",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/home_00.png`,
            href: "/account/donelist",
            description: '查看已处理的审批流程',
            click: () => {
                $router.push(`/stock/message?panename=mydonelist&type=7&back=/stock/workspace`, '_blank');
            }
        }, {
            name: "我的申请",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/hire.png`,
            href: "/account/donelist",
            description: '查看我发起的审批流程',
            click: () => {
                $router.push(`/stock/message?panename=myapplylist&type=7&back=/stock/workspace`, '_blank');
            }
        }],
    }, {
        id: 'task-pane',
        title: '工商管理',
        display: true,
        taskflows: [{
            name: "设立公司申请",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/renwuzhipai_jy.png`,
            href: "/account/todolist",
            description: '设立公司申请',
            click: () => {
                $router.push(`/stock/company/companyapply?type=1&tname=设立公司&apply=new`, '_blank');
            }
        }, {
            name: "录入质押申请",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/fenbufenxiang_jy.png`,
            href: "/account/donelist",
            description: '录入质押申请',
            click: () => {
                $router.push(`/stock/pledge/pledgeapply?type=1&tname=录入质押&apply=new`, '_blank');
            }
        }, {
            name: "录入资质申请",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/dushu_sn01.png`,
            href: "/account/donelist",
            description: '录入资质申请',
            click: () => {
                $router.push(`/stock/qualification/qualificationapply?type=1&tname=录入资质&apply=new`, '_blank');
            }
        }, {
            name: "上传年报申请",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xiangmuyunpan_jy.png`,
            href: "/account/donelist",
            description: '上传年报申请',
            click: () => {
                $router.push(`/stock/annals/annalsapply?type=1&tname=上传年报&apply=new`, '_blank');
            }
        }, {
            name: "公司工商查询",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/tubiao-02.png`,
            href: "/account/myanalyse",
            description: '公司工商及股权信息查询',
            click: () => {
                $router.push(`/stock/company/companylist?type=1&tname=公司记录&apply=manage`, '_blank');
            },
        }, {
            name: "质押记录管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xinxidengji_jy.png`,
            href: "/account/donelist",
            description: '公司质押记录管理',
            click: () => {
                $router.push(`/stock/pledge/pledgelist?type=1&tname=质押记录&apply=manage`, '_blank');
            }
        }, {
            name: "资质记录管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xiezuowendangku_jy.png`,
            href: "/account/todolist",
            description: '公司资质记录管理',
            click: () => {
                $router.push(`/stock/qualification/qualificationlist?type=1&tname=资质记录&apply=manage`, '_blank');
            }
        }, {
            name: "年报记录管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/icon_phone_contact_.png`,
            href: "/account/todolist",
            description: '年报记录管理',
            click: () => {
                $router.push(`/stock/annals/annalslist?type=1&tname=年报记录&apply=manage`, '_blank');
            }
        }],
    }, {
        id: 'common-pane',
        title: '记录管理',
        display: true,
        taskflows: [{
            name: "录入补贴记录",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/moxingguanli_jy.png`,
            href: "/account/donelist",
            description: '录入补贴记录',
            click: () => {
                $router.push(`/stock/pledge/pledgeapply?type=1&tname=录入质押`, '_blank');
            }
        }, {
            name: "录入知识产权",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/icon_app_report_.png`,
            href: "/account/donelist",
            description: '录入知识产权',
            click: () => {
                $router.push(`/stock/pledge/pledgeapply?type=1&tname=录入质押`, '_blank');
            }
        }, {
            name: "录入处罚记录",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/danganguanli.png`,
            href: "/account/donelist",
            description: '录入处罚记录',
            click: () => {
                $router.push(`/stock/pledge/pledgeapply?type=1&tname=录入质押`, '_blank');
            }
        }, {
            name: "录入账户记录",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/icon_app_add_.png`,
            href: "/account/donelist",
            description: '录入账户记录',
            click: () => {
                $router.push(`/stock/pledge/pledgeapply?type=1&tname=录入质押`, '_blank');
            }
        }, {
            name: "补贴记录管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/gerenyewushouli.png`,
            href: "/account/todolist",
            description: '补贴记录管理',
            click: () => {
                $router.push(`/stock/firm/firmapply?type=1&tname=律所录入&apply=new`, '_blank');
            }
        }, {
            name: "知识产权管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/icon_app_project_.png`,
            href: "/account/todolist",
            description: '公司知识产权管理',
            click: () => {
                $router.push(`/stock/lawyer/lawyerlist?type=1&tname=律师管理&apply=管理`, '_blank');
            }
        }, {
            name: "处罚记录管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/anquanjiandu_jy.png`,
            href: "/account/todolist",
            description: '处罚记录管理',
            click: () => {
                $router.push(`/stock/lawyer/lawyerlist?type=1&tname=律师管理&apply=管理`, '_blank');
            }
        }, {
            name: "账户记录管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/icon_phone_workmate_.png`,
            href: "/account/todolist",
            description: '账户记录管理',
            click: () => {
                $router.push(`/stock/lawyer/lawyerlist?type=1&tname=律师管理&apply=管理`, '_blank');
            }
        }],
    }, {
        id: 'law-pane',
        title: '证照管理',
        display: true,
        taskflows: [{
            name: "录入身份信息",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/tubiao-22.png`,
            href: "/account/todolist",
            description: '录入身份信息',
            click: () => {
                $router.push(`/stock/court/courtapply?type=1&tname=法院录入&apply=new`, '_blank');
            }
        }, {
            name: "录入营业执照",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/zhaopian_sn01.png`,
            href: "/account/todolist",
            description: '录入营业执照',
            click: () => {
                $router.push(`/stock/court/courtapply?type=1&tname=法院录入&apply=new`, '_blank');
            }
        }, {
            name: "录入项目证照",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/toupiao.png`,
            href: "/account/todolist",
            description: '录入项目证照',
            click: () => {
                $router.push(`/stock/court/courtapply?type=1&tname=法院录入&apply=new`, '_blank');
            }
        }, {
            name: "录入其他证照",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/yuyuechadang.png`,
            href: "/account/todolist",
            description: '录入其他证照',
            click: () => {
                $router.push(`/stock/court/courtapply?type=1&tname=法院录入&apply=new`, '_blank');
            }
        }, {
            name: "身份信息管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/shujucaiji.png`,
            href: "/account/donelist",
            description: '身份信息管理',
            click: () => {
                $router.push(`/stock/court/judgeapply?type=1&tname=法官录入&apply=new`, '_blank');
            }
        }, {
            name: "营业执照管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/icon_phone_contact_.png`,
            href: "/account/donelist",
            description: '营业执照管理',
            click: () => {
                $router.push(`/stock/court/judgeapply?type=1&tname=法官录入&apply=new`, '_blank');
            }
        }, {
            name: "项目证照管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/qiyehaozujian_jy.png`,
            href: "/account/todolist",
            description: '项目证照管理',
            click: () => {
                $router.push(`/stock/court/courtlist?type=1&tname=法院管理&apply=管理`, '_blank');
            }
        }, {
            name: "其他证照管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/dushu_sn01.png`,
            href: "/account/todolist",
            description: '其他证照管理',
            click: () => {
                $router.push(`/stock/court/judgelist?type=1&tname=法官管理&apply=管理`, '_blank');
            }
        }],
    }]
};

export const getRewardQuickTag = ($router) => {
    return [{
        name: '我的待办',
        color: 'purple',
        click: () => {

        },
    }, {
        name: '我的已办',
        color: 'cyan',
        click: () => {

        },
    }, {
        name: '我的申请',
        color: 'cyan',
        click: () => {

        },
    }, {
        name: '我的知会',
        color: 'pink',
        click: () => {

        },
    }, {
        name: '统计分析',
        color: 'blue',
        click: () => {

        },
    }, ];
};

export const getRewardWflow = ($router) => {
    return [];
}

export const getIndustryflow = ($router) => {
    return [{
        name: "房地产行业 - 合计：230家,注册资本￥1699805(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "物业行业 - 合计：64家,注册资本￥11303(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "商管行业 - 合计：60家,注册资本￥116496(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "金融行业 - 合计：21家,注册资本￥126816(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "商贸行业 - 合计：14家,注册资本￥50000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "建筑行业 - 合计：11家,注册资本￥31000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "高新技术行业 - 合计：8家,注册资本￥21318(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "监理行业 - 合计：4家,注册资本￥2000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "医疗行业 - 合计：4家,注册资本￥9000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "商务咨询行业 - 合计：2家,注册资本￥250(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }];
}

export const getLegalflow = ($router) => {
    return [{
        name: "吴雪芳 - 合计：29家,注册资本￥200(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "刘玉国 - 合计：28家,注册资本￥65927(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "张建 - 合计：24家,注册资本￥73932(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "罗高丽 - 合计：18家,注册资本￥78633(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "詹巍 - 合计：18家,注册资本￥52603(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "赵艳 - 合计：18家,注册资本￥35427(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "刘姣 - 合计：16家,注册资本￥1691(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "李蕊志 - 合计：14家,注册资本￥94747(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "杨光焰 - 合计：12家,注册资本￥4760(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "侯三利 - 合计：10家,注册资本￥74200(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }];
}

export const getCityflow = ($router) => {
    return [{
        name: "成都 - 合计：124家,注册资本￥1185628(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "眉山 - 合计：30家,注册资本￥103044(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "凉山 - 合计：26家,注册资本￥50120(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "绵阳 - 合计：21家,注册资本￥59568(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "乐山 - 合计：18家,注册资本￥51850(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "雅安 - 合计：17家,注册资本￥50782(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "拉萨 - 合计：11家,注册资本￥69500(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "库尔勒 - 合计：11家,注册资本￥12200(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "乌鲁木齐 - 合计：10家,注册资本￥44546(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "南充 - 合计：10家,注册资本￥35098(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }]
}

export const getZoneflow = ($router) => {
    return [{
        name: "四川 - 合计：266家,注册资本￥1591001(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "新疆 - 合计：25家,注册资本￥56816(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "广东 - 合计：24家,注册资本￥54591(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "河南 - 合计：23家,注册资本￥29400(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "西藏 - 合计：12家,注册资本￥99500(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "河北 - 合计：12家,注册资本￥26550(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "贵州 - 合计：12家,注册资本￥11850(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "北京 - 合计：6家,注册资本￥104206(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "吉林 - 合计：6家,注册资本￥20250(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "江苏 - 合计：6家,注册资本￥17574(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }]
}

export const getCompanyflow = ($router) => {
    return [{
        name: "领地集团有限公司 - ￥339000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "融量集团有限公司 - ￥260000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "北京当代领地置业有限公司 - ￥100000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "成都恒域房地产开发有限公司 - ￥100000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "成都汉景实业有限公司 - ￥53500(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "成都新隆置业有限公司 - ￥44000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "成都航悦企业管理有限公司 - ￥40000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "量石投资有限公司 - ￥30000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "中亚建业建设工程有限公司 - ￥30000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }, {
        name: "仁寿领创房地产开发有限公司 - ￥28000(万)",
        span: 24,
        href: "",
        display: 'view',
        click: () => {
            window.open("", '_blank');
        }
    }]
}

export const getLawWebsiteflow = ($router) => {
    return [{
            name: "企查查 - 企业工商信息查询系统",
            span: 24,
            href: "https://www.qcc.com/",
            click: () => {
                window.open("https://www.qcc.com/", '_blank');
            }
        },
        {
            name: "天眼查 - 企业信用信息系统",
            span: 24,
            href: "https://www.tianyancha.com/",
            click: () => {
                window.open("https://www.tianyancha.com/", '_blank');
            }
        },
        {
            name: "启信宝 - 企业信用信息平台",
            span: 24,
            href: "https://www.qixin.com/",
            click: () => {
                window.open("https://www.qixin.com/", '_blank');
            }
        },
        {
            name: "爱企查 - 企业信用信息系统",
            span: 24,
            href: "https://aiqicha.baidu.com/",
            click: () => {
                window.open("https://aiqicha.baidu.com/", '_blank');
            }
        },
    ];
}

export const courtList = async() => {
    const courtData = await Betools.query.queryNacosConfig('system.legal.config', 'courtData');
    return courtData[0].children;
};

export const courtPlainList = async(key) => {
    const data = await courtList();
    let list = [];
    for (const firstObj of data) {
        const { value } = firstObj;
        if (!Betools.tools.isNull(value) && value.includes(key)) {
            !Betools.tools.isNull(value) ? list.push(value) : null;
            if (!Betools.tools.isNull(firstObj.children)) {
                for (const secondObj of firstObj.children) {
                    const { value } = secondObj;
                    !Betools.tools.isNull(value) ? list.push(value) : null;
                    if (!Betools.tools.isNull(secondObj.children)) {
                        for (const thirdObj of secondObj.children) {
                            const { value } = thirdObj;
                            !Betools.tools.isNull(value) ? list.push(value) : null;
                        }
                    }
                }
            }
        }
    }
    return list;
};

/**
 * @description 股权管理明细默认配置
 */
export const columns = {
    reward: {
        items: [{
                title: '分配性质',
                dataIndex: 'type',
                key: 'type',
                scopedSlots: { customRender: 'name' },
            },
            {
                title: '发放期间',
                dataIndex: 'period',
                key: 'period',
            },
            {
                title: '员工姓名',
                dataIndex: 'username',
                key: 'username',
                ellipsis: true,
            },
            {
                title: '员工OA',
                dataIndex: 'account',
                key: 'account',
                ellipsis: true,
            },
            {
                title: '所属单位',
                dataIndex: 'company',
                key: 'company',
                ellipsis: true,
            },
            {
                title: '所属部门',
                dataIndex: 'department',
                key: 'department',
                ellipsis: true,
            },
            {
                title: '员工职务',
                dataIndex: 'position',
                key: 'position',
                ellipsis: true,
            },
            {
                title: '分配金额',
                dataIndex: 'amount',
                key: 'amount',
                ellipsis: true,
            },
        ],
        wfcolumns: [{
            title: '流程顺序',
            dataIndex: 'key',
            key: 'key',
            ellipsis: true,
        }, {
            title: '审批人员',
            dataIndex: 'username',
            key: 'username',
            ellipsis: true,
        }, {
            title: '审批账户',
            dataIndex: 'userid',
            key: 'userid',
            ellipsis: true,
        }, {
            title: '所属单位',
            dataIndex: 'company',
            key: 'company',
            ellipsis: true,
        }, {
            title: '所属部门',
            dataIndex: 'department',
            key: 'department',
            ellipsis: true,
        }, {
            title: '审批职务',
            dataIndex: 'position',
            key: 'position',
            ellipsis: true,
        }, {
            title: '联系电话',
            dataIndex: 'mobile',
            key: 'mobile',
            ellipsis: true,
        }, ],
    }
}

/**
 * @description 领用物品说明
 */
export const objects = {
    officeObjects: [
        '笔记本',
        '签字笔（黑）',
        '签字笔（红）',
        '订书机',
        '订书针',
        '回形针',
        'U盘',
        '笔筒',
        '便利贴',
        '标签贴',
        '彩色便签',
        '鼠标（有线）',
        '鼠标垫',
        '鼠标（无线）',
        '插板',
        '电池（5号）',
        '电池（7号）',
        '剪刀',
        '胶棒',
        '胶水',
        '透明文件袋',
        '美工刀',
        '燕尾夹（大号）',
        '燕尾夹（中号）',
        '燕尾夹（小号）',
        '抽杆文件夹',
        '牛皮档案袋',
        '牛皮档案盒',
        '塑料档案盒',
        '双面胶',
        '透明胶带',
        '橡皮擦',
        '铅笔',
        '荧光笔',
        '文件夹',
        '资料册',
        '文件架',
        '文件盘',
        '印泥',
        '起钉器',
        '名片夹',
        '派通笔',
        '中性笔',
        '名片盒',
        '计算器',
        '圆珠笔（黑）',
        '圆珠笔（红）',
        '彩色卡纸',
    ],
    drugObjects: [
        '感冒灵(999)',
        '板蓝根',
        '创口贴',
        '碘伏',
        '阿莫西林',
        '和香正气',
        '金嗓子',
        '元和正胃片',
        '蒙脱石散',
        '感康',
        '散列通',
        '棉签纱布',
    ],
};



/**
 * @description 暴露查询API接口
 */
export const queryAPI = {
    autoSerialAPI: 'https://api.yunwisdom.club:30443/api/v2/mysql/serial/bs_seal_regist/serialid/id',
    tableSerialAPI: 'https://api.yunwisdom.club:30443/api/v2/mysql/serial/{table_name}/serialid/id',
    patchSerialAPI: 'https://api.yunwisdom.club:30443/api/v2/mysql/patchserial/bs_seal_regist/serialid/id',
}

/**
 * @description 表单验证说明
 */
export const compValidation = {
    seal: {
        message: {
            filename: '',
            count: '',
            dealDepart: '',
            dealManager: '',
            dealMail: '',
            signman: '',
            workno: '',
            sealtype: '',
            ordertype: '',
            approveType: '',
            mobile: '',
            username: '',
            contractId: '',
            sealman: '',
            front: '',
            archive: '',
            prefix: '',
            meal_account: '',
            message: '',
            company: '',
            finance: '',
            record: '',
        },
        valid: {
            filename: '请输入文件名称！',
            count: '请输入文件份数！',
            dealDepart: '请输入经办部门！',
            dealManager: '请输入经办人!',
            dealMail: '请输入经办人邮箱!',
            signman: '请输入签收人！',
            workno: '请输入流程编号！',
            sealtype: '请选择用印类型！',
            ordertype: '请选择用印顺序！',
            approveType: '请输入审批类型！',
            mobile: '请输入经办人电话!',
            username: '请输入经办人的OA账号!',
            contractId: '请输入合同编号！',
            sealman: '请输入印章管理员(盖印人)！',
            front: '请输入前台人员名称！',
            archive: '请输入归档人员名称！',
            prefix: '请输入合同对应的编号前缀！',
            meal_account: '请输入新员工的食堂账户！',
            message: '请印章管理员输入用印意见或备注说明！',
            company: '请输入用印公司名称！',
            finance: '请输入财务归档人员！',
            record: '请输入档案归档人员！',
        },
    },
    entryjob: {
        message: {
            username: '',
            department: '', //入职岗位
            position: '', //入职岗位
            picture: '', //员工照片
            computer: '', //是否需要电脑配置
            seat: '', //是否需要办公座椅
            drawer: '', //是否需要办公抽屉drawer
            other_equip: '', //是否需要其他办公配置
            notebook: '', //是否需要笔记本子
            manual: '', //是否需要入职手册
            writingtools: '', //是否需要签字笔/擦
            badge: '', //员工工牌
            othertools: '', //其他用品
            driving_license: '', //行驶证
            driver_license: '', //驾驶证
            idcard: '', //身份证号
            diploma: '', //学历编号
            bachelor: '', //学位编号
            join_time: '', //入职时间
            hr_name: '', //对接HR
            bank_card: '',
            mobile: '',
            meal_account: '',
        },
        valid: {
            username: '请输入您的员工姓名！',
            department: '请输入您的入职部门！', //入职部门
            position: '请输入您的入职岗位！', //入职岗位
            picture: '请上传您的一寸照片！', //员工照片
            computer: '请选择是否需要电脑配置！', //是否需要电脑配置
            seat: '请选择是否需要办公座椅！', //是否需要办公座椅
            drawer: '请选择是否是否需要办公抽屉！', //是否需要办公抽屉drawer
            other_equip: '如果您有其他的办公配置要求，请填写在此处！', //是否需要其他办公配置
            notebook: '请选择是否需要笔记/记事本等！', //是否需要笔记本子
            manual: '请选择是否需要入职手册！', //是否需要入职手册
            writingtools: '请选择是否需要签字笔/擦！', //是否需要签字笔/擦
            badge: '请选择是否需要制作员工工牌！', //员工工牌
            othertools: '请输入您的其他办公用品需求！', //其他用品
            driving_license: '请输入您的行驶证编号！', //行驶证
            driver_license: '请输入您的驾驶证编号！', //驾驶证
            idcard: '请输入您的身份证编号！', //身份证号
            diploma: '请输入您的学历证件编号！', //学历编号
            bachelor: '请输入您的学位证件编号！', //学位编号
            join_time: '请选择您的入职时间！', //入职时间
            hr_name: '请选择您的对接HR姓名！', //对接HR
            bank_card: '请输入您的工资银行卡号！', //
            mobile: '请输入您的电话号码！', //
            meal_account: '请输入新员工的食堂账户！', //
        },
    },
    goodsreceive: {
        message: {
            create_time: '',
            create_by: '',
            receive_time: '', //领用时间
            user_admin_name: '',
            name: '', //领用物品名称
            amount: '', //领用数量
            receive_name: '', //领用人员名称
            department: '', //领用部门名称
            remark: '', //备注说明
            type: '', //领用类别
            company: '', //单位名称
        },
        valid: {
            create_time: '请输入登记时间！',
            create_by: '请输入登记人员！',
            receive_time: '请输入领用时间！', //领用时间
            user_admin_name: '请输入物品领用管理员！',
            name: '请输入领用物品名称！', //领用物品名称
            amount: '请输入领用物品数量及单位！', //领用数量
            receive_name: '请输入领用人员姓名！', //领用人员名称
            department: '请输入领用人员所属部门！', //领用部门名称
            remark: '请输入领用备注说明！', //备注说明
            type: '请输入领用类别！', //领用类别
            company: '请输入领用人员所属单位/公司名称！', //单位名称
        }
    },
    borrowreceive: {
        message: {
            create_time: '',
            create_by: '',
            receive_time: '', //领用时间
            user_admin_name: '',
            name: '', //领用物品名称
            amount: '', //领用数量
            receive_name: '', //领用人员名称
            department: '', //领用部门名称
            remark: '', //备注说明
            type: '', //领用类别
            company: '', //单位名称
        },
        valid: {
            create_time: '请输入登记时间！',
            create_by: '请输入登记人员！',
            receive_time: '请输入物品借用时间！', //领用时间
            user_admin_name: '请输入物品借用管理员！',
            name: '请输入借用物品/设备名称！', //领用物品名称
            amount: '请输入借用物品/设备数量及单位！', //领用数量
            receive_name: '请输入借用人员姓名！', //领用人员名称
            department: '请输入借用人员所属部门！', //领用部门名称
            remark: '请输入物品借用备注说明！', //备注说明
            type: '请输入物品借用类别！', //领用类别
            company: '请输入借用人员所属单位/公司名称！', //单位名称
        }
    },
    lostproperty: {
        message: {
            lost_name: '', //领用物品名称
            lost_amount: '', //领用数量
            user_admin_name: '',
        },
        valid: {
            lost_name: '请输入物品名称！', //领用物品名称
            lost_amount: '请输入物品数量及单位！', //领用数量
            user_admin_name: '请输入失物招领处的物品管理员姓名！',
        }
    },
    visitorapply: {
        message: {
            time: '',
            visitor_name: '',
            visitor_company: '',
            visitor_mobile: '',
            visitor_position: '',
            visitor_name1: '',
            visitor_mobile1: '',
            visitor_name2: '',
            visitor_mobile2: '',
            visitor_name3: '',
            visitor_mobile3: '',
            visitor_name4: '',
            visitor_mobile4: '',
            visitor_name5: '',
            visitor_mobile5: '',
            visitor_name6: '',
            visitor_mobile6: '',
            visitor_name7: '',
            visitor_mobile7: '',
            visitor_name8: '',
            visitor_mobile8: '',
            visitor_name9: '',
            visitor_mobile9: '',
            visitor_name10: '',
            visitor_mobile10: '',
            visitor_name11: '',
            visitor_mobile11: '',
            visitor_name12: '',
            visitor_mobile12: '',
            visitor_name13: '',
            visitor_mobile13: '',
            visitor_name14: '',
            visitor_mobile14: '',
            visitor_name15: '',
            visitor_mobile15: '',
            visitor_name16: '',
            visitor_mobile16: '',
            visitor_name17: '',
            visitor_mobile17: '',
            visitor_name18: '',
            visitor_mobile18: '',
            visitor_name19: '',
            visitor_mobile19: '',
            visitor_name20: '',
            visitor_mobile20: '',
            employee: '',
            mobile: '',
            position: '',
            user_admin_name: '',
        },
        valid: {
            time: '请输入预约时间！',
            visitor_name: '请输入访客姓名！',
            visitor_company: '请输入访客单位名称！',
            visitor_mobile: '请输入访客电话！',
            visitor_position: '请输入访客职务！',
            visitor_name1: '请输入访客姓名！',
            visitor_mobile1: '请输入访客电话！',
            visitor_name2: '请输入访客姓名！',
            visitor_mobile2: '请输入访客电话！',
            visitor_name3: '请输入访客姓名！',
            visitor_mobile3: '请输入访客电话！',
            visitor_name4: '请输入访客姓名！',
            visitor_mobile4: '请输入访客电话！',
            visitor_name5: '请输入访客姓名！',
            visitor_mobile5: '请输入访客电话！',
            visitor_name6: '请输入访客姓名！',
            visitor_mobile6: '请输入访客电话！',
            visitor_name7: '请输入访客姓名！',
            visitor_mobile7: '请输入访客电话！',
            visitor_name8: '请输入访客姓名！',
            visitor_mobile8: '请输入访客电话！',
            visitor_name9: '请输入访客姓名！',
            visitor_mobile9: '请输入访客电话！',
            visitor_name10: '请输入访客姓名！',
            visitor_mobile10: '请输入访客电话！',
            visitor_name11: '请输入访客姓名！',
            visitor_mobile11: '请输入访客电话！',
            visitor_name12: '请输入访客姓名！',
            visitor_mobile12: '请输入访客电话！',
            visitor_name13: '请输入访客姓名！',
            visitor_mobile13: '请输入访客电话！',
            visitor_name14: '请输入访客姓名！',
            visitor_mobile14: '请输入访客电话！',
            visitor_name15: '请输入访客姓名！',
            visitor_mobile15: '请输入访客电话！',
            visitor_name16: '请输入访客姓名！',
            visitor_mobile16: '请输入访客电话！',
            visitor_name17: '请输入访客姓名！',
            visitor_mobile17: '请输入访客电话！',
            visitor_name18: '请输入访客姓名！',
            visitor_mobile18: '请输入访客电话！',
            visitor_name19: '请输入访客姓名！',
            visitor_mobile19: '请输入访客电话！',
            visitor_name20: '请输入访客姓名！',
            visitor_mobile20: '请输入访客电话！',
            employee: '请输入填报人姓名！',
            mobile: '请输入填报人电话！',
            position: '请输入填报人职务！',
            user_admin_name: '请输入客服接待！',
        },
    },
    legalapply: {
        message: {
            title: '',
            company: '',
            department: '',
            content: '',
            remark: '', //备注
            amount: '',
            reward_type: '',
            reward_name: '',
            reward_period: '',
            hr_name: '',
            files: '',
            apply_realname: '',
        },
        valid: {
            title: '请输入案件审批的标题！',
            company: '请输入申请人员的所在公司！',
            department: '请输入申请人员的所在部门！',
            content: '请输入案件审批流程的申请事由！',
            remark: '请输入备注信息！', //备注
            amount: '请输入本次案件审批的单项奖金总额！',
            reward_type: '请输入股权管理类型！',
            reward_name: '请输入股权管理名称！',
            reward_period: '请输入股权管理所属周期！',
            hr_name: '请输入负责薪资管理的人力经理！',
            files: '请上传股权管理明细的Excel文档！',
            apply_realname: '请输入申请人姓名！',
        }
    },
    firmapply: {
        message: {
            title: '',
            create_by: '',
            in_zone: '',
            firm_name: '',
            in_time: '',
            tags: '',
            plate: '',
            establish_time: '',
            address: '',
            phone: '',
            scale: '',
            brief: '',
            firm_count: '',
            team_brief: '',
            fee: '',
            major_fee: '',
            common_fee: '',
            diligence_fee: '',
            notice_fee: '',
            penal_fee: '',
            coop_flag: '',
            out_flag: '',
        },
        valid: {
            title: '请输入流程标题！',
            create_by: '请输入填报人员！',
            in_zone: '请输入所属区域！',
            firm_name: '请输入律所名称！',
            in_time: '请选择入库时间！',
            tags: '请选择律所业务标签！',
            plate: '请选择律所业务板块！',
            establish_time: '请输入成立日期！',
            address: '请输入律所所在地址！',
            phone: '请输入律所联系电话！',
            scale: '请选择律所规模大小！',
            brief: '请输入律所简介！',
            firm_count: '请输入律所服务团队人数！',
            team_brief: '请输入律所服务团队简介！',
            fee: '请输入律所常务法律费用！',
            major_fee: '请输入律所重大诉讼费用！',
            common_fee: '请输入律所一般诉讼费用！',
            diligence_fee: '请输入律所尽调专项费用！',
            notice_fee: '',
            penal_fee: '',
            coop_flag: '',
            out_flag: '',
        }
    }
}

/**
 * @param {*} 普通用户 (扫码用户)
 */
export const commonUserInfo = { username: 'common', realname: '', main_department: '', department: { name: '' }, parent_company: { name: '' }, };

/**
 * @description 左侧菜单列表
 */
export function getPaneflows(that) {
    return [{
            id: 100,
            name: "我的知会",
            ename: "myrewardlist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/liebiao_jy.png`,
            href: "/account/myrewardlist",
            description: "查看我的案件审批知会流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '待审批', '审批中', '已完成', '已驳回'],
            dataSource: [],
            click: () => {
                that.panename = 'myrewardlist';
            },
        }, {
            id: 200,
            name: "我的待办",
            ename: "mytodolist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/time_00.png`,
            href: "/account/mytodolist",
            description: "查看待处理的案件审批流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '待审批', '知会我'],
            dataSource: [],
            click: () => {
                that.panename = 'mytodolist';
            },
        },
        {
            id: 300,
            name: "我的已办",
            ename: "mydonelist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/home_00.png`,
            href: "/account/mydonelist",
            description: "查看已处理的案件审批流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '我发起', '已审批', '已驳回', '知会我'],
            dataSource: [],
            click: () => {
                that.panename = 'mydonelist';
            },
        },
        {
            id: 400,
            name: "我的申请",
            ename: "myapplylist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/hire.png`,
            href: "/account/myapplylist",
            description: "查看我发起的案件审批流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '待审批', '审批中', '已完成', '已驳回'],
            dataSource: [],
            click: () => {
                that.panename = 'myapplylist';
            },
        },
    ];
}