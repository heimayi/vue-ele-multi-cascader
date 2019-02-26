import VueEleMultiCascader from './vue-ele-multi-cascader.vue';

/* istanbul ignore next */
VueEleMultiCascader.install = function(Vue) {
	  Vue.component(VueEleMultiCascader.name, VueEleMultiCascader);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default VueEleMultiCascader;
