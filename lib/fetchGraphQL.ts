import Cookies from "js-cookie";

export default async function fetchGraphQL(text: any, variables: any) {
  let response;

  try {
    response = await fetch(`http://localhost:3000/graphql`, {
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
