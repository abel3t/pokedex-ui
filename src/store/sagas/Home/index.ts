import { call, put, takeLatest } from 'redux-saga/effects'

import { getPokemons } from '../../../services/pokemons'
import { homeActions, homeSelectors, homeTypes } from '../../reducers'

const fetchPokemons = function* () {
  try {
    let skip: number = 1, limit: number = 10
    const res = yield call(getPokemons, skip, limit)
    if (res) {
      console.log('res', res)
      yield put(homeActions.getPokemonsSuccess({
        pokemons: [...res],
        page: 1
      }))
    } else {
      yield put(homeActions.getPokemonsError(res?.error))
    }
  } catch(error) {
    yield put(homeActions.getPokemonsError(error?.message))
  }
}

const watchers = function*() {
  yield takeLatest(homeTypes.GET_POKEMONS, fetchPokemons)
}

export default [watchers()]