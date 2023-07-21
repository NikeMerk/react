import React from "react";
import FilmsDetails from "./components/FilmDetails";

const App = () => {
  const filmDetails = {
    id: "asdjnwjenf2342njna",
    title: "The Simpsons",
    seasonsCount: 0,
    genre: "Comedy",
    similar: [
      {
        id: "as3409823usdkfj",
        title: "South Park",
      },
    ],
    reviews: [
      {
        id: "xf343",
        author: "SP",
        text: "Best film ",
        rating: "9",
      },
    ],
  };

  return (
    <div className="container">
      <header id="header" className="header" />

      <FilmsDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonsCount={filmDetails.seasonsCount}
      />
      {/* <Reviews />
      <Recommendations /> */}
      <footer id="footer" className="footer" />
    </div>
  );
};
export default App;

