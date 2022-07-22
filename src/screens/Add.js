import * as React from "react";
import * as RN from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../config/fb";
import { useNavigation } from "@react-navigation/native";
import EmojiPicker from "rn-emoji-keyboard";
import { styles } from "../../styles";

export default function Add() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    emoji: "🍜",
    name: "",
    price: 0,
    isSold: false,
    createdAt: new Date(),
  });

  const handlePick = (emojiObject) => {
    setNewItem({
      ...newItem,
      emoji: emojiObject.emoji,
    });
  };

  const onSend = async () => {
    const docRef = await addDoc(collection(database, "products"), newItem);
    navigation.goBack();
  };

  return (
    <RN.View style={styles.containerAdd}>
      <RN.Text style={styles.titleAdd}>Publicar un producto</RN.Text>
      <RN.Text onPress={() => setIsOpen(true)} style={styles.emojiAdd}>
        {newItem.emoji}
      </RN.Text>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        style={styles.inputContainerAdd}
        placeholder="Nombre del producto"
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
        style={styles.inputContainerAdd}
        placeholder="Precio"
      />
      <RN.Button title="Publicar" onPress={onSend} />
    </RN.View>
  );
}
