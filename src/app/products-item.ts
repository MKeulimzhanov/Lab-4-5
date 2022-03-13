export interface Product {
  id: number;
  //image: string;
  name: string;
  description: string;
  price: number;
  //rating: string;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 13 Pro Max',
    description: 'A large phone with one of the best screens',
    price: 999,
    //rating: 10 / 10,
  },
  {
    id: 2,
    name: 'IPhone 13 Pro',
    description: 'A great phone with one of the best cameras',
    price: 10000,
    //rating: 9.5 / 10,
  },
  {
    id: 3,
    name: 'IPhone 12',
    description: '',
    price: 100,
    //rating: 8 / 10,
  },
  /*
  {
    id: 4,

    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 5,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 6,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 7,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 8,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 9,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 10,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  */
];
