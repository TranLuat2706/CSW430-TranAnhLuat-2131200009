import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';

const App = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = (num: string) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() =>
              isNaN(Number(item)) ? handleOperatorInput(item) : handleNumberInput(item)
            }>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {['4', '5', '6', '*'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() =>
              isNaN(Number(item)) ? handleOperatorInput(item) : handleNumberInput(item)
            }>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {['1', '2', '3', '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() =>
              isNaN(Number(item)) ? handleOperatorInput(item) : handleNumberInput(item)
            }>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {['0', 'C', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.button,
              item === '=' ? { backgroundColor: '#f39c12' } : {},
              item === 'C' ? { backgroundColor: '#e74c3c' } : {},
            ]}
            onPress={() => {
              if (item === 'C') handleClear();
              else if (item === '=') handleEqual();
              else if (isNaN(Number(item))) handleOperatorInput(item);
              else handleNumberInput(item);
            }}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default App;
