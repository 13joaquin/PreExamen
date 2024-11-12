import React, {useState} from 'react';
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Categoria from './Categoria';

const FormularioCT = ({modalVisibleCate, setModalisibleCate, categorias, setCategorias}) => {
  const [nombreCate, setNombreCategoria] = useState('');
  const [numeroCate, setNoEqPer] = useState('');
  const [edadminCate, setEdadMin] = useState('');
  const [edadmaxCate, setEdadMax] = useState('');
  const handleCategoria = () => {
    if([nombreCate, numeroCate, edadminCate, edadmaxCate].includes('')){
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const nuevocategoria ={
      id: Date.now(),
      nombreCate,
      numeroCate, 
      edadminCate,
      edadmaxCate
    }
    console.log(nuevocategoria);
    setCategorias([...categorias, nuevocategoria]);
    setModalisibleCate(!modalVisibleCate);
    setNombreCategoria('');
    setNoEqPer('');
    setEdadMin('');
    setEdadMax('');
  };
  return (
    <Modal animationType='slide'
    visible={modalVisibleCate}>
      <SafeAreaView style={style.contenido}>
        <ScrollView>
          <Text>Desde la ventana de Fomualrio Categoria</Text>
          <Pressable
          style={style.btnCancelar}
          onPress={() => setModalisibleCate(!modalVisibleCate)}>
            <Text style={style.btnTextoCancelar}>Cancelar</Text>
          </Pressable>
          <Text style={style.labeltitle}>Formulario Categoria</Text>
          <View style={style.campo}>
            <Text style={style.label}>Nombre de la Categoria</Text>
            <TextInput
            style={style.input}
            placeholder="Nombre de la Categoria"
            placeholderTextColor={'#666'}
            value={nombreCate}
            onChangeText={setNombreCategoria}
            />
          </View>
          <View style={style.campo}>
            <Text style={style.label}>Numero total de Equipos permitidos</Text>
            <TextInput
            style={style.input}
            placeholder="Numero total de Equipos permitidos"
            placeholderTextColor={'#666'}
            keyboardType="numeric"
            value={numeroCate}
            onChangeText={setNoEqPer}
            />
          </View>
          <View style={style.campo}>
            <Text style={style.label}>Edad Minima</Text>
            <TextInput
            style={style.input}
            placeholder="Edad Min"
            placeholderTextColor={'#666'}
            keyboardType="numeric"
            value={edadminCate}
            onChangeText={setEdadMin}
            />
          </View>
          <View style={style.campo}>
            <Text style={style.label}>Edad Maxima</Text>
            <TextInput
            style={style.input}
            placeholder="Edad Max"
            placeholderTextColor={'#666'}
            keyboardType="numeric"
            value={edadmaxCate}
            onChangeText={setEdadMax}
            />
          </View>
          <Pressable style={style.btnNueva} onPress={handleCategoria}>
            <Text style={style.btnNuevoTexto}>Agregar Paciente</Text>
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
export default FormularioCT;
