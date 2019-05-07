const addon = require('./build/Release/addon');
const addNumbersNode = require("./native_module.js");
const addNumbersAddon = () => addon.addNumbers(3, 1000000000);


const addNumbers = (number, addingTimes) => {
 console.time('C++');
 console.log(addNumbersAddon(number, addingTimes));
 console.timeEnd('C++');

 console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

 console.time('JS');
 console.log(addNumbersNode(number, addingTimes));
 console.timeEnd('JS');
};

addNumbers(3, 1000000000);