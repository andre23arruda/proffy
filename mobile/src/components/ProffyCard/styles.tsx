import { StyleSheet } from 'react-native'
import { colors } from '../../stylesGlobal'


export default StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    zIndex: 100,
    marginBottom: 20,
    marginTop: 0,
  },

  cardHeader: {
    padding: 25,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 200,
    marginRight: 15,
  },

  nameContainer: {
    flex: 1,
  },

  name: {
    color: colors.darkPurple,
    fontSize: 23,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'left',
    maxWidth: '99%',
  },

  subject: {
    fontSize: 14,
    fontFamily: 'Ubuntu_500Medium',
    textAlign: 'left',
    marginTop: 5,
    color: colors.text,
  },

  bio: {
    fontSize: 15,
    lineHeight: 25,
    fontFamily: 'Ubuntu_500Medium',
    textAlign: 'left',
    color: colors.text,
    paddingBottom: 15,
    paddingHorizontal: 25,
  },

  cardFooter: {
    borderTopColor: colors.lightGray,
    borderTopWidth: 2,
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },

  priceDescription: {
    fontSize: 15,
    lineHeight: 25,
    fontFamily: 'Ubuntu_500Medium',
    marginRight: 15,
    color: colors.text,
  },

  price: {
    color: colors.purple,
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 25,
  },

  button: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },

  buttonSmall: {
    width: 60,
  },

  buttonFill: {
    flex: 1,
    marginLeft: 5,
  },

  buttonGreen: {
    backgroundColor: colors.green,
  },

  buttonPurple: {
    backgroundColor: colors.anotherPurple,
  },

  buttonRed: {
    backgroundColor: colors.red,
  },

  buttonIcon: {
    height: 60,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    textAlign: 'left',
    color: '#FFF',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 15,
  },
})