import * as React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({navigation}) => {

	return (
		<View style={styles.container}>
			<Button title="Calculator" onPress={() => navigation.push('Calculator')} />
			<Button title="Notes" onPress={() => navigation.push('Notes')} />
		</View>
	);
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		height: '20%',
		margin: 10
	}
})