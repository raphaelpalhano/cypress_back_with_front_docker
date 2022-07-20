import faker from 'faker-br';

export class Factory {
  static getUserToLogin(loginType) {
    switch (loginType) {
    case 'CNPJ_valid':
      return {
        user: Cypress.env('USER_CNPJ'),
        password: Cypress.env('PASSWORD_TEST2'),
      };
    case 'CPF_valid':
      return {
        user: Cypress.env('USER_CPF'),
        password: Cypress.env('PASSWORD_TEST1'),
      };
    case 'empty':
      return {
        email: '',
        password: '',
      };
    case 'CPF_invalid':
      return {
        email: faker.br.cpf(),
        password: faker.internet.password(),
      };
    case 'CNPJ_invalid':
      return {
        email: faker.br.cnpj(),
        password: faker.internet.password(),
      };
    default:
      return { notfound: 'O login não foi encontrado!' };
    }
  }

  static getUser(type) {
    switch (type) {
    case 'admin':
      return {
        nome: 'Fulano',
        email: Cypress.env('EMAIL'),
        password: Cypress.env('PASSWORD'),
        administrador: 'true',
      };
    case 'valid':
      return {
        nome: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: admin.toString(),
      };
    case 'invalid':
      return {
        nome: 'Fulano da Silva',
        email: 'beltrano@qa.com.br',
        password: 'teste',
        administrador: 'true',
      };

    default:
      return { notfound: 'O usuário não foi encontrado, verifique o tipo passado!' };
    }
  }
}
