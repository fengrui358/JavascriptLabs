import { check } from '../utils/auth';

//权限指令，优点是使用简单，缺点是只只会在开始渲染时执行一次，无法后期动态变更

function install(Vue, options = {}) {
    Vue.directive(options.name || 'auth', {
        inserted(el, binding) {
            if (!check(binding.value)) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        }
    })
}

export default { install };