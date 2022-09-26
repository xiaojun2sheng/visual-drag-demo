// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
    collapseName: '', // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
    linkage: {
        duration: 0,
        data: [ // 组件联动
            {
                id: '',
                label: '',
                event: '',
                style: [{ key: '', value: '' }],
            },
        ],
    },
}

// 编辑器左侧组件列表
const list = [
    {
        component: 'VText',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'wenben',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    // {
    //     component: 'VButton',
    //     label: '按钮',
    //     propValue: '按钮',
    //     icon: 'button',
    //     style: {
    //         width: 100,
    //         height: 34,
    //         borderWidth: 1,
    //         borderColor: '',
    //         borderRadius: '',
    //         fontSize: '',
    //         fontWeight: 400,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: '',
    //         color: '',
    //         backgroundColor: '',
    //     },
    // },
    // {
    //     component: 'RectShape',
    //     label: '矩形',
    //     propValue: '&nbsp;',
    //     icon: 'juxing',
    //     style: {
    //         width: 200,
    //         height: 200,
    //         fontSize: '',
    //         fontWeight: 400,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: 'center',
    //         color: '',
    //         borderColor: '#000',
    //         borderWidth: 1,
    //         backgroundColor: '',
    //         borderStyle: 'solid',
    //         borderRadius: '',
    //         verticalAlign: 'middle',
    //     },
    // },
    // {
    //     component: 'LineShape',
    //     label: '直线',
    //     propValue: '',
    //     icon: 'zhixian',
    //     style: {
    //         width: 200,
    //         height: 2,
    //         backgroundColor: '#000',
    //     },
    // },
    // {
    //     component: 'CircleShape',
    //     label: '圆形',
    //     propValue: '&nbsp;',
    //     icon: '24gl-circle',
    //     style: {
    //         width: 200,
    //         height: 200,
    //         fontSize: '',
    //         fontWeight: 400,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: 'center',
    //         color: '',
    //         borderColor: '#000',
    //         borderWidth: 1,
    //         backgroundColor: '',
    //         borderStyle: 'solid',
    //         borderRadius: '',
    //         verticalAlign: 'middle',
    //     },
    // },
    // {
    //     component: 'SVGStar',
    //     label: '星形',
    //     icon: 'kongwujiaoxing',
    //     propValue: '',
    //     style: {
    //         width: 80,
    //         height: 80,
    //         fontSize: '',
    //         fontWeight: 400,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: 'center',
    //         color: '',
    //         borderColor: '#000',
    //         backgroundColor: 'rgba(255, 255, 255, 1)',
    //     },
    // },
    // {
    //     component: 'SVGTriangle',
    //     label: '三角形',
    //     icon: 'xingzhuang-sanjiaoxing',
    //     propValue: '',
    //     style: {
    //         width: 80,
    //         height: 80,
    //         fontSize: '',
    //         fontWeight: 400,
    //         lineHeight: '',
    //         letterSpacing: 0,
    //         textAlign: 'center',
    //         color: '',
    //         borderColor: '#000',
    //         backgroundColor: 'rgba(255, 255, 255, 1)',
    //     },
    // },
    // {
    //     component: 'VTable',
    //     label: '表格',
    //     icon: 'biaoge',
    //     propValue: {
    //         data: [
    //             ['表头1', '表头2', '表头3'],
    //             ['内容1', '内容2', '内容3'],
    //         ],
    //         stripe: true,
    //         thBold: true,
    //     },
    //     request: {
    //         method: 'GET',
    //         data: [],
    //         url: '',
    //         series: false,
    //         time: 1000,
    //         paramType: '', // string object array
    //         requestCount: 0, // 请求次数限制，0 为无限
    //     },
    //     style: {
    //         width: 600,
    //         height: 200,
    //         fontSize: '',
    //         fontWeight: 400,
    //         textAlign: 'center',
    //         color: '',
    //         backgroundColor: 'rgba(255, 255, 255, 1)',
    //     },
    // },
    // {
    //     component: 'Picture',
    //     label: '图片',
    //     icon: 'tupian',
    //     propValue: {
    //         url: require('@/assets/title.jpg'),
    //         flip: {
    //             horizontal: false,
    //             vertical: false,
    //         },
    //     },
    //     style: {
    //         width: 300,
    //         height: 200,
    //         borderRadius: '',
    //     },
    // },
    {
        component: 'VDemo1',
        label: 'VDemo1',
        propValue: 'VDemo1',
        icon: 'icona-Union7',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo2',
        label: 'VDemo2',
        propValue: 'VDemo2',
        icon: 'home',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo3',
        label: 'VDemo3',
        propValue: 'VDemo3',
        icon: 'wenben',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo4',
        label: 'VDemo4',
        propValue: 'VDemo4',
        icon: 'wenben',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VDemo5',
        label: 'VDemo5',
        propValue: 'VDemo5',
        icon: 'wenben',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
