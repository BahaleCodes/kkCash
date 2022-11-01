import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const bankModule = {
  namespace: true,
	state,
	actions,
	mutations,
	getters
};

export default bankModule;