import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconCalendar, IconHome, IconMessage, IconUser } from '@/components/Icon/Icon';
import Header from '@/components/Header';
import HomeHeader from '../Home/HomeHeader';
import ScheduleExamHeader from '../ScheduleExam/ScheduleExamHeader';
import MessageHeader from '../Message/MessageHeader';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <IconHome color={color} />
          ),
          header(props) {
            return <Header ><HomeHeader /></Header>
          }
        }}

      />
      <Tabs.Screen
        name="scheduleexam"
        options={{
          title: 'Lịch khám',
          tabBarIcon: ({ color, focused }) => (
            <IconCalendar color={color}  />
          ),
          header(props) {
            return <Header ><ScheduleExamHeader/></Header>
          }
        }}
        
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Tin nhắn',
          tabBarIcon: ({ color, focused }) => (
            <IconMessage color={color}  />
          ),
          header(props) {
            return <Header ><MessageHeader/></Header>
          }
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color, focused }) => (
            <IconUser color={color}  />
          ),
          headerShown: false
        }}
      />

    </Tabs>

  );
}
