import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ChatListScreen = props => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.logo}>KENYA1</Text>
            <Button title="Go to Settings" onPress={() => {
                props.navigation.navigate("ChatSettings");
            }}/>

            <View style={styles.main}>
            <View style={styles.linkContainer}>
                <Text style={styles.linkLogo}>logo</Text>
                <Text style={styles.textLogo} >Make your occassion ordinary</Text>
                <Button title='Open' style={styles.buttonLogo}/>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkLogo}>logo</Text>
                <Text style={styles.textLogo} >Make your occassion ordinary</Text>
                <Button title='Open' style={styles.buttonLogo}/>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkLogo}>logo</Text>
                <Text style={styles.textLogo} >Make your occassion ordinary</Text>
                <Button title='Open' style={styles.buttonLogo}/>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkLogo}>logo</Text>
                <Text style={styles.textLogo} >Make your occassion ordinary</Text>
                <Button title='Open' style={styles.buttonLogo}/>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkLogo}>logo</Text>
                <Text style={styles.textLogo} >Make your occassion ordinary</Text>
                <Button title='Open' style={styles.buttonLogo}/>
            </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    logo: {
        fontSize: 40,
        textAlign: 'center'
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
    },
    linkContainer: {
        maxWidth: 200,
        borderRadius: 10
    },
    linkLogo: {
        maxWidth: 200,
        height: 120,
        backgroundColor: 'green', 
        marginBottom: 10
    },
    textLogo: {
        marginBottom: 10
    }
});

export default ChatListScreen;