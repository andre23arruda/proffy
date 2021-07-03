import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257E5',
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
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Ubuntu_500Medium',
    marginTop: 30,
    textAlign: 'left',
    borderTopColor: '#fff',
    marginLeft: 20
  },

  textBolder: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'left',
    borderTopColor: '#fff',
    marginLeft: 20
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'flex-start',
  },

  buttonGreen: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    width: '45%',
  },

  buttonPurple: {
    backgroundColor: '#9871F5',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    width: '45%',
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
    color: '#FFF',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 16,
  }
})