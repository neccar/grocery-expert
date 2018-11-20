import { EventEmitter } from "events";
import * as httpMocks from "node-mocks-http";
import * as groceryListsController from "./grocerylist.controller";
import * as grocerylistModel from "./grocerylist.model";

jest.mock("./grocerylist.model.js");

describe("get /grocerylist", () => {
  const modelResult = [{ id: 1, title: "item 1" }, { id: 2, title: "item 2" }];

  let req, res;
  beforeEach(() => {
    req = httpMocks.createRequest({
      method: "GET",
      url: "api/grocerylists"
    });
    grocerylistModel.getAll.mockResolvedValue(modelResult);
  });

  res = httpMocks.createResponse({ eventEmitter: EventEmitter });
  res.on("end", () => {
    expect(JSON.parse(res._getData())).toEqual(modelResult);
  });

  test("should return all grocery lists", async () => {
    await groceryListsController.get(req, res, () => {});
    expect(grocerylistModel.getAll).toBeCalled();
  });
});

describe("get /grocerylist/2", () => {
  const modelResult = [{ id: 2, title: "item 2" }];

  let req, res;
  beforeEach(() => {
    req = httpMocks.createRequest({
      method: "GET",
      url: "api/grocerylists",
      params: { id: 2 }
    });
    grocerylistModel.get.mockResolvedValue(modelResult);
  });

  res = httpMocks.createResponse({ eventEmitter: EventEmitter });
  res.on("end", () => {
    expect(JSON.parse(res._getData())).toEqual(modelResult);
  });

  test("should return all grocery lists", async () => {
    await groceryListsController.get(req, res, () => {});
    expect(grocerylistModel.get).toBeCalled();
  });
});

describe("post /grocerylist", () => {
  const modelResult = [{ id: 5, title: "new grocery list" }];

  let req, res;
  beforeEach(() => {
    req = httpMocks.createRequest({
      method: "POST",
      url: "api/grocerylists",
      body: { title: "new grocery list" }
    });
    grocerylistModel.add.mockResolvedValue(modelResult);
  });

  res = httpMocks.createResponse({ eventEmitter: EventEmitter });
  res.on("end", () => {
    expect(JSON.parse(res._getData())).toEqual(modelResult);
  });

  test("should return all grocery lists", async () => {
    await groceryListsController.post(req, res, () => {});
    expect(grocerylistModel.add).toBeCalled();
  });
});
