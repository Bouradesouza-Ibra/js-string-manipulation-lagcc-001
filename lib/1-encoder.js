function encoder(message) {
  // change letters to numbers
  let encoded = message
    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0");

  // replace spaces with $
  encoded = encoded.replace(/ /g, "$");

  // reverse the string
  encoded = encoded.split("").reverse().join("");

  return encoded;
}

module.exports = encoder;