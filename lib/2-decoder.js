function decoder(message) {
  // reverse back
  let decoded = message.split("").reverse().join("");

  // replace $ with spaces
  decoded = decoded.replace(/\$/g, " ");

  // change numbers back to letters
  decoded = decoded
    .replace(/4/g, "a")
    .replace(/3/g, "e")
    .replace(/1/g, "i")
    .replace(/0/g, "o");

  return decoded;
}

module.exports = decoder;