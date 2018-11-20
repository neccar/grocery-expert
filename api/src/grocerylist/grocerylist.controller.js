import * as groceryListModel from "./grocerylist.model";
import httpStatus from "http-status";

export async function get(req, res, next) {
  if (req.params.id) {
    return await getSingleGroceryList(req, res);
  }
  const allGroceryLists = await groceryListModel.getAll();
  res.json(allGroceryLists);
}

async function getSingleGroceryList(req, res) {
  const groceryList = await groceryListModel.get(req.params.id);
  if (groceryList === undefined) {
    res.status(httpStatus.NOT_FOUND).send();
  } else {
    res.json(groceryList);
  }
}

export async function post(req, res, next) {
  if (req.body.title === undefined) {
    //add Joi for schema validation
    res.status(httpStatus.BAD_REQUEST).send();
    return;
  }

  const savedGroceryList = await groceryListModel.add(req.body.title);
  res.status(httpStatus.CREATED).json(savedGroceryList);
}
