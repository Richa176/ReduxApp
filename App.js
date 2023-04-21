
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setChangeValueAction } from './Redux/actions/counts';


function App() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const count = useSelector((store) => store.counter.count);
  console.log('counter:-->', count);

  const incrementCount = () => {
    dispatch(increment());
  }

  const decrementCount = () => {
    dispatch(decrement());
  }

  const setChangeValue = (text) => {
    dispatch(setChangeValueAction(text))
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="increment"
          onPress={incrementCount}
        />
        <Text style={styles.countText}>{count}</Text>
        <Button
          title="decrement"
          onPress={() => decrementCount()}
        />
        <Text style={styles.textBox}>
          Set change Value below:-
        </Text>
        <TextInput style={styles.inputBox} onChangeText={(text) => setChangeValue(text)}>
          1
        </TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>Go to next Screen </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  countText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  inputBox: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textBox: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  btn: {
    width: 200,
    height: 40,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 120,
    backgroundColor: 'yellow',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
  }
});


