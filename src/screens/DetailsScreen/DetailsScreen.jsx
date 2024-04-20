import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";
import { Colors } from "../../Constants/Colors";
import RateStars from "../../components/ui/RateStars";
import Comment from "../../components/ui/Comment";
import PrimaryButton from "../../components/form/PrimaryButton";
import { useCallback } from "react";

export const items = [
  {
    id: 1,
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    id: 2,
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    id: 3,
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    id: 4,
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    id: 5,
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
  {
    id: 6,
    title: "Middle Earth, Germany",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/lceHsT6l.jpg",
  },
];

const DetailsScreen = ({ navigation }) => {
  const { top, bottom } = useSafeAreaInsets();
  const { width, height } = Dimensions.get("window");

  const handleSliderClick = useCallback(() => {
    navigation.navigate("slider", { images: items });
  }, [items]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Carousel
            layout="default"
            data={items}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={handleSliderClick}>
                <ImageBackground
                  style={{ backgroundColor: "blue", height: height / 3 }}
                  source={{ uri: item.illustration }}
                />
              </TouchableOpacity>
            )}
            sliderWidth={width}
            itemWidth={width}
          />
          <View
            style={{
              position: "absolute",
              left: 12,
              bottom: 12,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, .9)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>1/5</Text>
          </View>
        </View>
        <View style={[styles.appBarActionsContainer, { paddingTop: top }]}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <TouchableOpacity
              style={styles.appBarActionButton}
              onPress={() => null}
            >
              <AntDesign name="hearto" size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.appBarActionButton}
              onPress={() => null}
            >
              <AntDesign name="sharealt" size={18} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.appBarActionButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowright" size={18} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15, marginHorizontal: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 3 }}>
            Edison Times Square
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            New York City
          </Text>
        </View>
        <View style={{ marginTop: 15, marginHorizontal: 8 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              marginBottom: 3,
              color: "gray",
            }}
          >
            Price
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>US$ 1,167</Text>
        </View>
        <View style={styles.seperatorStyle}></View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Details</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>
            In the hotel industry, knowing the types of hotel rooms and their
            respective classification is of fundamental importance for applying
            the right rates and effectively managing staff deployment.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>reviews</Text>
          <Text style={{ paddingBottom: 12 }}>
            People will validate reviews and ensure that these reviews created
            by real devices.
          </Text>
          <View style={styles.reviewsContainer}>
            <View style={styles.reviewsCountContainer}>
              <Text style={styles.reviewsTitle}>4,8</Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                {/* <AntDesign name="star" color={Colors.primary} size={13} />
              <AntDesign name="star" color={Colors.primary} size={13} />
              <AntDesign name="star" color={Colors.primary} size={13} />
              <AntDesign name="star" color={Colors.primary} size={13} />
              <AntDesign name="star" size={13} /> */}
                <RateStars rate={4} />
              </View>
              <Text style={styles.reviewsCount}>4,832,234</Text>
            </View>
            <View style={styles.reviewsRateContainer}>
              <View style={styles.reviewsLineContainer}>
                <Text>1</Text>
                <View style={styles.reviewsRateLine}></View>
                <View style={styles.reviewsRateLineActive}></View>
              </View>
              <View style={styles.reviewsLineContainer}>
                <Text>2</Text>
                <View style={styles.reviewsRateLine}></View>
                <View style={styles.reviewsRateLineActive}></View>
              </View>
              <View style={styles.reviewsLineContainer}>
                <Text>3</Text>
                <View style={styles.reviewsRateLine}></View>
                <View style={styles.reviewsRateLineActive}></View>
              </View>
              <View style={styles.reviewsLineContainer}>
                <Text>4</Text>
                <View style={styles.reviewsRateLine}></View>
                <View style={styles.reviewsRateLineActive}></View>
              </View>
              <View style={styles.reviewsLineContainer}>
                <Text>5</Text>
                <View style={styles.reviewsRateLine}></View>
                <View style={styles.reviewsRateLineActive}></View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 8, marginBottom: 5, gap: 10 }}>
            <Comment />
            <Comment />
          </View>
          {/* start from here */}
        </View>
      </ScrollView>
      <View style={styles.footerStyle}>
        <Text style={{ color: "gray", fontSize: 16 }}>
          <Text style={{ color: Colors.primary, fontWeight: "700" }}>$190</Text>{" "}
          / night
        </Text>
        <View style={{ width: "30%" }}>
          <PrimaryButton
            label={"Book"}
            onPress={() => {
              navigation.navigate("checkout")
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
