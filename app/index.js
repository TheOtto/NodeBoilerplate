const RestifyServer = require('./core/server');
const Controllers = require('./core/controllers');
const Routes = require('./core/routes');

const server = RestifyServer();
Routes(server, Controllers());

const port = process.env.PORT || 8080;
// start listening
server.listen(port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
