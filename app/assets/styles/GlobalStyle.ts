import { StyleSheet } from 'react-native';

const GlobalStyle = StyleSheet.create({
  shadow: {
    // Info: Styled components doesn't support shadow
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default GlobalStyle;
