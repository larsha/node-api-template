import router from 'koa-simple-router'

export default () => {
  return router(r => {
    r.get('/', (ctx, next) => {
      ctx.body = {
        message: 'Hello world!'
      }
    })

    r.get('/user', (ctx, next) => {
      ctx.body = {
        message: 'User!'
      }
    })
  })
}
