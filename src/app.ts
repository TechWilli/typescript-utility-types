console.log('Utility Types');

/*
As utility types nos ajudam a manipular com mais rapidez e variedade os tipos e interfaces criadas no nosso programa
São várias utilities, aqui coloco algumas mais usadas e que mais entendi ao estudar sobre
*/

interface Ticket {
  seat: string;
  session: [number, string]; // definindo uma tupla de numero e string para hora e sala
  movie: string
}

const ticketInfo: Readonly<Ticket> = {
  seat: 'L3',
  session: [10, 'Room 7'],
  movie: 'Spider-man: No way home'
}

// ticketInfo.seat = 'L5' /* Cannot assign to 'seat' because it is a read-only property */

interface Address {
  country: string;
  city: string;
  street: string;
  neighborhood: string;
  number: number;
  postalCode: string;
}

// criando uma interface para um User
interface User {
  name: string;
  lastName?: string;
  age: number;
  email: string;
  password: string;
  salary?: number;
  address?: Address;
}

/*
Criada a interface para um usuário em um sistema que tem área de acesso à conteúdos grátis e premium
*/

// Um usuário de acesso normal
const freeUserAccount: User = {
  name: 'Nathalia',
  lastName: 'Spaghetti',
  age: 22,
  email: 'nathalia.free@dev.com',
  password: '1234abcd'
}; 

// Agora digamos que um usuário usuário premium se cadastre e o sistema pede todas as informações por N motivos, coisa que apenas um usuário comum do sistema não precisaria informar
// o Type Required recebe o parametro que no caso é a interface criada e faz todas as keys nela obrigatórias para preenchimento, satisfazendo nosso caso de usuário premium
type PremiumUser = Required<User>

// OBS.: não é necessário criar um type para armazenar, podemos passar direto após a atribuição do tipo da variável sendo const premiumUserAccount: Required<User>
const premiumUserAccount: PremiumUser = {
  name: 'Carlinhos',
  lastName: 'Orange',
  age: 30,
  email: 'carlinhos.premium@dev.com',
  password: '5678efgh',
  salary: 10_000, // macete do TS que deixa vc separar os milhares com _
  address: {
    country: 'Brazil',
    city: 'São Paulo',
    street: 'Rua com asfalto',
    neighborhood: 'Bairro com calçada',
    number: 6_000,
    postalCode: '00000-00',
  }
};

// Agora queremos criar objetos apenas com o email e senha dos usuários
// neste caso podemos o usar o Pick para pegar apenas o que queremos do User
// a syntax é a <interface ou tipo, union das keys>
type UserCredentials = Pick<User, 'email' | 'password'>

const firstUserCredentials: UserCredentials = {
  email: 'abc@dev.com',
  password: 'abcpassword'
};

// Inverso ao Pick existe o Omit que retira keys que nao queremos por algum motivo
type OnlyCountryandCity = Omit<Address, 'street' | 'neighborhood' | 'number' | 'postalCode'>

const userCountryAndCity: OnlyCountryandCity = {
  country: 'Brazil',
  city: 'Curitiba'
}

// Agora uma situação onde criamos uma interface para um objeto de produto
interface Product {
  name: string;
  sku: string;
  price: number;
  colors: string[];
}

const productAllProps: Product = {
  name: 'Camiseta Blunt Collab One Piece',
  sku: 'tshirt-blunt-collab-one-piece',
  price: 19.99,
  colors: ['white', 'blue', 'black']
};

// Mas em certo ponto do desenvolvimento precisamos de um tipo em que o sku e cores são opcionais
// Usando a utility Partial fazemos todas as keys daquela interface OPCIONAL

// agora podemos criar sem erros os produtos apenas com name e preço
const productWithNamePrice: Partial<Product> = {
  name: 'produto X',
  price: 39.99
};

// Agora outra utility bem útil para definir a estrutura de objetos
// usando o type Record

// para ser a chave dos objetos
type AnimeList = 'Naruto' | 'Demon Slayer'

// para ser o value de cada chave
interface AnimeInfo {
  episode: number;
  description: string;
}

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
const animesPosts: Record<AnimeList, AnimeInfo[]> = {
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