import Koa from 'koa';
import router from 'koa-simple-router';

const app = new Koa();

// 500
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { message: err.message };
  }
});

// Routes
app.use(router(r => {
  r.get('/', (ctx, next) => {
    ctx.body = {
      message: 'Hello world!'
    };
  });

  r.get('/user', (ctx, next) => {
    ctx.body = {
      message: 'User!'
    };
  });
}));

// 404
app.use(async ctx => {
  ctx.body = {
    message: 'Move Along, Nothing to See Here!'
  };
});

app.listen(process.env.PORT || 3000);
