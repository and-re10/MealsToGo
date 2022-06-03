import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
//Map View
import MapView from "react-native-maps";
//Styled Components
import styled from "styled-components/native";
//Searchbar
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};
