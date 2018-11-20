import React from "react";
import renderer from "react-test-renderer";
import { GroceryListCard, GroceryListItem } from ".";

test("Renders GroceryListCard", () => {
  const groceryList = {
    id: 1,
    title: "Saturday Grocery List",
    items: [
      {
        id: 1,
        text: "1 kg tomato",
        isPurchased: false
      },
      {
        id: 2,
        text: "2 kg potato",
        isPurchased: true
      }
    ]
  };
  const component = renderer.create(
    <GroceryListCard groceryList={groceryList} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders GroceryListItem", () => {
  const groceryListItem = {
    id: 1,
    text: "1 kg tomato",
    isPurchased: false
  };
  const component = renderer.create(<GroceryListItem item={groceryListItem} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
