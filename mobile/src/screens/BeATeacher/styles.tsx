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

  backContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 22,
    paddingTop: 50,
    zIndex: 100,
  },

  buttonBack: {
    flexDirection: 'row',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },

  textBolder: {
    color: '#fff',
    fontSize: 32,
    width: '55%',
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'left',
    marginLeft: 20
  },

  text: {
    fontSize: 20,
    lineHeight: 32,
    fontFamily: 'Ubuntu_300Light',
    color: colors.lightPurple,
    marginTop: 30,
    textAlign: 'left',
    borderTopColor: '#fff',
    marginLeft: 20
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: '10%',
    marginHorizontal: 20
  },

  button: {
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '30%',
    width: '100%',
  },

  buttonGreen: {
    backgroundColor: colors.green,
  },

  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 16,
  },
})