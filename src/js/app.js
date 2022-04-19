export default class Validator {
  static validateUsername(username) {
    const condition01 = /^[a-z][\w-]*[a-z]$/i.test(username);
    const condition02 = /\d{4,}/.test(username);
    return condition01 && !condition02;
  }
}
