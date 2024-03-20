const crypto = require("crypto");

const saltRound = {
  prefix: "",
  suffix: "",
};

const _getHash = function (text, algorithm) {
  const hash = crypto.createHash(algorithm);
  hash.update(`${saltRound.prefix}${text}${saltRound.suffix}`);

  return hash.digest("hex");
};

class HASH {
  constructor(saltroundPre = "test", saltRoundSuf = "12345") {
    saltRound.prefix = saltroundPre;
    saltRound.suffix = saltRoundSuf;
  }

  salt(prefix = "", suffix = "") {
    saltRound.prefix = saltroundPre;
    saltRound.suffix = saltRoundSuf;
  }

  md5(text) {
    return _getHash(text, "md5");
  }

  sha1(text) {
    return _getHash(text, "sha1");
  }

  sha256(text) {
    return _getHash(text, "sha256");
  }

  sha224(text) {
    return _getHash(text, "sha224");
  }

  sha384(text) {
    return _getHash(text, "sha384");
  }

  sha512(text) {
    return _getHash(text, "sha512");
  }

  randomString(length = 32, encoding = "hex") {
    return crypto.randomBytes(length).toString(encoding);
  }
}

module.exports = new HASH();
