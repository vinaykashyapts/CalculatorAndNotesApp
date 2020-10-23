import * as React from 'react';

import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';

const Notes = ({navigation}) => {

	const [title, setTitle] = React.useState('');
	const [status, setStatus] = React.useState('');
	const [noteList, setNoteList] = React.useState([]);
	const [filterList, setFilterList] = React.useState([]);
	const [refresh, setRefresh] = React.useState(false);
	const [tabStatus, setTabStatus] = React.useState('All');

	const statusTab = [
		{
			status: 'All'
		},
		{
			status: 'Active'
		},
		{
			status: 'Completed'
		}
	]

	const setStatusFilter = status => {
		if(status !== 'All') {
			setFilterList([...noteList.filter(e => e.status === status)])
		} else {
			setFilterList(noteList)
		}
		setTabStatus(status)
	}

	const onAdd = () => {
		
		if(title === '' || status === '') {
    		//alert("Enter input");
    		return;
    	}
		noteList.push({
			title: title,
			status: status
		})
		
		setFilterList(noteList)
		setRefresh(!refresh)
		setTitle('')
		setStatus('')
	}

	const renderItem = ({item, index}) => {
		return (
			<View key={index} >
				<View style={styles.itemBody}>
					<Text style={styles.itemName}>{item.title}</Text>
					<Text style={styles.itemName}>{item.status}</Text>
				</View>
			</View>
		)
	}

	return (
		<View>
			<View style={styles.container}>
				<View style={styles.inputContent}>
					<TextInput
							placeholder='Title'
							onChangeText={a => setTitle(a)}
							maxLength={10}
							value={title}
							style={styles.inputNoteTitle}
						/>
					<TextInput
							placeholder='Status'
							onChangeText={b => setStatus(b)}
							maxLength={10}
							value={status}
							style={styles.inputNoteStatus}
						/>
					
				</View>
				<View>
					<Button title="Add Note" onPress={() => onAdd()} />
				</View>
				<View style={styles.statusTab}>
					{
						statusTab.map((e,i) => (

							<TouchableOpacity 
								key={i}
								style={[styles.btnTab, tabStatus === e.status && styles.btnTabActive]}
								onPress={() => setStatusFilter(e.status)}
							>
								<Text style={[styles.txtTab, tabStatus === e.status && styles.txtTabActive]}> {e.status} </Text>
							</TouchableOpacity>
						))
					}
				</View>
				<FlatList
					ListHeaderComponent={
						<View style={styles.itemBody}>
							<Text style={styles.itemNameHeader}>Title</Text>
							<Text style={styles.itemNameHeader}>Status</Text>
						</View>
					}
					data={filterList}
					extraData={refresh}
					keyExtractor={(e,i) => i.toString()}
					renderItem={renderItem}

				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
		alignItems: 'stretch',
		justifyContent: 'space-around'
	},
	inputContent: {
		flexDirection: 'row',
	  	justifyContent: 'space-around',
	  	alignItems: 'stretch',
	  	alignContent: 'stretch',
	  	marginBottom: 10
	},
	inputNoteTitle: {
		flex: 1,
		fontSize: 16,
		padding: 10,
		marginEnd: 10,
		backgroundColor: '#e6e6e6'
	},
	inputNoteStatus: {
		flex: 1,
		fontSize: 16,
		padding: 10,
		backgroundColor: '#e6e6e6'
	},
	statusTab: {
		flexDirection: 'row',
		alignSelf: 'center',
	  	backgroundColor: '#e6e6e6',
	  	marginTop: 10
	},
	btnTab: {
		width: Dimensions.get('window').width / 3.5,
		flexDirection: 'row',
		borderWidth: 0.5,
		borderColor: '#EBEBEB',
		padding: 10,
		justifyContent: 'center'

	},
	btnTabActive: {
		backgroundColor: '#f4511e'
	},
	txtTab: {
		fontSize: 16,
		color: '#000'
	},
	txtTabActive: {
		color: '#fff'
	},
	itemContainer: {
		flexDirection: 'row',
		paddingVertical: 15,
		marginBottom: 20
	},
	itemBody: {
		flex: 1,
		flexDirection: 'row',
	  	justifyContent: 'flex-end',
	  	alignItems: 'flex-start',
	  	alignContent: 'flex-start',
		padding: 10,
		margin: 1,
		marginStart: 10,
		marginEnd: 10
	},
	itemName: {
		flex: 1,
		fontSize: 16,
		color: 'grey',
		textAlign: "left"
	},
	itemNameHeader: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 16,
		color: 'grey',
		textAlign: "left"
	}
});

export default Notes;