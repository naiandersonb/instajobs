import { v4 as uuidv4 } from 'uuid';
import { Enterprise } from '../src/types/Enterprise';

export const avatars = [
  {
    id: uuidv4(),
    name: 'Dan Abrahmov',
    avatar: 'https://bit.ly/dan-abramov',
  },
  {
    id: uuidv4(),
    name: 'Kola Tioluwani',
    avatar: 'https://bit.ly/tioluwani-kolawole',
  },
  {
    id: uuidv4(),
    name: 'Kent Dodds',
    avatar: 'https://bit.ly/kent-c-dodds',
  },
  {
    id: uuidv4(),
    name: 'Ryan Florence',
    avatar: 'https://bit.ly/ryan-florence',
  },
  {
    id: uuidv4(),
    name: 'Prosper Otemuyiwa',
    avatar: 'https://bit.ly/prosper-baba',
  },
  {
    id: uuidv4(),
    name: 'Christian Nwamba',
    avatar: 'https://bit.ly/code-beast',
  },
  {
    id: uuidv4(),
    name: 'Segun Adebayo',
    avatar: 'https://bit.ly/sage-adebayo',
  },
  {
    id: uuidv4(),
    name: 'Kola Tioluwani',
    avatar: 'https://bit.ly/tioluwani-kolawole',
  },
  {
    id: uuidv4(),
    name: 'Kent Dodds',
    avatar: 'https://bit.ly/kent-c-dodds',
  },
  {
    id: uuidv4(),
    name: 'Ryan Florence',
    src: 'https://bit.ly/ryan-florence',
  },
  {
    id: uuidv4(),
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    id: uuidv4(),
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    id: uuidv4(),
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

export const posts = [
  {
    id: uuidv4(),
    name: 'space dev',
    avatar: 'https://i.pinimg.com/564x/0f/93/79/0f93798d7dbd239809f07f7b00e9891e.jpg',
    post: {
      id: uuidv4(),
      img_url: '/images/posts/front-end-vaga.png',
      title: 'Seja um desenvolvedor front-end',
      desc: 'Somos uma startup em crescimento exponencial que revoluciona a forma como grandes empresas se relacionam com seus fornecedores. Temos muito orgulho de formar um time de profissionais com brilho nos olhos, com espírito de dono e que atuam em colaboração para cada vez mais gerar valor aos nossos clientes e parceiros.\nEstamos construindo uma plataforma no code / low code tornando nosso desafio muito mais interessante para todos os envolvidos.',
      hashtags: ['#devfrontend', '#desenvolvimentoweb', '#frontend', '#devfrontend', '#desenvolvimentoweb', '#frontend'],
      candidates: 15,
    },
  },

  {
    id: uuidv4(),
    name: 'Developers of Valhalla',
    avatar: 'https://i.pinimg.com/564x/69/7e/02/697e027ef719c174b369e18b738ea33e.jpg',
    post: {
      id: uuidv4(),
      img_url: '/images/posts/back-end-vaga.png',
      title: 'Seja um desenvolvedor back-end',
      desc: 'Você sempre sonhou em fazer parte de uma grande empresa?\nVocê é íntegro, tem conhecimento e energia?\nGosta da área de TECNOLOGIA DA INFORMAÇÃO?\nEntão venha fazer parte da equipe das empresas do Grupo Ideal Trends.\nTemos uma oportunidade de PROGRAMADOR NodeJS!\nEstamos buscando alguém que queira fazer a diferença e que se identifique com atividades relacionadas às pessoas de diferentes públicos.',
      hashtags: ['#devbackend', '#desenvolvimentocomnode', '#backend'],
      candidates: 5,
    },
  },
  {
    id: uuidv4(),
    name: 'Square Blue',
    avatar: 'https://i.pinimg.com/564x/b8/88/01/b888015c04268e4b3ac239b0c1e63a81.jpg',
    post: {
      id: uuidv4(),
      img_url: '/images/posts/full-stack-vaga.png',
      title: 'Seja um desenvolvedor full-stack',
      desc: 'Somos uma startup em crescimento exponencial que revoluciona a forma como grandes empresas se relacionam com seus fornecedores. Temos muito orgulho de formar um time de profissionais com brilho nos olhos, com espírito de dono e que atuam em colaboração para cada vez mais gerar valor aos nossos clientes e parceiros.\nEstamos construindo uma plataforma no code / low code tornando nosso desafio muito mais interessante para todos os envolvidos.',
      hashtags: ['#fullstack', '#desenvolvdorfullstack', '#frontend'],
      candidates: 0,
    },
  },
];
