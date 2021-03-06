import Vue from "vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts";
import mapInit from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import moment from 'vue-moment'
import 'nprogress/nprogress.css'
import CountryFlag from 'vue-country-flag'
import JwPagination from 'jw-vue-pagination';





import App from "./App.vue";
import router from "./router";
import store from "./store";

mapInit(Highcharts);

Highcharts.maps["myMapName"] = mapData;

Vue.use(HighchartsVue);
Vue.use(moment)
Vue.component('country-flag', CountryFlag)
Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
