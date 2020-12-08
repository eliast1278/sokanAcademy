import React from "react";
import http from "./apiServices";

export async function GetData() {
  return await http.get("summary");
}
