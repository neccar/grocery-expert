import moxios from "moxios";
import axios from "axios";
import { fetchGroceryLists, fetchSingleGroceryList } from "."; 

describe("Fetch Grocery Lists", () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  const apiResponse = [
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

  it("fetches all grocery lists", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.url).toContain(`/api/grocerylists`);
      request.respondWith({
        status: 200,
        response: [apiResponse]
      });
    });

    const response = await fetchGroceryLists();
    expect(response).toEqual([apiResponse]);
    done();
  });

  it("fetches single grocery list", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      expect(request.url).toContain(`/api/grocerylists/2`);
      request.respondWith({
        status: 200,
        response: [apiResponse[1]]
      });
    });

    const response = await fetchSingleGroceryList(2);
    expect(response).toEqual([apiResponse[1]]);
    done();
  });
});
