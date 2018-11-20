import db from "../bootstrap/db";

export async function getAll() {
  return db.groceryList;
}
 
export async function get(id) {
  var groceryList = db.groceryList.find(gll => {
    return gll.id == id;
  });

  return groceryList;
}

export async function add(title) {
  const newGroceryList = { id: db.groceryList.length + 1, title: title };
  db.groceryList.push(newGroceryList);
  return newGroceryList;
}

export async function addItem(groceryListId, itemText) {
  const groceryList = this.get(id);
  groceryList.items.push({
    id: groceryList.items.length + 1,
    text: itemText,
    isPurchased: false
  });
  return groceryList;
}
