import faker from 'faker-br';

export class FactoryUsers {
  static getUser(type) {
    const fisrtName = faker.name.firstName().toUpperCase();
    const secondName = faker.name.lastName().toUpperCase();
    const fullName = `${fisrtName} ${secondName}`;
    switch (type) {
    case 'CPF_validValuesMandatory':
      return {
        displayName: fullName,
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: faker.internet.password(),
        },
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: faker.br.cpf(),
          },
        ],
      };
    case 'CNPJ_validValuesMandatory':
      return {
        displayName: fullName,
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: faker.internet.password(),
        },
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: faker.br.CNPJ(),
          },
        ],
      };
    case 'allValuesValid':
      return {
        accountEnabled: true,
        city: faker.address.city(),
        country: faker.address.country(),
        department: faker.commerce.department(),
        displayName: fullName,
        givenName: fisrtName,
        jobTitle: faker.name.jobTitle(),
        mailNickname: `${fisrtName}D`,
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: faker.internet.password(),
          forceChangePasswordNextSignIn: false,
        },
        officeLocation: faker.address.streetAddress(),
        postalCode: faker.address.zipCode(),
        preferredLanguage: 'pt-BR',
        state: faker.address.stateAbbr(),
        streetAddress: faker.address.streetAddress(),
        surname: secondName,
        mobilePhone: faker.phone.phoneNumber(),
        usageLocation: 'BR',
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: faker.br.cpf(),
          },
        ],
      };
    case 'invalidPassword':
      return {
        displayName: fullName,
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: '123abcd',
        },
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: faker.br.cpf(),
          },
        ],
      };
    case 'withoutCPF':
      return {
        displayName: fullName,
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: faker.internet.password(),
        },
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: '',
          },
        ],
      };
    case 'withoutPassword':
      return {
        displayName: fullName,
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: '',
        },
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: faker.br.cpf(),
          },
        ],
      };
    case 'withoutDisplayName':
      return {
        displayName: '',
        passwordPolicies: 'DisablePasswordExpiration',
        passwordProfile: {
          password: faker.internet.password(),
        },
        identities: [
          {
            signinType: 'userName',
            issuer: 'iguateste.onmicrosoft.com',
            issuerAssignedId: faker.br.cpf(),
          },
        ],
      };
    default:
      return { notfound: 'opcao de usuario nao existe!' };
    }
  }

  static getUserUpdate() {
    return {
      displayName: 'Usuario Teste',
      passwordPolicies: 'DisablePasswordExpiration',
      passwordProfile: {
        password: faker.internet.password(),
      },
      identities: [
        {
          signinType: 'userName',
          issuer: 'iguateste.onmicrosoft.com',
          issuerAssignedId: faker.br.cpf(),
        },
      ],
    };
  }
}
