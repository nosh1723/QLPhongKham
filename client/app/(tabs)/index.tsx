import { ScrollView, Text, View } from "react-native";
import React, { useEffect } from "react";
import HomeFuncList from "../Home/HomeFuncList";
import HomeDoctor from "../Home/HomeDoctor";
import HomeService from "../Home/HomeService";
import { useNavigation } from "expo-router";
import { observer } from "mobx-react";
import { useStore } from "@/stores";
import Toast from "react-native-toast-message";

export default observer(function HomeScreen() {
  const navigation = useNavigation()

  const { pagingDoctor, resetStore } = useStore().home
  const { user, reset} = useStore().auth
  
  useEffect(() => {
    pagingDoctor()
    
    return () => resetStore()
  },[])

  

  useEffect(() => {
    if(user) {
        Toast.show({
            type: "success",
            text1: "Đăng nhập thành công"
        }) 
    }
    
    return reset()
},[])

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", height: "100%", flexDirection: "column", }}>
        <HomeFuncList />
        <HomeDoctor />
        <HomeService />
      </ScrollView>
      <Toast position="top" bottomOffset={50} visibilityTime={2000}/>
    </>
  );
})
