class LocalStorage {
static getItem() {
  let items;

  if(localStorage.getItem('items') === null) {
    items = [];

  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }

  return items;

}

static addItem(item) {
  const items = LocalStorage.getItem();

  items.push(item);

  localStorage.setItem('items', JSON.stringify(items));

}

static removeItem() {

}
}

export default LocalStorage;