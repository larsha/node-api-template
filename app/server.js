import Koa from 'koa'
import logger from 'koa-logger'
import parser from 'koa-bodyparser'
import routes from './routes'

const app = new Koa()

// Logs information
app.use(logger())

// Parses json body requests
app.use(parser())

// 500
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = { message: err.message }
  }
})

// Setup routes
app.use(routes())

// 404
app.use(async ctx => {
  ctx.body = {
    message: 'Move Along, Nothing to See Here!'
  }
})

app.listen(process.env.PORT)

export default app
