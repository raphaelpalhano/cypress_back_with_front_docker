class UserService {
  #value = 1;

  getUserInfos = () => {
    console.log('Camada de serviço exemplo', this.#value);
  };
}

module.exports = UserService;
