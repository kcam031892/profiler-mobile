import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // height: 200,
    minHeight: 250,
    minWidth: 200,
    padding: 16,
    backgroundColor: '#fff',
    marginRight: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    borderRadius: 8,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    position: 'relative',
  },
  textNumberContainer: {
    backgroundColor: 'blue',
    padding: 6,
    height: 26,
    width: 26,
    borderRadius: 26 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNumber: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  thumbnail: {
    borderRadius: 100,
    height: 100,
    width: 100,
    position: 'absolute',
    left: '30%',
    top: '-10%',
    // transform: [{ translateX: -10 }],
  },
  contentContainer: {
    marginTop: 50,
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileUsername: {
    fontSize: 10,
    marginTop: 4,
    color: 'grey',
  },

  profileValueContainer: {
    marginTop: 16,
    backgroundColor: '#F4F9FD',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  profileValue__top: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileValue__header: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileValue__subHeader: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileValue__slider: {
    marginTop: 8,
  },

  statusContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statusHeading: {
    fontSize: 8,
    color: 'grey',
  },
  statusValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
