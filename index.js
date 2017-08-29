const Koa = require('koa');
const serve = require('koa-serve-static');
let app = new Koa();

require('./router.js')(app);
app.use(serve('./public'));

app.listen(4444, function () {
  console.log('buildPlans');
});