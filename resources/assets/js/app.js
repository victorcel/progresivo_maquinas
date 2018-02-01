/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
/*import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters)*/
import {Money} from 'v-money'
const app = new Vue({
    el: '#app',
    components: {Money},
    data() {
        return {
            msg: 'hola',
            now: '',
            keeps: '',
            number: 0,
            animatedNumber: 0,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: '$ ',
                suffix: '',
                precision: 0,
                masked: true
            }
        };
    },
    created() {
        this.getKeeps();
        this.prueba();
    },
    watch: {
        number: function(newValue, oldValue) {
            var vm = this
            var animationFrame
            function animate (time) {
                TWEEN.update(time)
                animationFrame = requestAnimationFrame(animate)
            }
            new TWEEN.Tween({ tweeningNumber: oldValue })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: newValue },1800000 )//1800000
                .onUpdate(function () {
                    vm.animatedNumber = this.tweeningNumber.toFixed(0)
                })
                .onComplete(function () {
                    cancelAnimationFrame(animationFrame)
                })
                .start()
            animationFrame = requestAnimationFrame(animate)
        }
    },
    methods: {
        getKeeps: function () {
            var urlKeeps = 'report';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data;
            });

        },
        prueba: function () {
            return setInterval(() => {
                //  this.now = this.keeps;
                this.getKeeps();
                this.number=this.keeps[0].resulta;
                //  this.now=this.keeps.resulta;
                // console.log('updating ticker')
            }, 1000);
        }
    }

    /*    ready() {
            setInterval(() => {
                this.now = this.now + 1
                console.log('updating ticker')
            }, 500);
        }*/
});
