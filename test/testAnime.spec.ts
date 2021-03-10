import endpoints = require('../helper/endpoints.json')
import Http = require('../helper/http-methods')
import compassPayloads = require('../helper/payloads/teste')
import chai = require('chai')

describe('teste get 200', () => {
  it('Get metrics', async function () {
    const endpoint = endpoints['anime']
    const res = await Http.getMethod(endpoint)
    chai.expect(res.status).to.be.equal(200)
  })

  it('Erro test', async function () {
    const endpoint = endpoints['anime']
    const payload = compassPayloads.testePayloads('name', 'teste', 'url')
    const res = await Http.postMethod(endpoint, payload)
    chai.expect(res.status).to.be.equal(200)
  })
})
