module.exports = (server, controllers) => {
// hello
  server.get(
    {
      path: '/hello/:name',
      version: ['1.0.0']
    },
    controllers.DemoController.helloWorld
  );
};
