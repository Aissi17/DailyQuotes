import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'


const OptionButton = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnNavigation} >
            <FontAwesome5 name={name} size={22} color='#267871' />
        </TouchableOpacity>
    )
}

export default OptionButton

const styles = StyleSheet.create({

    btnNavigation: {
        borderWidth: 2,
        borderColor: '#267871',
        borderRadius: 50,
        padding: 15
    }
})
