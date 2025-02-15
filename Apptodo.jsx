import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from './TodoComp/TopBar'
import ShowCont from './TodoComp/ShowCont';

const Apptodo = () => {
    let [value, setValue] = useState('');
    let [search, setSearch] = useState('');
    let [cont, setCont] = useState([])

    function handleSubmit() {
        let id = cont.length ? (cont[cont.length - 1].id) + 1 : 1
        let newItm = {
            id: id,
            task: value,
            done: false
        }
        setCont([...cont, newItm]);
        setValue('')
    }

    function handleComplete(id, done) {
        let updateItm = cont.map((itm) => (
            id === itm.id ? { ...itm, done: done } : itm
        ))
        setCont(updateItm);
    }

    function handleDelete(id) {
        let newList = cont.filter((itm) => (
            id !== itm.id
        ))
        setCont(newList);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopBar
                value={value}
                setValue={setValue}
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ShowCont
                    cont={cont.filter((itm)=>(
                        ((itm.task).toLowerCase()).includes(search.toLowerCase())
                    ))}
                    setCont={setCont}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                />
            </ScrollView>
        </SafeAreaView>
    );
    
}

export default Apptodo