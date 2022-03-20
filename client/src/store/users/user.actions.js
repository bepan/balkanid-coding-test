export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
}

export async function fetchUsers(dispatcher, qs = '') {
  let url = 'http://localhost:3000/users';
  url = qs ? `${url}?${qs}` : url;
  const responseMeta = await fetch(url);
  const response = await responseMeta.json();
  dispatcher(fetchUsersSuccess(response.users))
}