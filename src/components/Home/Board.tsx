import * as React from 'react'
import { Row, Col } from 'antd'

import PokemonImage from './PokemonImage'

type Pokemon = {
  pokemon: any
}
type Props = {
  pokemons: Array<Pokemon>
}

export default function Board({pokemons}: Props) {
  let i = 0
  let limit = 4
  let result = [];
  while (i < pokemons.length - 3) {
    result.push(
      <Row key={`group-${i}`} gutter={[12, 12]}>
        <Col span={6} key={i} children={<PokemonImage pokemon={pokemons[i]} />} />
        <Col span={6} key={i+1} children={<PokemonImage pokemon={pokemons[i+1]} />}/>
        <Col span={6} key={i+2} children={<PokemonImage pokemon={pokemons[i+2]} />}/>
        <Col span={6} key={i+3} children={<PokemonImage pokemon={pokemons[i+3]} />}/>
      </Row>
    )
    i += limit
  }

  return (
    <>
      { result }
    </>
  )
}