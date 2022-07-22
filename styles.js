import * as RN from "react-native";

export const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdbdbd",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
  },
  containerAdd: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleAdd: {
    fontSize: 32,
    fontWeight: "700",
  },
  inputContainerAdd: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  emojiAdd: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    elevation: 8,
  },
  productContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
  },
  emojiProduct: {
    fontSize: 100,
  },
  nameProduct: {
    fontSize: 32,
    fontWeight: "bold",
  },
  priceProduct: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  buttonProduct: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonTextProduct: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
