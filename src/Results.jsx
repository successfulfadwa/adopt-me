import Pet from "./Pet";
import LoadingPage from "./LoadingPage";

const Results = ({ pets }) => {
  if (pets.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div className="search">
      {pets.map((pet) => {
        return (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        );
      })}
    </div>
  );
};

export default Results;
