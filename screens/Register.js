/** @format */

import React, { useLayoutEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image, Button, Input } from "react-native-elements";
import { auth } from "../firebase/firebase";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to login",
    });
  }, [navigation]);

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imgUrl ||
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        });
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h2 style={{ marginBottom: 15, fontSize: 18 }}>
        Create a signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="User Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Image Url"
          type="text"
          value={imgUrl}
          onChangeText={(text) => setImgUrl(text)}
          onSubmitEditing={signUp}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={signUp}
          style={styles.registerButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    padding: 10,
    width: 285,
  },
  buttonContainer: {
    margin: 20,
    marginTop: 0,
    width: 250,
  },
  registerButton: {
    marginTop: 15,
    width: 250,
  },
});
