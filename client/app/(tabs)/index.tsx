import { ScrollView, Text, View } from "react-native";
import * as React from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from "@/components/CommonButton";
import LoginRes from "../LoginAndReg/_layout";
import { useNavigation } from "expo-router";


export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", height: "100%", flexDirection: "column", }}>
      <HomeFuncList />
      <HomeDoctor />
      <HomeService />
      <CommonButton title="login" onPress={() => navigation.navigate("LoginAndReg")}></CommonButton>
    </ScrollView>
  );
}
