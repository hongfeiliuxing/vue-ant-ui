import Vue from 'vue';
import App from './menu';
import Ant from 'src';

Vue.use(Ant);

new Vue({ // eslint-disable-line
  el: 'body',
  components: { App }
});