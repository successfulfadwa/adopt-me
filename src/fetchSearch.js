async function fetchSearch({ queryKey }) {
	const { animal, location, breed } = queryKey[1];
	const res = await fetch(
	  `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`, {
		headers: [
			{ key: "Access-Control-Allow-Credentials", value: "true" },
			{ key: "Access-Control-Allow-Origin", value: "*" },
			{ key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
			{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
		  ]
	  }
	);
  
	if (!res.ok)
	  throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);
  
	return res.json();
  }
  
  export default fetchSearch;