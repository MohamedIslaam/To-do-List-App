import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React from 'react'

const TopBar = ({ value, setValue, search, setSearch, handleSubmit }) => {
  return (
    <View>
      <View style={styles.nav}>
        <Text style={{ color: '#E0E0E0', fontSize: 20 }}>To Do App</Text>
      </View>
      <View style={styles.input}>
        <View style={{ flexDirection: 'row', columnGap: 10 }}>
          <TextInput
            placeholder='Add tasks'
            placeholderTextColor={'#B0B0B0'}
            value={value}
            onChangeText={setValue}
            style={styles.field}
          />
          <TouchableOpacity
            style={styles.outbtn}
            onPress={handleSubmit}
          >
            <Text style={{ color: '#FFFFFF' }}>Add Task</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder='Search the tasks'
          placeholderTextColor={'#B0B0B0'}
          style={[styles.field, { width: '100%' }]}
        />
      </View>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  nav: {
    padding: 20,
    backgroundColor: '#2A2D3E'
  },
  input: {
    padding: 15,
    backgroundColor: '#1C1F2E',
    rowGap: 10
  },
  field: {
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    color: '#E0E0E0',
    borderColor: '#404A6B',
    padding: 10
  },
  outbtn: {
    backgroundColor: '#008080',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10
  }
})
