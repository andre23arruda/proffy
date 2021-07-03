import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: '5%',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  headerButton: {
    width: '10%',
  },

  headerTitle: {
    width: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 20,
  },

  headerTitleStrong: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
  },

  headerTitleText: {
    color: '#6C6C80',
    fontFamily: 'Roboto_400Regular',
  },

  main: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: '2%',
  },

  detailContent: {
    height: '85%',
  },

  pointImage: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 19,
    lineHeight: 24,
    marginTop: 8,
    color: '#34CB79'
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    height: '15%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
})