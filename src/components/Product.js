import * as React from "react";
import * as RN from "react-native";
import { database } from "../../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles";

export default function Product({ id, emoji, name, price, isSold }) {
  const onDelete = () => {
    const docRef = doc(database, "products", id);
    deleteDoc(docRef);
  };

  const onEdit = () => {
    const docRef = doc(database, "products", id);
    updateDoc(docRef, {
      isSold: true,
    });
  };

  return (
    <RN.View>
      <RN.View style={styles.productContainer}>
        <RN.View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <RN.Text style={styles.emojiProduct}>{emoji}</RN.Text>
          <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
        </RN.View>
        <RN.Text style={styles.nameProduct}>{name}</RN.Text>
        <RN.Text style={styles.priceProduct}>${price}</RN.Text>
        {isSold ? (
          <RN.TouchableOpacity
            style={[styles.buttonProduct, { backgroundColor: "gray" }]}
          >
            <RN.Text style={styles.buttonTextProduct}>Vendido</RN.Text>
          </RN.TouchableOpacity>
        ) : (
          <RN.TouchableOpacity onPress={onEdit} style={styles.buttonProduct}>
            <RN.Text style={styles.buttonTextProduct}>Comprar</RN.Text>
          </RN.TouchableOpacity>
        )}
      </RN.View>
    </RN.View>
  );
}
