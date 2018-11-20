import axios from "axios";

export const apiUrl = "http://localhost:4444/api";
export const endpoint = "/grocerylists"; 

export const fetchGroceryLists = async () => {
  try {
    const result = await axios({
      method: "get",
      url: apiUrl + endpoint,
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 3000
    });

    return result.data;
  } catch (e) {
    console.log("error", e);
    return { error: e };
  }
};

export const fetchSingleGroceryList = async id => {
  try {
    const result = await axios({
      method: "get",
      url: apiUrl + endpoint + "/" + id,
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 3000
    });

    return result.data;
  } catch (e) {
    console.log("error", e);
    return { error: e };
  }
};
