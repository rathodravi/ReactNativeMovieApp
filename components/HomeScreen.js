import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BASE_URL, API_KEY, POSTER_PATH } from "../src/config";

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/popular?api_key=${API_KEY}&page=1`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>Loading...Please check your internet connection.</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={data.results}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("About", {
                    itemId: item.id,
                    originalTitle: item.original_title,
                    releaseDate: item.release_date,
                    voteAverage: item.vote_average,
                    posterPath: item.poster_path,
                    overView: item.overview,
                  })
                }
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: `${POSTER_PATH}/` + item.poster_path }}
                    style={styles.img}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  img: {
    height: 350,
    width: 200,
  },
  imageContainer: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    justifyContent: "center",
  },
});
