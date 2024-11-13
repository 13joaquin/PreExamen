import React, {useState} from 'react';
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Equipo from './Equipo';

const FomularioE = ({modalVisibleEqupo, setModalisibleEquipo,  equipos, setEquipos}) => {
    const[equipo, setEquipo] = useState('');
    const[cantidad, setCantidadEquipo] = useState('');
    const[color, setColorEquipo] = useState('');
    const[engargado, setNombreEncargado] = useState('');
    const handleEquipo = () => {
      if([equipo, cantidad, color, engargado].includes('')){
        Alert.alert('Error', 'Todos los campos son Obligatorios');
        return;
      }
      const nuevoequipo = {
        id: Date.now(),
        equipo,
        cantidad,
        color,
        engargado
      }
      console.log(nuevoequipo);
      setEquipos([...equipos, nuevoequipo]);
      setModalisibleEquipo(!modalVisibleEqupo);
      setEquipo('');
      setCantidadEquipo('');
      setColorEquipo('');
      setNombreEncargado('');
    };
    
  return (
    <Modal animationType='slide' 
    visible={modalVisibleEqupo}>
        <SafeAreaView style={style.contenido}>
          <ScrollView>
          <Text>Desde la ventana de Modal Formulario Equipo</Text>
          <Pressable
            style={style.btnCancelar}
            onPress={() => setModalisibleEquipo(!modalVisibleEqupo)}>
            <Text style={style.btnTextoCancelar}>Cancelar</Text>
          </Pressable>
          <Text style={style.labeltitle}>Formulario Equipo</Text>
          <View style={style.campo}>
            <Text style={style.label}>Nombre del Equipo</Text>
            <TextInput
              style={style.input}
              placeholder='Nombre del Equipo'
              placeholderTextColor={'#666'}
              value={equipo}
              onChangeText={setEquipo}
            />
          </View>
          <View style={style.campo}>
            <Text style={style.label}>Cantidad de Jugadores</Text>
            <TextInput
              style={style.input}
              placeholder="Cantidad de Juegadores"
              placeholderTextColor={'#666'}
              keyboardType="numeric"
              value={cantidad}
              onChangeText={setCantidadEquipo}
            />
          </View>
          <View style={style.campo}>
            <Text style={style.label}>Color de Equipo</Text>
            <TextInput
              style={style.input}
              placeholder='Color de Equipo'
              placeholderTextColor={'#666'}
              value={color}
              onChangeText={setColorEquipo}
            />
          </View>
          <View style={style.campo}>
            <Text style={style.label}>Nombre del Encargado</Text>
            <TextInput
              style={style.input}
              placeholder='Nombre del Encargador'
              placeholderTextColor={'#666'}
              value={engargado}
              onChangeText={setNombreEncargado}
            />
          </View>
          <Pressable style={style.btnNueva}
          onPress={handleEquipo}>
            <Text style={style.btnNuevoTexto}>Agregar Equipo</Text>
          </Pressable>
          </ScrollView>
        </SafeAreaView>
        
        
    </Modal>
  )
};
const style = StyleSheet.create({
  contenido: {
    backgroundColor: '#f6f7f8',
    flex: 1,
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#054e9c',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnTextoCancelar: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  labeltitle:{
    color: '#030303',
    marginTop: 15,
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
  },
  label: {
    color: '#030303',
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadio: 10,
  },
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnNueva: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevoTexto: {
    color: '#054e9c',
    textAlign: 'center',
    fontWeight: '900',
    fontsize: 35,
    textTransform: 'uppercase',
  },
});
export default FomularioE;
