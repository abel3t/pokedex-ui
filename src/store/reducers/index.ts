import * as home from './Home'

const {
  types: homeTypes,
  actions: homeActions,
  selectors: homeSelectors,
  reducer: homeReducer
} = home

export {
  home
}

export {
  homeTypes
}

export {
  homeActions
}

export {
  homeSelectors
}

export default {
  Home: homeReducer
}

