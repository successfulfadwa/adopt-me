import { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [isLoaded, setIsLoaded] = useState(false); // state variable for animation

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  useEffect(() => {
    if (results?.isSuccess) {
      setIsLoaded(true);
    }
  }, [results]);

  return (
    <div>
      <div
        className="search-params"
        style={{
          animation: isLoaded
            ? "fadein 1s ease-in-out forwards, slide-fade-in 1.6s ease-in-out forwards"
            : "fadein 1s ease-in-out forwards",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              animal: formData.get("animal") ?? "",
              breed: formData.get("breed") ?? "",
              location: formData.get("location") ?? "",
            };
            setRequestParams(obj);
          }}
        >
          {adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
          ) : null}
          <label htmlFor="location">
            Location
            <input
              id="location"
              name="location"
              placeholder="Location"
              style={{
                borderRadius: "25px", // Set the border radius for all corners
                padding: "10px", // Set the padding
                fontSize: "16px", // Set the font size
                backgroundColor: "#f2f2f2", // Set the background color
                border: "none", // Remove the border
                outline: "none", // Remove the outline
                color: "#333333", // Set the text color
                width: "550%", // Set the width to 100%
                boxSizing: "border-box", // Include padding and border in width
              }}
            />
          </label>

          <label htmlFor="animal ">
            Animal
            <select
              id="animal"
              name="animal"
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
              }}
              style={{
                borderRadius: "25px", // Set the border radius for all corners
                paddingLeft: "10px", // Set the padding
                fontSize: "16px", // Set the font size
                backgroundColor: "#f2f2f2", // Set the background color
                border: "none", // Remove the border
                outline: "none", // Remove the outline
                color: "#777777", // Set the text color
                width: "550%", // Set the width to 100%
                cursor: "pointer",
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="breed">
            Breed
            <select
              disabled={!breeds.length}
              id="breed"
              name="breed"
              style={{
                borderRadius: "25px", // Set the border radius for all corners
                paddingLeft: "10px", // Set the padding
                fontSize: "16px", // Set the font size
                backgroundColor: "#f2f2f2", // Set the background color
                border: "none", // Remove the border
                outline: "none", // Remove the outline
                color: "#777777", // Set the text color
                width: "550%", // Set the width to 100%
                cursor: "pointer",
              }}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>

          <button>Submit</button>
        </form>
      </div>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
