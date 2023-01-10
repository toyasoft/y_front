import Cookies from "js-cookie";

export default async function fetchGraphQL(text: any, variables: any) {
  let response;
  const api = "http://localhost:3000/graphql";

  try {
    response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Cookies.get("userToken")}`,
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
  } catch (e) {
    console.log(e);
  }

  return await response?.json();
}
