"use strict";
console.log('Utility Types');
/*
Criada a interface para um usuário em um sistema que tem área de acesso à conteúdos grátis e premium
*/
// Um usuário de acesso normal
const freeUserAccount = {
    name: 'Nathalia',
    lastName: 'Spaghetti',
    age: 22,
    email: 'nathalia.free@dev.com',
    password: '1234abcd'
};
// OBS.: não é necessário criar um type para armazenar, podemos passar direto após a atribuição do tipo da variável
const premiumUserAccount = {
    name: 'Carlinhos',
    lastName: 'Orange',
    age: 30,
    email: 'carlinhos.premium@dev.com',
    password: '5678efgh',
    salary: 10000,
    address: {
        country: 'Brazil',
        city: 'São Paulo',
        street: 'Rua com asfalto',
        neighborhood: 'Bairro com calçada',
        number: 6000,
        postalCode: '00000-00',
    }
};
const firstUserCredentials = {
    email: 'abc@dev.com',
    password: 'abcpassword'
};
const userCountryAndCity = {
    country: 'Brazil',
    city: 'Curitiba'
};
const productAllProps = {
    name: 'Camiseta Blunt Collab One Piece',
    sku: 'tshirt-blunt-collab-one-piece',
    price: 19.99,
    colors: ['white', 'blue', 'black']
};
// Mas em certo ponto do desenvolvimento precisamos de um tipo em que o sku e cores são opcionais
// Usando a utility Partial fazemos todas as keys daquela interface opcional
// agora podemos criar sem erros os produtos apenas com name e preço
const productWithNamePrice = {
    name: 'produto X',
    price: 39.99
};
// criando um objeto com a seguinte estrutura:
/*
  {
    nome do anime: [
       {
         episode,
         description
       }
       ...
    ],
    nome do anime: [
       {
         episode,
         description
       }
       ...
    ]
  }
*/
// O type Record cria o shape do objeto exigindo as chaves do AnimeList que é um union, e o array exige os objetos de AnimeInfo
const animesPosts = {
    'Naruto': [
        {
            episode: 1,
            description: 'descrição do episodio 1 de Naruto'
        },
        {
            episode: 2,
            description: 'descrição do episodio 2 de Naruto'
        },
        {
            episode: 3,
            description: 'descrição do episodio 3 de Naruto',
        },
    ],
    'Demon Slayer': [
        {
            episode: 1,
            description: 'descrição do episodio 1 de Demon Slayer'
        },
        {
            episode: 2,
            description: 'descrição do episodio 2 de Demon Slayer'
        },
        {
            episode: 3,
            description: 'descrição do episodio 3 de Demon Slayer',
        },
    ]
};
console.log('animes', animesPosts);
