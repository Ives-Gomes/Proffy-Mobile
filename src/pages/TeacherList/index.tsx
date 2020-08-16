import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

import api from '../../services/api';
import Favorites from '../Favorites';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          },
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>

            <View style={styles.input}>
              <Picker
                selectedValue={subject}
                onValueChange={(text) => setSubject(text)}
              >
                <Picker.Item label="Artes" value="Artes" />
                <Picker.Item label="Biologia" value="Biologia" />
                <Picker.Item label="Ciências" value="Ciências" />
                <Picker.Item label="Educação Física" value="Educação Física" />
                <Picker.Item label="Física" value="Física" />
                <Picker.Item label="Geografia" value="Geografia" />
                <Picker.Item label="História" value="História" />
                <Picker.Item label="Matemática" value="Matemática" />
                <Picker.Item label="Português" value="Português" />
                <Picker.Item label="Química" value="Química" />
              </Picker>
            </View>

            {/* <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
            /> */}

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <View style={styles.input}>
                  <Picker
                    selectedValue={week_day}
                    onValueChange={(text) => setWeekDay(text)}
                  >
                    <Picker.Item label="Domingo" value={0} />
                    <Picker.Item label="Segunda-feira" value={1} />
                    <Picker.Item label="Terça-feira" value={2} />
                    <Picker.Item label="Quarta-feira" value={3} />
                    <Picker.Item label="Quinta-feira" value={4} />
                    <Picker.Item label="Sexta-feira" value={5} />
                    <Picker.Item label="Sábado" value={6} />
                  </Picker>
                </View>

                {/* <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                /> */}
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <View style={styles.input}>
                  <Picker
                    selectedValue={time}
                    onValueChange={(text) => setTime(text)}
                  >
                    <Picker.Item label="06:00" value="06:00" />
                    <Picker.Item label="07:00" value="07:00" />
                    <Picker.Item label="08:00" value="08:00" />
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="10:00" value="10:00" />
                    <Picker.Item label="11:00" value="11:00" />
                    <Picker.Item label="12:00" value="12:00" />
                    <Picker.Item label="13:00" value="13:00" />
                    <Picker.Item label="14:00" value="14:00" />
                    <Picker.Item label="15:00" value="15:00" />
                    <Picker.Item label="16:00" value="16:00" />
                    <Picker.Item label="17:00" value="17:00" />
                    <Picker.Item label="18:00" value="18:00" />
                    <Picker.Item label="19:00" value="19:00" />
                    <Picker.Item label="20:00" value="20:00" />
                  </Picker>
                </View>

                {/* <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                /> */}
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
