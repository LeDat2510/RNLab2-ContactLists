import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

const ContactThumbnail = ({name, phone, avatar, textColor, onPress}) => {
 
    const colorStyle = {
        color: textColor,
    };

    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
    <View style={styles.container}>
        <ImageComponent onPress={onPress}>
            <Image source = {{
                uri: avatar,
            }}
            style={styles.avatar}
            />
        </ImageComponent>
        {name !== '' && <Text style={[styles.name, colorStyle]}> {name} </Text>}
        {phone !== '' && (
            <View style={styles.phoneSection}>
                <Entypo name="phone" size={16} style={{color: textColor}}/>
                <Text style={[styles.phone, colorStyle]}> {phone} </Text>
            </View>
        )}
    </View>
  )
}

/*
ContactThumbnail.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
}

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: null,
}*/

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },

    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },

    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    phone: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },

})

export default ContactThumbnail