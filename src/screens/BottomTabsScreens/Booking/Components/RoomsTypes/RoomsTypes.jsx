import { FlatList, View } from "react-native"
import RoomType from "./RoomType";
import styles from "./styles";

const RoomsTypes = () => {
  const roomsTypes = [
    { id: 0, name: "All" },
    { id: 1, name: "Single Room" },
    { id: 2, name: "Double Room" },
    { id: 3, name: "Family Room" },
    { id: 4, name: "Work Room" },
    { id: 5, name: "Shared Room" },
  ];
  return (
    <FlatList
      style={styles.container}
      data={roomsTypes}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item }) => <RoomType active={0} key={item.id} roomType={item} />}
      ItemSeparatorComponent={<View style={{ marginHorizontal: 4 }} />}
      keyExtractor={item => item.id}
    />
  )
}



export default RoomsTypes

