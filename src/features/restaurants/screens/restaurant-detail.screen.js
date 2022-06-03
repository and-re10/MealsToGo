import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";

// const {
//     name = "Some Restaurant",
//     icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//     photos = [
//       "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
//     ],
//     address = "100 some random street",
//     isOpenNow = true,
//     rating = 4,
//     isClosedTemporarily = true,
//     placeId,
//   } = restaurant;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setbreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const handlePress = (value) => {
    switch (value) {
      case "breakfast":
        setbreakfastExpanded(!breakfastExpanded);
        break;
      case "lunch":
        setLunchExpanded(!lunchExpanded);
        break;
      case "dinner":
        setDinnerExpanded(!dinnerExpanded);
        break;
      case "drinks":
        setDrinksExpanded(!drinksExpanded);
        break;
      default:
        return;
    }
  };
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            theme={{ colors: { primary: "tomato" } }}
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => handlePress("breakfast")}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            theme={{ colors: { primary: "tomato" } }}
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => handlePress("lunch")}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwitch" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            theme={{ colors: { primary: "tomato" } }}
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => handlePress("dinner")}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <List.Accordion
            theme={{ colors: { primary: "tomato" } }}
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => handlePress("drinks")}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
