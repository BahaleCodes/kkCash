import Vue from 'vue';
import Vuex from 'vuex';

import addressModule from './address';
import bankModule from './bank';
import clientModule from './client';
import employmentModule from './address';
import financesModule from './finances';
import loanModule from './loan';

Vue.use(Vuex)

export default new Vuex.Store({
  namespace: true,
  modules: {
    address: addressModule,
    bank: bankModule,
    client: clientModule,
    employment: employmentModule,
    finances: financesModule,
    loan: loanModule
  }
})
