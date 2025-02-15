import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ShowCont = ({ cont, handleComplete, handleDelete }) => {
    return (
        <>
            {(cont.length) ?
                (<View style={styles.cont}>
                    {
                        cont.map((val) => (
                            <View key={val.id} style={styles.innercont}>
                                <Text style={[
                                    (!(val.done)) ? { textDecorationLine: 'none' } : { textDecorationLine: 'line-through' },
                                    { fontSize: 18, maxWidth: 120, color: '#E0E0E0' }
                                ]}>
                                    {val.task}
                                </Text>
                                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                                    <TouchableOpacity onPress={() => handleComplete(val.id, !(val.done))}>
                                        <Text style={[styles.allbtn, { backgroundColor: '#008080' }]}>
                                            {!(val.done) ? 'Complete' : 'InComplete'}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleDelete(val.id)}>
                                        <Text style={[styles.allbtn, { backgroundColor: '#B22222' }]}>
                                            Delete
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </View>) :
                (<View style={[styles.cont, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={{ fontSize: 25, color: '#E0E0E0' }}>No task to Display</Text>
                </View>)
            }
        </>
    )
}

export default ShowCont

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#1C1F2E',
        paddingTop: 30,
        paddingHorizontal: 15,
        rowGap: 10,
        flexGrow: 1
    },
    innercont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#404A6B',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#2A2D3E',
        paddingVertical: 30,
        alignItems: 'center'
    },
    allbtn: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        color: '#FFFFFF'
    }
})
