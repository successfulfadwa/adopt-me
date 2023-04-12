const fetchPet = async ({ queryKey }) => {
	const id = queryKey[1];
	const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`, {
		headers: [
			{ key: "Access-Control-Allow-Credentials", value: "true" },
			{ key: "Access-Control-Allow-Origin", value: "*" },
			{ key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
			{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
		  ]
	  });
  
	if (!apiRes.ok) {
	  throw new Error(`details/${id} fetch not ok`);
	}
  
	return apiRes.json();
  };
  
  export default fetchPet;