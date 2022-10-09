import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'PieChart',
    'AnnularChart',
    'BarChart',
    'BubbleChart',
    'MeterChart',
    'Earth',
    'Table',
    'Div'
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
