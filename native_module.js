 const addNumbersNode = (num, count) => {
 let result = 0;
 for (let i = 0; i < count; i++) {
   result = result + num;
 }
 return result;
};

module.exports = addNumbersNode;