export class LoginLocator {
  static INPUT(campValue) {
    return `input[id="${campValue}"]`;
  }

  static BUTTON(value) {
    return `button[id=${value}]`;
  }

  static PRETEXT() {
    return 'body pre';
  }
}
