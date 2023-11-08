export const capitalize = (text) => {
  try {
    const [firstSymbol = '', ...restSymbols] = text;
    return `${firstSymbol.toUpperCase()}`;
  } catch(error) {
    console.log('error: ', error)
  }
  
};


console.log(capitalize('hello'));
console.log(capitalize('how are you'));


