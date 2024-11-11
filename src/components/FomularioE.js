import React, {useState} from 'react';
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const FomularioE = ({modalVisibleEqupo, setModalisibleEquipo,  equipos, setEquipos}) => {
    const[equipo, setEquipo] = useState('');
    const[nombre, setNombreEquipo] = useState('');
    const[cantidad, setCantidadEquipo] = useState('');
    const[color, setColorEquipo] = useState('');
    const[engargado, setNombreEncargado] = useState('');

    
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
          <View style={style.campo}>

          </View>
          </ScrollView>
        </SafeAreaView>
        
        
    </Modal>
  )
};
const style = StyleSheet.create({
  contenido: {
    backgroundColor: '#2860d9',
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
  label: {
    color: '#FFF',
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
  btnCitaNueva: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: '#054e9c',
    textAlign: 'center',
    fontWeight: '900',
    fontsize: 16,
    textTransform: 'uppercase',
  },
});
export default FomularioE;
