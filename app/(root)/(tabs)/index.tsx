import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className="font-rubik" href={"/sign-in"}>
        Sign in
      </Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/properties/1"}>Properties</Link>
    </View>
  );
}
