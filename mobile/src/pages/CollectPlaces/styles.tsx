import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: '5%',
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

  noPlacesText: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    paddingHorizontal: '10%',
    textAlign: 'center',
    marginTop: '50%'
  },

  headerTitleText: {
    color: '#6C6C80',
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    // flex: 1,
    height: '70%',
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    marginLeft: '5%',
    marginRight: '5%',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 100,
  },

  mapMarkerContainer: {
    width: 90,
    height: 90,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 4,
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitleContainer: {
    backgroundColor: '#34CB79',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  mapMarkerTitle: {
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },

  mapMarkerArrow: {
    padding: 4,
    transform: [
      { translateY: -4 },
      { rotate: "45deg" },
    ],
    backgroundColor: '#34CB79',
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
})