import _default from "../assets/helper/default";
export function makeAuthHeader(type = "", info = _default) {
  let headerOption = {};
  if (type === "") {
    headerOption = { headers: { needAuth: true } };
  } else if (type === "xlsx") {
    headerOption = {
      headers: { needAuth: true },
      responseType: "blob",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };
  } else if (type === "json") {
    headerOption = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else if (type === "login") {
    if (info !== "") {
      headerOption = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
    }
  } else if (type === "changeUrl") {
    headerOption = {
      headers: {
        changeUrl: info.urlKey,
      },
    };
  }
  return headerOption;
}
