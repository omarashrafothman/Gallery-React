import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
function App() {
  const [Images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=23606404-11cf8cf190ad9ff6df830bbc9&q=${Term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [Term]);

  return (
    <div className="container mx-auto">
      <ImageSearch
        searchText={(text) => {
          setTerm(text);
        }}
      />

      {!isLoading && Images.length === 0 && (
        <>
          <h1 className="text-5xl text-center mx-auto mt-32">
            NO IMAGES FOUND !
          </h1>

          <h2 className="text-3xl text-center mx-auto mt-40 ">
            Omar Othman greets you
          </h2>
        </>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">LOADING...</h1>
      ) : (
        <div className=" grid grid-cols-3 gap-4">
          {Images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
