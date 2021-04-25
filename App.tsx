import * as React from "react";
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ホーム画面</Text>
      {/* 詳細へ進むボタンの実装 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "詳細画面へようこそ、他のボタンも押してみよう",
          })
        }
      >
        <Text style={styles.text}>詳細へ進む</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
      <Text>詳細画面</Text>
      <Text>ランダムカウント: {JSON.stringify(itemId)}</Text>
      <Text>コメント: {JSON.stringify(otherParam)}</Text>
      {/* 詳細へ進むボタンの実装 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      >
        <Text style={styles.text}>再度詳細へ進む</Text>
      </TouchableOpacity>
      {/* ホームへ戻るボタンの実装 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>ホームへ戻る</Text>
      </TouchableOpacity>
      {/* 一つ前へ戻るボタンの実装 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.text}>戻る</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "こんにちは、ReactNavigation",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity
                style={styles.button_small}
                onPress={() => alert("これはボタンです")}
              >
                <Text style={styles.text}>ボタン</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#1DC0F4",
  },
  button_small: {
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#1DC0F4",
  },
  text: {
    fontSize: 15,
    color: "black",
  },
});

export default App;
