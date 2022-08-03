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

  static MESSAGE(text) {
    return `//div[@class="entry"]
    /descendant::div[@class="entry-item"]
    /descendant::div[@class="error itemLevel"]
    /descendant::p[contains(text(), "${text}")]`;
  }

  static GENERICMESSAGE(text) {
    return `//form[@id="localAccountForm"]/descendant::div[@class="error pageLevel"]/descendant::p[contains(text(), "${text}")]`;
  }
}
