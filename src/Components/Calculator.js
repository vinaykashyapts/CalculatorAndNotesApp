import * as React from 'react';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = ({navigation}) => {

	const [inputA, setInputA] = React.useState('');
	const [inputB, setInputB] = React.useState('');
	const [result, setResult] = React.useState('');

	const onPress = (operation) => {
    	console.log(operation);

    	if(inputA === '' || inputB === '') {
    		//alert("Enter input");
    		return;
    	}

    	switch(operation) {
  			case 1:
    			setResult(parseInt(inputA) + parseInt(inputB))
    		break;
  			case 2:
		    	setResult(parseInt(inputA) - parseInt(inputB))
		    break;
		    case 3:
		    	setResult(parseInt(inputA) * parseInt(inputB))
		    break;
		    case 4:
		    	setResult(parseInt(inputA) / parseInt(inputB))
		    break;
		  default:
		    break;
		}
  	}

  	const onReset = () => {
  		setResult('');
  		setInputA('');
  		setInputB('');
  	}

	return (
		<View>
			<View>

				<View style={styles.inputContent}>
					<TextInput
							keyboardType={'number-pad'}
							placeholder='Input A'
							onChangeText={a => setInputA(a)}
							maxLength={5}
							value={inputA}
							style={styles.input}
						/>
					<TextInput
							keyboardType={'number-pad'}
							placeholder='Input B'
							onChangeText={b => setInputB(b)}
							maxLength={5}
							value={inputB}
							style={styles.input}
						/>
				</View>

				<View style={styles.operationContent}>
					<View style={styles.operation}>
						<Button title="+" onPress={() => onPress(1) }/>
					</View>
					<View style={styles.operation}>
						<Button title="-" onPress={() => onPress(2) }/>
					</View>
					<View style={styles.operation}>
						<Button title="*" onPress={() => onPress(3) }/>
					</View>
					<View style={styles.operation}>
						<Button title="/" onPress={() => onPress(4) }/>
					</View>
				</View>
				<View style={styles.reusltContent}>
					<Text style={styles.result}>Result : {result}</Text>
					<Button title="Reset" onPress={() => onReset() } />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContent: {
		flexDirection: 'row',
	  	justifyContent: 'space-around',
	  	alignItems: 'stretch',
	  	alignContent: 'stretch',
	  	margin: 10,
	  	marginBottom: 0
	},
	input: {
		flex: 1,
		padding: 10,
		margin: 10,
	  	backgroundColor: '#e6e6e6'
	},
	operationContent: {
		flexDirection: 'row',
	  	justifyContent: 'space-around',
	  	alignItems: 'stretch',
	  	alignContent: 'stretch',
	  	margin: 10,
	  	marginBottom: 0
	},
	operation: {
		flex: 1,
		margin: 10
	},
	reusltContent: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'stretch',
		margin: 10,
		padding: 10
	},
	result: {
		fontSize: 16,
		fontWeight: 'bold',
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#e6e6e6'
	}
});

export default Calculator;

