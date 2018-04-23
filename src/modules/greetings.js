/**
 * Says hello
 * @param {String} str
 * @return {String}
 */
const sayHello = function(str) {
  str = str || 'Hello!';
  return `Say ${str}`;
};

module.exports = { sayHello };
