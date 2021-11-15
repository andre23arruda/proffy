import { StyleSheet } from 'react-native'
import { colors } from '../../stylesGlobal'


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  },

  imageContainer: {
    height:'45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    position: 'absolute',
    top: '40%',
  },

  descriptionContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: 50,
  },

  numberPage: {
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 50,
    color: colors.gray,
    marginTop: '10%',
  },

  description: {
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 24,
    lineHeight: 35,
    color: colors.darkPurple,
    marginTop: '10%',
    width: '70%',
    height: '30%',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },

  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },

  indicator: {
    fontSize: 60,
  },

  button: {
    alignSelf: 'flex-end'

  },
})