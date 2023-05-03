import { StyleSheet } from 'react-native';

export const tagsPageStyle = StyleSheet.create({
  tags: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 20,
  },
  chip: {
    margin: 6,
    backgroundColor: 'gainsboro',
  },
});

export const mainPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 20,
  },
  logo: {
    height: 204,
    width: 200,
    alignSelf: 'center',
    margin: 50,
  },
  tags: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  chip: {
    margin: 6,
    backgroundColor: 'gainsboro',
  },
});

export const gradientStyle = StyleSheet.create({
  rectangle: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  gradientLayer: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    zIndex: 2,
  },
});

export const beerListStyle = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export const beerDetailStyle = StyleSheet.create({
  spacing: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  tags: {
    ...mainPageStyle.tags,
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  chip: mainPageStyle.chip,
});
