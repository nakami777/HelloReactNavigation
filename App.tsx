import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="詳細へ進む"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "詳細画面へようこそ、他のボタンも押してみよう",
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>詳細画面</Text>
      <Text>ランダムカウント: {JSON.stringify(itemId)}</Text>
      <Text>コメント: {JSON.stringify(otherParam)}</Text>
      <Button
        title="再度詳細へ進む"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="ホームへ戻る"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="戻る" onPress={() => navigation.goBack()} />
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
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <Button
                onPress={() => alert("これはボタンです")}
                title="ボタン"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
