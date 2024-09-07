import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import ProfileScreen from "../app/Screens/ProfileScreen";
import MyAccountUser from "../app/Screens/MyAccountUser";
import ChangePassword from "../app/Screens/ChangePassword";
import DeleteAccount from "../app/Screens/DeleteAccount";
import TermsAndConditions from "../app/Screens/TermsAndConditions";
import LegalInfo from "../app/Screens/LegalInfo";
import MyAccount from "../app/Screens/MyAccount";
import SettingsScreen from "../app/Screens/SettingsScreen";
import Feedback from "../app/Screens/Feedback";
import ManageAccount from "../app/Screens/ManageAccount";
import ProfileDetails from "../app/Screens/ProfileDetails";
import CountryLanguageSearch from "../app/Screens/CountryLanguageSearch";
import PrivacyPolicy from "../app/Screens/PrivacyPolicy";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { LanguageProvider } from "../LanguageProvider";



const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <I18nextProvider i18n={i18next}>
    <LanguageProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MyAccountUser" component={MyAccountUser} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="LegalInfo" component={LegalInfo} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="ManageAccount" component={ManageAccount} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="CountryLanguageSearch" component={CountryLanguageSearch} />
      </Stack.Navigator>
    </NavigationContainer>
    </LanguageProvider>
    </I18nextProvider>
  );
}

export default MainStackNavigator;
