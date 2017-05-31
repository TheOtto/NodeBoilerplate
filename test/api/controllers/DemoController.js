const DemoController = require('../../../app/api/controllers/DemoController');
const sinon = require('sinon');

describe('DemoController', () => {
  describe('helloWorld', () => {
    it('should say "hello <name>" to request containing "/<name>"', () => {
      const name = 'Thao';
      const res = { send: sinon.stub() };
      const request = {
        params: { name }
      };
      const next = sinon.stub();
      DemoController.helloWorld(request, res, next);
      sinon.assert.calledOnce(res.send);
      sinon.assert.calledWith(res.send, `hello ${name}`);
      sinon.assert.calledOnce(next);
    });
  });
});
