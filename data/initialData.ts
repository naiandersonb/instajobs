import { v4 as uuidv4 } from 'uuid';
import { Enterprise } from '../src/types/Enterprise';

export const avatars = [
  {
    id: 1,
    name: 'Dan Abrahmov',
    src: 'https://bit.ly/dan-abramov',
  },
  {
    id: 2,
    name: 'Kola Tioluwani',
    src: 'https://bit.ly/tioluwani-kolawole',
  },
  {
    id: 3,
    name: 'Kent Dodds',
    src: 'https://bit.ly/kent-c-dodds',
  },
  {
    id: 4,
    name: 'Ryan Florence',
    src: 'https://bit.ly/ryan-florence',
  },
  {
    id: 5,
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    id: 6,
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    id: 7,
    name: 'Segun Adebayo',
    src: 'https://bit.ly/sage-adebayo',
  },
  {
    id: 8,
    name: 'Kola Tioluwani',
    src: 'https://bit.ly/tioluwani-kolawole',
  },
  {
    id: 9,
    name: 'Kent Dodds',
    src: 'https://bit.ly/kent-c-dodds',
  },
  {
    id: 10,
    name: 'Ryan Florence',
    src: 'https://bit.ly/ryan-florence',
  },
  {
    id: 11,
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    id: 12,
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    id: 13,
    name: 'Segun Adebayo',
    src: 'https://bit.ly/sage-adebayo',
  },
];

export const enterprises: Enterprise[] = [
  {
    id: uuidv4(),
    name: 'keepcodign',
    occupationArea: 'Dev. web',
    url_img:
      'https://i.pinimg.com/564x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg',
  },
  {
    id: uuidv4(),
    name: 'SpaceX',
    occupationArea: 'Viagens espaciais',
    url_img:
      'https://i.pinimg.com/originals/6e/e3/77/6ee377802a0da8f2910d539178131e07.png',
  },
  {
    id: uuidv4(),
    name: 'Hotmart',
    occupationArea: 'Cursos online',
    url_img:
      'https://i.pinimg.com/564x/44/b9/83/44b9836bee87b6ceea544c287476f4ed.jpg',
  },
  {
    id: uuidv4(),
    name: 'Eduzz',
    occupationArea: 'cursos online',
    url_img:
      'https://i.pinimg.com/564x/65/89/e3/6589e38b8846c2a8e13a9aa30686122e.jpg',
  },
];
