const BaseObject = require('./base');
const ProxyObject = require('./base').ProxyObject;

class resourcequotas extends BaseObject {
  constructor(options, name) {
    super(options);
    this.options = options;
    this.path = `${ options ? options.path : ''}/resourcequotas`;
    if (name) this.path = `${ this.path }/${ name }`;
  }


  get(optionsOrCb, cb) {
    super.get(optionsOrCb, cb);
  }
  put(optionsOrCb, cb) {
    super.put(optionsOrCb, cb);
  }
  post(optionsOrCb, cb) {
    super.post(optionsOrCb, cb);
  }
  delete(optionsOrCb, cb) {
    super.delete(optionsOrCb, cb);
  }
}

module.exports = resourcequotas;
