const reducerGenerator = require('./plop-templates/reduce/prompt.js')

module.exports=function (plop) {
    plop.setGenerator('reducer', reducerGenerator);
};