import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PokemonDetail from '../../components/Detail';

export default function PokemonCard() {
  const route = useRouter();
  const { id } = route.query;
  return (
    <Link href="/">
      <PokemonDetail id={id}/>
    </Link>
  );
}