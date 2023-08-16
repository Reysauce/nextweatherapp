// import Image from "next/image";
import { useState } from "react";
import data from "../data/city.list.json";
import Link from "next/link";

export default function LocationSearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [matchingCities, setMatchingCities] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
    const cities = [];
    for (let city of data) {
      const match = city.name
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase());
      if (match) cities.push(city);
    }
    setMatchingCities(cities);
  };

  return (
    <div className="search-container">
      <input
        value={inputValue}
        type="text"
        id="searchInput"
        placeholder="Enter Location"
        onChange={(e) => handleChange(e)}
        className="search-input"
      />
      {inputValue.length > 2 && (
        <ul className="results-list">
          {matchingCities.length > 0 ? (
            matchingCities.map((city) => (
              <Link href={`/location/${city.name}-${city.id}`} key={city.id}>
                <li className="result-item">
                  {city.name}
                  {city.state ? `, ${city.state} ` : " "}
                  {city.country}
                </li>
              </Link>
            ))
          ) : (
            <p className="no-results">City not found</p>
          )}
        </ul>
      )}
    </div>
  );
}
