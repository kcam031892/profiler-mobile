import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    marginTop: 12,
    fontSize: 12,
    color: 'grey',
  },
  card: {
    minWidth: 200,
    marginRight: 8,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  statusContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
