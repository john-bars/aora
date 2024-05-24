import Ionicons from "@expo/vector-icons/Ionicons";

import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white fornt-psemibold">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
