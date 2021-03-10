import * as dotenv from 'dotenv'
dotenv.config()

export const testePayloads = function (
  name: string,
  test: string,
  url: string
): Record<string, unknown> {
  return {
    name,
    test,
    data: {
      url
    }
  }
}
