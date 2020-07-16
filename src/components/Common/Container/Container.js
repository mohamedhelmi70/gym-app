import React from 'react';
import { View, StatusBar } from 'react-native';
import {ActivityIndicator, withTheme} from 'react-native-paper';
import {object, bool, node} from 'prop-types';

const Container = ({ style, loading, children, theme }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', ...style, backgroundColor: theme?.colors?.primary }}>
      <StatusBar backgroundColor={theme?.colors?.primary} barStyle="light-content"/>
      {loading ?
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator animating={true} size={30} color={theme.colors.text} />
        </View>
        :
        children
      }
    </View>
  )
}

Container.propTypes = {
  style: object,
  loading: bool,
  children: node,
};

export default withTheme(Container);