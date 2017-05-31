const restify = require('restify');

module.exports = () => {
  /*
   * Define server before and after settings in here
   * This will be the place that we are going to
   * introduce to logging
   */
  const server = restify.createServer({
    name: 'Tofu'
  });

  server.use(restify.queryParser());
  server.use(restify.bodyParser());
  server.use(restify.CORS());

  return server;
};
