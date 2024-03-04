import { Text, SafeAreaView, StatusBar, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles'

export function Home() {

  const participants = ['Bruna', 'Nina', 'Natalia', 'Kelly', 'Terezinha', 'Barbara', 'Ana', 'Leticia', 'Marcia', 'Toninho', 'Doca', 'Icaro', 'Jesus', 'Douglas', 'Zete']

  function handleParticipantAdd () {
    console.log("clicou")
  }

  function handleParticipantRemove (name: string) {
    Alert.alert("Remover participante", `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text:  "Sim",
        onPress: () => Alert.alert("Participante removido")
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