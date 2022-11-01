import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const loanModule = {
  namespace: true,
	state,
	actions,
	mutations,
	getters
};

export default loanModule;