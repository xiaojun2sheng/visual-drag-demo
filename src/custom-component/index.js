import Vue from 'vue'

const components = [
    // 'CircleShape',
    // 'VButton',
    // 'Group',
    // 'RectShape',
    // 'LineShape',
    // 'VTable',
    'Picture',
    'VText',
    'PieChart',
    'VDemo2',
    'VDemo3',
    'VDemo4',
    'VDemo5'
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
})

const svgs = [
    'SVGStar',
    'SVGTriangle',
]

svgs.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/svgs/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/svgs/${key}/Attr`))
})
