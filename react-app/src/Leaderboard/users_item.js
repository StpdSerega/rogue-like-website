//get JSON file from backend
const actualData = await fetch(
  `https://dummyjson.com/users?limit=20&skip=0&select=firstName,age`  //paste URL from backend
  ).then(response => response.json());

  
let currentData = [];

function mapWithRank(row, i) {
  return { ...row, ranking: i + 1 };
}

export function getInitialData() {
  // check actualData is affay
  if (Array.isArray(actualData)) {
    currentData = actualData.map(mapWithRank);
  } else if (actualData && actualData.users && Array.isArray(actualData.users)) {
    // maybe structure has name "users"
    currentData = actualData.users.map(mapWithRank);
  } else {
    console.error('Invalid response format'); // error
  }

  return currentData;
}
