import { StyleSheet } from 'react-native'
import { colors } from '../../stylesGlobal'


export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -30,
    padding: 32,
    paddingTop: 0,
  },

  grayBackground: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%',
    backgroundColor: colors.lightGray,
    zIndex: -10,
  },

  noProffys: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 35,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: '20%',
    color: colors.darkPurple,
  }

})