import LSService from './LSService';

export default class LSSettings extends LSService {
  name = 'settings';

  widgetName;

  constructor(widgetName, settings) {
    super('settings');
    this.initNew(widgetName, settings);
    this.widgetName = widgetName;
  }

  initLS() {
    if (this.checkLS() === null) {
      this.LS.setItem(this.name, JSON.stringify({ }));
    }
  }

  initNew(widgetName, { ...settings }) {
    const { LS } = {
      LS: this.getLS(),
    };
    if (LS[widgetName] === undefined) {
      LS[widgetName] = { ...settings };
      this.setLS(LS);
    }
  }

  getSettings() {
    const settings = this.getLS();
    return settings[this.widgetName];
  }

  set(fields) {
    const {
      item, allKeysEdit, missingFields, LS,
    } = {
      item: this.getSettings(),
      allKeysEdit: Object.keys(fields),
      missingFields: [],
      LS: this.getLS(),
    };
    if (item !== null) {
      for (let i = 0; i < allKeysEdit.length; i += 1) {
        if (item[allKeysEdit[i]] !== undefined) {
          item[allKeysEdit[i]] = fields[allKeysEdit[i]];
        } else {
          missingFields.push(allKeysEdit[i]);
        }
      }
      if (missingFields.length !== 0) {
        console.log(`Неизвестные поля: ${missingFields}`);
      }
    }
    LS[this.widgetName] = item;
    this.setLS(LS);
  }
}
