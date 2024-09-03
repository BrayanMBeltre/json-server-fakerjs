import { faker } from "@faker-js/faker";

const generateProducts = () => {
  return Array.from({ length: 10 }, () => ({
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  }));
};

const generateCards = () => {
  return Array.from({ length: 10 }, () => ({
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  }));
};

export default () => {
  return {
    products: generateProducts(),
    cards: generateCards(),
  };
};
