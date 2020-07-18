import { storage, firestore } from '../helpers/firebase';

export const getPokemon = async (id: number) => {
  return new Promise((resolve, reject) => {
    firestore.collection('pokemons').doc(`${id}`).get()
      .then(doc => {
        if (doc.exists) {
          resolve(doc.data())
        } else {
          resolve(null)
        }
      })
      .catch(error => {
        console.log(`Error Here ${error}`);
        reject(error)
      })
  })
}

export const getPokemons = async (skip: number, limit: number) => {
  const result = [];
  for (let i = skip; i < skip + limit; i++) {
    result.push(getPokemon(i +  1));
  }
  return Promise.all(result)
};