export interface Product {
  id: number;
  item: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    item: 1,
    name: 'IPhone 13 Pro Max',
    price: 1099,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    item: 2,
    name: 'IPhone 13 Pro',
    price: 999,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    item: 3,
    name: 'IPhone 13',
    price: 699,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
