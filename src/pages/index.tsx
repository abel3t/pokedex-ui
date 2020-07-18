import React, { Component } from 'react'
import Head from 'next/head'

import { connect } from 'react-redux'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Board from '../components/Home/Board'
import { home } from '../store/reducers'


class IndexPage extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  render() {
    if (!this.state.isLoaded) {
      console.log('Load Data')
      this.props.loadData()
      this.setState({
        ...this.state,
        isLoaded: true
      })
    }

    const data = this.props.pokemons ? this.props.pokemons : []
    console.log('data', data, data.length)
    return data.length && (
      <>
        <Layout>
          <Head>
            <title>Pokemon</title>
          </Head>
          <Container>
            <Board pokemons={data}/>
          </Container>
        </Layout>
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  let skip: number = 1, limit: number = 10;
  return {
    pokemons: home.selectors.getPokemons(state.Home, skip, limit)
  }
}

const mapDispatchToProps = {
  loadData: home.actions.getPokemons
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)