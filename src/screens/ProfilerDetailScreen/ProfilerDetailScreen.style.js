import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    minHeight: 350,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  imageContainer: {
    height: 70,
    width: 70,
    position: 'absolute',
    left: '50%',
    top: -30,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    transform: [{ translateX: -30 }],
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  headerContent: {
    flex: 1,
  },
  headerDetails: {
    marginTop: 50,

    paddingHorizontal: 24,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileUsername: {
    marginTop: 6,
    color: 'grey',
  },
  socialStatus: {
    flexDirection: 'row',
    // justifyContent: 'center',

    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  socialTextContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    marginRight: 12,
  },
  socialValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 6,
  },
  socialLabel: {
    color: 'grey',
    fontSize: 18,
  },
  mainContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
