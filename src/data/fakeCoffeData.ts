export interface CoffeeAPI{
    id: number;
    name: string;
    types: string[];
    description: string;
    price: number;
    stock: number;
    image: string;
}

export const coffees: CoffeeAPI[] = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        types: ['tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee.svg'
    },
    {
        id: 2,
        name: 'Expresso Americano',
        types: ['tradicional'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-1.svg'
    },
    {
        id: 3,
        types: ['tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-2.svg'
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        types: ['tradicional', 'gelado'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-3.svg'
    },
    {
        id: 5,
        name: 'Café com Leite',
        types: ['tradicional', 'com leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-4.svg'
    },
    {
        id: 6,
        name: 'Latte',
        types: ['tradicional', 'com leite'],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-5.svg'
    },
    {
        id: 7,
        name: 'Capuccino',
        types: ['tradicional', 'com leite'],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-6.svg'
    },
    {
        id: 8,
        name: 'Macchiato',
        types: ['tradicional', 'com leite'],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-7.svg'
    },
    {
        id: 9,
        name: 'Mocaccino',
        types: ['tradicional', 'com leite'],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-8.svg'
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        types: ['especial', 'com leite'],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-9.svg'
    },
    {
        id: 11,
        name: 'Cubano',
        types: ['especial','alcoólico', 'gelado'],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-10.svg'
    },
    {
        id: 12,
        name: 'Havaiano',
        types: ['especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-11.svg'
    },
    {
        id: 13,
        name: 'Árabe',
        types: ['especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-12.svg'
    },
    {
        id: 14,
        name: 'Irlandês',
        types: ['especial','alcoólico'],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        stock: 15,
        image: '/src/assets/Coffee-13.svg'
    }
]