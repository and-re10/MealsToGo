import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (serachKeyword) => {
    setIsLoading(true);
    setKeyword(serachKeyword);
    // console.log(serachKeyword);
    if (!serachKeyword.length) {
      // don't do anything
      setIsLoading(false);
      return;
    }
    locationRequest(serachKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        // console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        // console.log(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
