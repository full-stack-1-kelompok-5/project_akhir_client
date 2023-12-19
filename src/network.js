const BASE_URL = "http://103.127.97.117:4005";
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

async function loginAdmin({ Email, Password }) {
  const response = await fetch(`${BASE_URL}/Admin/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: Email, password: Password }),
  });

  const responseJson = await response.json();
  if (response.status >= 400) {
    alert(responseJson.error);
    return { error: true, code: response.status, data: null };
  }
  console.log(5);

  return { error: false, code: response.status, data: responseJson.data };
}

async function loginWaiters({ Email, Password }) {
  const response = await fetch(`${BASE_URL}/Waiters/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: Email, password: Password }),
  });

  const responseJson = await response.json();
  if (response.status >= 400) {
    console.log(4);
    alert(responseJson.msg);
    return { error: true, code: response.status, data: null };
  }
  console.log(5);

  return { error: false, code: response.status, data: responseJson.data };
}

async function loginKitchen({ Email, Password }) {
  const response = await fetch(`${BASE_URL}/Kitchen/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: Email, password: Password }),
  });

  const responseJson = await response.json();
  if (response.status >= 400) {
    console.log(responseJson);
    alert(responseJson.error);
    return { error: true, code: response.status, data: null };
  }
  console.log(5);

  return { error: false, code: response.status, data: responseJson.data };
}

export {
  getAccessToken,
  putAccessToken,
  deleteAccessToken,
  loginAdmin,
  loginWaiters,
  loginKitchen,
};
