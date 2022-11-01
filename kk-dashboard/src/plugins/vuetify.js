import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: 'blue',
                secondary: 'white',
                accent: '#333',
                error: 'red',
                info: '#17C8F2',
                success: '#54D887',
                warning: '#F2D917' 
            }
        },
    },
    icons: {
        iconfont: 'fa',
    },
});