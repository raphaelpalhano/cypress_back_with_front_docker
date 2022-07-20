declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * @CommandGeneric
       * @requestWithoutBody
       * @method: get,delete,update
       * @param: (method,url)
       */
       requestWithoutBody(method: string, url: string): Chainable<any>
  
       /**
       * @CommandGeneric
       * @requestWithBody
       * @method: post,delete,patch,update
       * @param: (method,url,body)
       */
       requestWithBody(method: string, url: string, body: object): Chainable<any>

    }
}