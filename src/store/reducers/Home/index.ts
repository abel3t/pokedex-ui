import { createAction, handleActions } from 'redux-actions'
import * as R from 'ramda'

import { GET_POKEMONS, GET_POKEMONS_SUCCESS, GET_POKEMONS_ERROR } from './types'

const checkArray = (arr: Array<any>) => (R.isNil(arr) || R.isEmpty(arr) ? null : arr)

export const types = {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR
}

export const actions = {
  getPokemons: createAction(GET_POKEMONS),
  getPokemonsSuccess: createAction(GET_POKEMONS_SUCCESS),
  getPokemonsError: createAction(GET_POKEMONS_ERROR)
}

export const selectors = {
  getPokemons: (state: any, skip: number, limit: number) => {
    console.log('selector', state)
    return checkArray(state.pokemons)
  }
}

const initialState = {
  pokemons: [],
  page: 10
}

export const reducer = handleActions({
  [GET_POKEMONS_SUCCESS]: (state: any, action: any) => {
    const { pokemons = [], page = 1 } = action.payload
    return {
      ...state,
      pokemons,
      page
    }
  },
  [GET_POKEMONS_ERROR]: (state: any, action: any) => {
    console.log('ERROR HERE', state, action)
    return state
  }
}, initialState)

export default reducer