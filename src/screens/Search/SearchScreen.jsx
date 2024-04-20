import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
import Room from "./Components/Room/Room";
import Sort from "./Components/Sort/Sort";
import Filter from "./Components/Filter/Filter";

const SearchScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const [showSort, setShowShort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <View style={[styles.header, { paddingTop: top }]} />

      <View style={styles.headerBox}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} />
        </Pressable>
        <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
          cairo, 6 feb - 20 feb
        </Text>
      </View>

      {/* // sort and filter */}
      <View style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16
      }}>
        <Pressable
          onPress={() => setShowShort(true)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6
          }}>
          <AntDesign name="CodeSandbox" size={18} />
          <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
            sort
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setShowFilter(true)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6
          }}>
          <AntDesign name="filter" size={18} />
          <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
            filter
          </Text>
        </Pressable>
        <Pressable style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6
        }}>
          <AntDesign name="leftcircleo" size={18} />
          <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
            map
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.container}>
        <Text style={{ textTransform: "capitalize", paddingBottom: 12 }}>
          250 places found
        </Text>

        <Room />
        <Room />
        <Room />
      </ScrollView>

      {showSort && (
        <Sort
          showSort={showSort}
          onClose={() => setShowShort(false)}
        />
      )}

      {showFilter && (
        <Filter
          showFilter={showFilter}
          onClose={() => setShowFilter(false)}
        />
      )}
    </>
  )
}

export default SearchScreen