let db = {};
export async function initializeDatabase() {
  let groceryList = [
    {
      id: 1,
      title: "Saturday Grocery List",
      items: [
        { id: 1, text: "1 kg tomato", isPurchased: false },
        { id: 2, text: "2 kg potato", isPurchased: true }
      ]
    },
    {
      id: 2,
      title: "Sunday Grocery List",
      items: [
        { id: 1, text: "1 kg tomato", isPurchased: false },
        { id: 2, text: "2 kg potato", isPurchased: true }
      ]
    },
    {
      id: 3,
      title: "Monday Grocery List",
      items: [
        { id: 1, text: "1 kg tomato", isPurchased: false },
        { id: 2, text: "2 kg potato", isPurchased: true }
      ]
    }
  ];
  db.groceryList = groceryList;
}

export default db;
