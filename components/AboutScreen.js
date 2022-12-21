import { Text, View, Image, StyleSheet } from "react-native";
import { POSTER_PATH } from "../src/config";

export default function AboutScreen({ route: { params } }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.MainBox}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={{ uri: `${POSTER_PATH}/` + params.posterPath }}
                style={styles.mainImage}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.MainTitle}>{params.originalTitle}</Text>
              <Text style={styles.releasedon}>
                Released on : {params.releaseDate}
              </Text>
              <View style={styles.ratingBtn}>
                <Text style={styles.rating}>Rating : {params.voteAverage}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.subTitle}>Description</Text>
          <View style={styles.greybox}>
            <Text style={styles.paragraph}>{params.overView}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    padding: 10,
  },
  MainBox: {
    flex: 1,
  },
  SecondBox: {
    flex: 1,
    backgroundColor: "blue",
    paddingHorizontal: 10,
  },
  greybox: {
    backgroundColor: "#1b1b1c",
    padding: 15,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  MainTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    color: "white",
  },
  mainImage: {
    height: 200,
    width: 150,
    marginTop: 10,
  },
  description: {
    padding: 10,
    flexShrink: 1,
    paddingLeft: 15,
  },
  releasedon: {
    fontSize: 16,
    color: "#fff",
    color: "orange",
    marginTop: 20,
  },
  rating: {
    color: "white",
    fontWeight: "bold",
  },
  ratingBtn: {
    backgroundColor: "orange",
    borderRadius: 100,
    width: 150,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  paragraph: {
    color: "white",
    fontSize: 16,
    lineHeight: 25,
  },
  subTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 25,
  },
});
