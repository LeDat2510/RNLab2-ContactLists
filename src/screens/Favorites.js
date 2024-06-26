import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts } from '../utils/api'
import ContactThumbnail from '../components/ContactThumbnail'

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchContacts()
            .then(
                contacts => {
                    setContacts(contacts);
                    setLoading(false);
                    setError(false);
                }
            )
            .catch(
                e => {
                    setLoading(false);
                    setError(false);
                }
            )
    })

    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return (
            <ContactThumbnail avatar={avatar}
                onPress={() => navigation.navigate('Profile', { contact: item })}
            />
        );
    };

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favorites} keyExtractor={keyExtractor} numColumns={3} contentContainerStyle={styles.list} renderItem={renderFavoriteThumbnail}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    list: {
        alignItems: 'center',
    },
})

export default Favorites