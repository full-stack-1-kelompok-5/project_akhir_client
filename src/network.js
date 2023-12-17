const BASE_URL = "http://103.127.97.117:4005/";
function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

function deleteAccessToken() {
  return localStorage.removeItem("accessToken");
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ Email, Password }) {
    const response = await fetch(`${BASE_URL}/Admin/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Password }),
    });
  
    const responseJson = await response.json();
    console.log(responseJson);
    if (response.status >= 400) {
      alert(responseJson.msg);
      return { error: true, code: response.status, data: null };
    }
  
    return { error: false, code: response.status, data: responseJson.data };
  }

  export {getAccessToken,
    putAccessToken,
    deleteAccessToken,
    login,}