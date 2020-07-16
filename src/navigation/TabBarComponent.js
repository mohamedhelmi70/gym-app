import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useTheme} from "react-native-paper";
import {gym, accessTime, calendar, people} from "../assets";

function BottomTabBar ({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const ICONS = [gym, people, accessTime, calendar];

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const {colors} = useTheme();

  return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={[styles.tab,  {backgroundColor: colors.primary}]}
            >
              <Image
                source={ICONS[index]}
                style={{tintColor: isFocused ? colors.accent : colors.gray, width: 35, height: 35}}
              />
              <Text style={{ color: isFocused ? colors.accent : colors.gray, textAlign: "center", fontSize: 13}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    height: 60,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
  }
});