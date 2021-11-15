import { StyleSheet } from 'react-native'
import { colors } from '../../stylesGlobal'


export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: colors.purple,
    paddingHorizontal: 22,
    paddingTop: 50,
    paddingBottom: 50,
  },

  backContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: colors.white,
    fontSize: 25,
    lineHeight: 35,
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 10,
  },

  filterContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },

  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: colors.anotherPurple,
    borderBottomWidth: 1,
  },

  filterText: {
    color: colors.lightPurple,
    fontSize: 15,
    width: '90%'
  },

  pickerContainer: {
    marginTop: 15,
  },

  pickerLabel: {
    fontFamily: 'Ubuntu_300Light',
    color: colors.lightPurple,
    marginBottom: 5,
  },

  picker: {
    paddingLeft: 10,
    paddingRight: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 8,
    height: 50
  },

  timePicker: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 8,
    height: 50
  },

  pickerInput: {
    fontSize: 8,
    fontFamily: 'Ubuntu_300Light',
  },

  time: {
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  twoColumns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },

  column1: {
    width: '65%',
    marginTop: 5,
  },

  column2: {
    width: '28%',
    marginTop: 5,
  },

})