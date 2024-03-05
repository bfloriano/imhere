import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles'

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd () {
    if (participants.includes(participantName)) {
      return Alert.alert('Erro ao adicionar', 'Esse participante ja está cadastrado')
    } 

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove (name: string) {
    Alert.alert("Remover participante", `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text:  "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: 'cancel'
      }

    ])
    
  }

  return(
    <View style={styles.safeArea}>
      <Text style={styles.title}>
        Nome do Evento
      </Text>
      <Text style={styles.bodyText}>
        hello react native, lets make some milions
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do Participante' 
          placeholderTextColor="#6b6b6b" 
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyComponent}>
            Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>       
  )
}