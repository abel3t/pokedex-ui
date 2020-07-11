import * as React from 'react'
import { getPokemon } from '../../services/pokemons'
import { Card } from 'antd';

export default class PokemonDetail extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
  }

  state = {
    pokemon: {
      name: '',
      src: ''
    },
    isLoaded: false
  }

  fetchData() {
    if (this.props.id) {
      getPokemon(this.props.id)
        .then(data => {
          this.setState({
            pokemon: data,
            isLoaded: true
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  render() {
    if (!this.state.isLoaded) {
      this.fetchData()
    }
    return this.state.isLoaded && (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="" src={this.state.pokemon.src} />}
      >
      </Card>
    )
  }
}
