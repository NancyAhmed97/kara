import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import Tab from "./Tab";

const HeaderTabs = ({ tabs, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.key);
  const handleChange = useCallback((tabKey) => {
    setActiveTab(tabKey);
    onChange(tabKey);
  }, []);
  return (
    <View style={styles.tabsContainer}>
      {tabs.map((item, index) => (
        <Tab
          key={item.key}
          tab={item}
          activeTab={activeTab}
          handlePress={handleChange}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HeaderTabs;
