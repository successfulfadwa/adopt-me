
async function fetchBreedList({ queryKey }) {
	

	const animal = queryKey[1];
	if (!animal) return [];
  
	const res = await fetch(
	  `http://pets-v2.dev-apis.com/breeds?animal=${animal}`, {
		headers: [
			{ key: "Access-Control-Allow-Credentials", value: "true" },
			{ key: "Access-Control-Allow-Origin", value: "*" },
			{ key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
			{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
		  ]
	  }
	);
  
	if (!res.ok) {
	  throw new Error(`breeds ${animal} fetch not ok`);
	}
  
	return res.json();
  }
  
  export default fetchBreedList;