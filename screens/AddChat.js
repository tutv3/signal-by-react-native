/** @format */

import React, { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { db } from "../firebase/firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat!",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createNewChat = async () => {
    await db
      .collection("chat")
      .add({
        chatName: input,
      })
      .then(() => navigation.goBack())
      .catch((err) => alert(err));
  };

  return (
    <View>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button onPress={createNewChat} title="Create New Chat" />
    </View>
  );
};

export default AddChat;
