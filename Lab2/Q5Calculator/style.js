import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    width: '90%',
    height: 100,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 20,
  },
  displayText: {
    color: 'white',
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#2e6d2fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 10,
  },
  buttonText: {
    fontSize: 28,
    color: 'white',
  },
});
