import * as React from 'react'
import { Card, Typography } from 'antd'
import Link from 'next/link'

type Props = {
  pokemon: any
}

export default function PokemonImage({pokemon}: Props) {
  return (
    <Link href={`/detail/${pokemon?.id}`}>
      <Card hoverable style={{width: 220}} cover={<img alt="" src={pokemon.src}/>}>
        <div>
          <Typography.Text strong style={{fontSize: 22}}>
            #{pokemon.number}
          </Typography.Text>
        </div>

        <Typography.Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>{pokemon.name}</Typography.Text>
        <div>
          {
            pokemon.types.map((type: any) => <div className={`${type} type`}>{type}</div>)
          }
        </div>
      </Card>
    </Link>
  )
}