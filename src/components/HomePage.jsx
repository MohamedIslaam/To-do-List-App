import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import HomeContainer from './HomeContainer';
import NaviBar from './NaviBar';
import Recents from './Recents';
import { ScrollView } from 'react-native-gesture-handler';
import Transaction_lists from '../Transaction_lists';

const HomePage = () => {
  let [select, setSelect] = useState('Today');
  let [saving, setSaving] = useState(0);
  let [income, setIncome] = useState(0);
  let [expence, setExpence] = useState(0);
  function Today() {
    const today = new Date();
    return Transaction_lists.filter(itm => {
      let trans = new Date(itm.date);
      return (
        trans.getDate() === today.getDate() &&
        trans.getMonth() === today.getMonth() &&
        trans.getFullYear() === today.getFullYear()
      )
    })
  }

  function Week() {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return Transaction_lists.filter(txn => {
      const txnDate = new Date(txn.date);
      return txnDate >= startOfWeek && txnDate <= endOfWeek;
    });
  }

  function Month() {
    const today = new Date();
    return Transaction_lists.filter(itm => {
      let trans = new Date(itm.date);
      return (
        trans.getMonth() === today.getMonth() &&
        trans.getFullYear() === today.getFullYear()
      )
    })
  }

  function Year() {
    const today = new Date();
    return Transaction_lists.filter(itm => {
      let trans = new Date(itm.date);
      return (
        trans.getFullYear() === today.getFullYear()
      )
    })
  }

  function SelectMapper() {
    if (select === 'Today') {
      return Today();
    } else if (select === 'Week') {
      return Week()
    }else if (select === 'Month') {
      return Month()
    }else if (select === 'Year') {
      return Year()
    }
    return []
  }
  
  useEffect(() => {
    let inc = 0;
    let exp = 0;
    let today_savings = SelectMapper();
    for (let index = 0; index < today_savings.length; index++) {
      if (today_savings[index].type === 'income') {
        inc += today_savings[index].amount
      } else if (today_savings[index].type === 'expense') {
        exp += today_savings[index].amount
      }
    }
    setIncome(inc);
    setExpence(exp);
    setSaving(inc - exp)
  }, [select])
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#C6C4C3' }}>
      <View>
        <View style={{ backgroundColor: '#F2F2F2', paddingBottom: 20, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
          <Header />
          <HomeContainer
            saving={saving}
            income={income}
            expence={expence}
            title={select}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 20 }}>
          <NaviBar
            select={select}
            setSelect={setSelect}
          />
          <Recents
            select={select}
            SelectMapper={SelectMapper}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
