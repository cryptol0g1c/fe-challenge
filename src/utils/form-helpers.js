/**
 * Checks if the given string is a valid address.
 * @method validateAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
const validateAddress = (address) => (
  (/^(0x)?[0-9a-f]{40}$/).test(address.toLowerCase())
);

export { validateAddress };
