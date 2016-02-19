export default class Welcome {
  constructor(secret) {
    this.secret = secret;
  }

  getSecret() {
    return this.secret;
  }
}
