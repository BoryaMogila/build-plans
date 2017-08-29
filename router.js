const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = `<html>
    <head>
    
    </head>
    <body>
        <canvas id="canvasInAPerfectWorld" width="490" height="220"></canvas>
        
        <script
          src="https://code.jquery.com/jquery-3.2.1.js"
          integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
          crossorigin="anonymous"></script>
          <script
          src="/client.js"></script>
    </body>
</html>`
});

module.exports = function (app){
  app
    .use(router.routes())
    .use(router.allowedMethods());
};