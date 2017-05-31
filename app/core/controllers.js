const Fs = require('fs');

module.exports = () => {
  /*
   * Automatically introduce controllers
   */
  const folderName = process.argv[1].includes('app/index') ? '/app' : '/dist';
  const controllers = {};
  const controllersPath = `${process.cwd()}${folderName}/api/controllers`;

  Fs.readdirSync(controllersPath).forEach((file) => {
    if (file.indexOf('.js') !== -1) {
      /* eslint-disable global-require, import/no-dynamic-require */
      controllers[file.split('.')[0]] = require(`${controllersPath}/${file}`);
      /* eslint-enable global-require, import/no-dynamic-require */
    }
  });
  console.log(controllers);

  return controllers;
};
