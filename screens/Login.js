/** @format */

import React, { useEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image, Button, Input } from "react-native-elements";
import { auth } from "../firebase/firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signin = () => {
    auth.signInWithEmailAndPassword(email, password).catch((err) => alert(err));
  };

  const signup = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://i.dlpng.com/static/png/6738720_preview.png",
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
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
          onSubmitEditing={signin}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={signin} style={styles.registerButton} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          style={styles.registerButton}
          onPress={signup}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
