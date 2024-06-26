import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchRandomContact } from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import colors from '../utils/colors';

const Profile = ({route}) => {

    const {contact} = route.params;

    /*
    useEffect(() => {
        fetchRandomContact().then(
            contact => setContact(contact)
        )
    }, []);*/

    const {avatar, name, email, phone, cell} = contact;

  return (
    <View style={styles.container}>
        <View style={styles.avatarSection}>
            <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
            <DetailListItem icon="mail" title="Email" subtitle={email} />
            <DetailListItem icon="old-phone" title="Work" subtitle={phone} />
            <DetailListItem icon="phone" title="Personal" subtitle={cell} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },

    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default Profile