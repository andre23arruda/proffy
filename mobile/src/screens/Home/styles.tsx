import { StyleSheet } from 'react-native'
import { colors } from '../../stylesGlobal'


export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  },

  images: {
    marginTop: 90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },

  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Ubuntu_500Medium',
    marginTop: 30,
    textAlign: 'left',
    borderTopColor: colors.white,
    marginLeft: 20
  },

  textBolder: {
    color: colors.white,
    fontSize: 25,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'left',
    marginLeft: 20
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'flex-start',
  },

  button: {
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    width: '45%',
  },

  buttonGreen: {
    backgroundColor: colors.green,
  },

  buttonPurple: {
    backgroundColor: colors.anotherPurple,
  },

  buttonIcon: {
    height: 60,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 16,
  },

  textFooter: {
    textAlign: 'center',
    marginTop: '20%',
    width: '100%',
    fontFamily: 'Roboto_400Regular',
    color: colors.lightPurple


  }
})