// @flow

const timeout = 10000

describe('A Hello World Component', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://localhost:8080/')
  }, timeout)

  // Pupeter integration test
  it('Should write "Hello World" on the page', async () => {
    const innerText = await page.evaluate(() => document.querySelector('h1').innerText)
    expect(innerText).toBe('Hello World')
  })

  afterAll(async () => {
    await page.close()
  })
})
