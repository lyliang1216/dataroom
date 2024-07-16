// 组件声明，这个文件是否需要，是不是根据path直接可以解析出来对应的信息
const name = '分组柱状图'
export default {
  name: name,
  // 与index.vue 定义的name保持一致
  type: 'GroupBar',
  // 具体的实现组件，对应type值
  implType: 'GroupBar',
  img: require(`./${name}.png`),
  path: 'components/G2Plots/GroupBar',
  classify: 'bar'// 属于哪个大类，方便图层图标显示（图层不需要分类则可去掉）
}
