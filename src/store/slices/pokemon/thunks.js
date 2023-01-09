import { setPokemons, startLoadingPokemons } from './pokemonSlice'
import { pokemonApi } from '../../../api/pokemonApi'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    const { data } = await pokemonApi.get(`/pokemon?offset=${page * 10}&limit=20`)

    dispatch(setPokemons({ page: page + 1, pokemons: data.results }))
  }
}
