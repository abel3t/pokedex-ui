import Container from '../components/Container'
import Layout from '../components/Layout'
import Board from '../components/Home/Board'
import Head from 'next/head'
import React, { Component } from 'react'


import { getPokemons } from '../services/pokemons'
import {useRouter} from "next/router";

export default class IndexPage extends Component<{}, any> {
  state = {
    pokemons: []
  }

  async componentDidMount() {
    this.setState({
      pokemons: await  getPokemons(0, 50)
    })
  }

  render() {
    return this.state.pokemons.length && (
      <>
        <Layout>
          <Head>
            <title>Pokemon</title>
          </Head>
          <Container>
            <Board pokemons={this.state.pokemons}/>
          </Container>
        </Layout>
      </>
    )
  }
}
