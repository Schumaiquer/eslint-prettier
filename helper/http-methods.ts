import request = require('supertest')
import * as dotenv from 'dotenv'
dotenv.config()

class HttpMethods {
  static async getMethod(
    endpoint: string,
    host = process.env.HOST
  ): Promise<request.Response> {
    const req = await request(host).get(endpoint)
    return req
  }

  static async postMethod(
    endpoint: string,
    payload: Record<string, unknown>,
    host = process.env.HOST
  ): Promise<request.Response> {
    const req = await request(host).post(endpoint).send(payload)
    return req
  }
}
export = HttpMethods
