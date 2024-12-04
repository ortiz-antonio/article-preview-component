const viewports = require('../design-tokens/viewports.json');

/**
 * Takes an array of tokens and sends back and array of name
 * and rem values
 *
 * @param {array} tokens array of {name: string, min: number, max: number}
 * @returns {array} {name: string, value: string}
 */
const viewportToRem = tokens => {
  const rootSize = 16;

  return tokens.map(({name, value}) => {

    // Convert the px sizes to rems
    const size = value / rootSize;

    return {
      name,
      value: `${size}rem`
    };
  });
};

module.exports = viewportToRem;
