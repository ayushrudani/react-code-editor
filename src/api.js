import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
        //input: "Hello, World!"
      },
    ],
    stdin: `10`,
  });
  return response.data;
};

// c code for hello world
// #include <stdio.h>
// int main() {
//     printf("Hello, World!");
//     return 0;
// }
