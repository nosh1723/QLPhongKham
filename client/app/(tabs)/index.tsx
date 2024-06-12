import { ScrollView, Text, View } from "react-native";
import React, { useEffect } from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import CommonButton from "@/components/CommonButton";
import LoginRes from "../Login/_layout";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react";
import { useStore } from "@/stores";

export default observer(function HomeScreen() {
  const navigation = useNavigation()

  const { pagingDoctor, resetStore } = useStore().home
  
  useEffect(() => {
    pagingDoctor()
    
    return () => resetStore()
  },[])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", height: "100%", flexDirection: "column", }}>
      <HomeFuncList />
      <HomeDoctor />
      <HomeService />
      <CommonButton title="login" onPress={() => navigation.navigate("Login")}></CommonButton>
    </ScrollView>
  );
})
