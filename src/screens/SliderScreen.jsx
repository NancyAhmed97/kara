import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageGallerySwiper } from "react-native-image-gallery-swiper";

const SliderScreen = ({ route }) => {
  const { images } = route.params;
  const [imagesURL, setImagesURL] = useState(null);
  useEffect(() => {
    setImagesURL(
      images.map((image) => ({
        id: image.id,
        name: image.title,
        url: image.illustration,
      }))
    );
  }, []);

  if (!imagesURL) return <Text>Loading</Text>;

  return (
    <View style={styles.root}>
      <View style={{ height: "70%" }}>
        <ImageGallerySwiper
          images={imagesURL}
          swipeUp={() => console.log("up")}
          swipeDown={() => console.log("down")}
          // displayName

          showThumbs
          //  getSwipedImage={setSwipedImage}
          activeImage={2}
          arrows={{
            arrowRight: require("../../assets/Icons/arrow-right.png"),
            arrowLeft: require("../../assets/Icons/arrow-left.png"),
            arrowStyles: {
              // backgroundColor: 'gray',
              height: 30,
              width: 30,
              borderRadius: 10,
            },
            containerStyles: {
              width: "100%",
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              // borderWidth: 1,
              // borderColor: "white",
              top: "35%",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            },
          }}
          // setHandlePressRight={handlePressRight}
          // textStyles={{ fontSize: 20, color: 'white', backgroundColor: 'green' }}
          imageStyles={{ resizeMode: "stretch" }}
        ></ImageGallerySwiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",

    alignItems: "center",
  },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailButton: {
    marginHorizontal: 5,
  },
  activeThumbnailButton: {
    borderWidth: 2,
    borderColor: "blue", // Change color as needed
  },
  thumbnailImage: {
    width: 50, // Adjust thumbnail size as needed
    height: 50, // Adjust thumbnail size as needed
    borderRadius: 5,
  },
  customSlide: {
    backgroundColor: "transparent",
  },
});

export default SliderScreen;
