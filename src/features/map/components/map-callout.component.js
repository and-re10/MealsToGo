import React from "react";
// import { Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { CompactRestaurantinfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;

export const ImageCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 100px;
  width: 100px;
`;

export const MapCallout = ({ restaurant }) => {
  const { photos } = restaurant;

  return (
    <CompactRestaurantinfo restaurant={restaurant} />
    // <>
    //   <ImageCardCover key={restaurant.name} source={{ uri: photos[0] }}/>
    //   <MyText>{restaurant.name}</MyText>
    // </>
  );
};
