import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AntDesign } from "@expo/vector-icons";
import Info from "./Components/Info/Info";
import styles from "./styles";
import Payment from "./Components/Payment/Payment";
import Details from "./Components/Details/Details";
import PrimaryButton from "../../components/form/PrimaryButton";

const steps = [
  { id: 1, iconName: "user", name: "guest info" },
  { id: 2, iconName: "checkcircleo", name: "checkout details" },
  { id: 3, iconName: "creditcard", name: "payment" },
]

const CheckoutScreen = ({ navigation }) => {
  const { top, bottom } = useSafeAreaInsets();
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <View style={[styles.topBar, { paddingTop: top + 10 }]}>
        {/* action button */}
        <TouchableOpacity
          style={styles.topBarActionButtonContainer}
          onPress={() => {
            if (activeStep === 1) return navigation.goBack();
            setActiveStep(prev => prev - 1);
          }}
        >
          <AntDesign name="arrowleft" color="white" size={20} />
          <Text style={styles.topBarActionButtonText}>
            {steps[activeStep - 1].name}
          </Text>
        </TouchableOpacity>

        {/* // tabs */}
        <View style={styles.topTabsContainer}>
          {steps.map(step => (
            <View
              key={step.id}
              style={[
                styles.tabItemContainer,
                step.id === activeStep ? styles.tabItemContainerActive : {}
              ]}
            >
              <AntDesign name={step.iconName} color="white" size={30} />
              <Text style={styles.tabItemText}>
                {step.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* // content */}
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {activeStep === 1 ? <Info /> : null}
          {activeStep === 2 ? <Details /> : null}
          {activeStep === 3 ? <Payment /> : null}
        </ScrollView>

        <PrimaryButton
          label="Next"
          buttonStyles={{
            paddingHorizontal: 26,
            marginBottom: bottom,
            marginHorizontal: 16,
            height: 50,
            borderRadius: 4,
            justifyContent: "center",
          }}
          onPress={() => {
            if (activeStep === steps.length) return;
            setActiveStep(prev => prev + 1);
          }}
        />
      </View>
    </>
  )
}

export default CheckoutScreen