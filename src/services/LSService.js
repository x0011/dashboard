export default class LSService {
  name;

  LS = localStorage;

  constructor(valueName) {
    this.name = valueName;
    this.initLS();
  }

  getLS() {
    return JSON.parse(this.LS.getItem(this.name));
  }

  setLS(newLS) {
    localStorage.setItem(this.name, JSON.stringify(newLS));
  }

  initLS() {
    if (this.checkLS() === null) {
      this.LS.setItem(this.name, JSON.stringify({ data: [] }));
    }
  }

  // Проверяет наличие хранилища this.name
  checkLS() {
    return this.LS.getItem(this.name);
  }

  genKey() {
    return `${this.name}_${new Date().getTime()}`;
  }

  // Добавляет элемент в this.name.data
  addItem(value) {
    const LS = JSON.parse(this.checkLS());
    if (LS !== null) {
      const newValue = {
        title: value,
        key: this.genKey(),
      };
      LS.data.push(newValue);
      this.LS.setItem(this.name, JSON.stringify(LS));
    } else {
      this.initLS();
      LS.data.push(value);
      this.LS.setItem(this.name, JSON.stringify(LS));
    }
  }

  // Добавляет объект в data
  addCustomItem(obj) {
    const LS = JSON.parse(this.checkLS());
    if (LS !== null) {
      const newValue = { ...obj };
      LS.data.push(newValue);
      this.LS.setItem(this.name, JSON.stringify(LS));
    } else {
      this.initLS();
      LS.data.push({ ...obj });
      this.LS.setItem(this.name, JSON.stringify(LS));
    }
  }

  edit(item, { ...newValues }) {
    const LS = JSON.parse(this.checkLS());
    const findElem = this.getItem(item);
    // if (findElem !== null) {
    //   findElem.
    // }
  }

  editItem(itemKey, value) {
    const LS = JSON.parse(this.checkLS());
    if (LS !== null) {
      const newArray = LS.data.map((item) => (
        item.key === itemKey
          ? {
            title: value,
            status: item.status,
            key: this.genKey(),
          }
          : { ...item }
      ));
      LS.data = newArray;
      this.LS.setItem(this.name, JSON.stringify(LS));
    }
  }

  deleteById(key) {
    let LS = this.checkLS();
    if (LS !== undefined) {
      LS = JSON.parse(this.LS.getItem(this.name));
      const newLS = LS.data.filter((item) => item.key !== key);
      LS.data = newLS;
      localStorage.setItem(this.name, JSON.stringify(LS));
      console.log(LS);
    }
  }

  test = [
    { title: 'Хуй', key: 'dfs+', status: false },
    { title: 'Хуй 2', key: 'df5s+', status: true },
    { title: 'Хуй 3', key: 'd_fs+', status: false },
  ];

  async setTest() {
    return JSON.parse(localStorage.getItem(this.name));
  }
}
