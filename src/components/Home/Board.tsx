import * as React from 'react';
import { Row, Col } from 'antd';

import PokemonImage from './PokemonImage';

type State = {
  pokemons: any
};

export default function Board({pokemons}: State) {
  let i = 0;
  const limit = 4;
  const result = [];
  while (i < pokemons.length - 3) {
    result.push(
      <Row key={`group-${i}`} gutter={[12, 12]}>
        <Col span={6} key={i} children={<PokemonImage pokemon={pokemons[i]} />} />
        <Col span={6} key={i+1} children={<PokemonImage pokemon={pokemons[i+1]} />}/>
        <Col span={6} key={i+2} children={<PokemonImage pokemon={pokemons[i+2]} />}/>
        <Col span={6} key={i+3} children={<PokemonImage pokemon={pokemons[i+3]} />}/>
      </Row>
    );
    i += limit;
  }

  return (
    <>
      { result }
    </>
  );
}