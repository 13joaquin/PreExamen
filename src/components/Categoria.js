import { useState } from 'react';
import React from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const Categoria = ({item}) => {
  console.log(item);
  const {nombreCate, numeroCate, edadminCate, edadmaxCate } = item; 
  const [modalInformacionC, setModalInformacionC] = useState(false);

  return (
    <View style={style.contenedor}>
      <Text style={style.label}>Nombre de la Categoria</Text>
      <Text style={style.texto}>{nombreCate}</Text>
      <Text style={style.label}>Numero total de Equipos permitidos</Text>
      <Text style={style.texto}>{numeroCate}</Text>
      <Text style={style.label}>Edad Minima</Text>
      <Text style={style.texto}>{edadminCate}</Text>
      <Text style={style.label}>Edad Maxima</Text>
      <Text style={style.texto}>{edadmaxCate}</Text>
        <View style={style.contenedorBotones}>
          <Pressable style={[style.btn, style.btnEditar]}
          onPress={() => setModalInformacionC(true)}>
            <Text style={style.btnTexto}>Ver Informacion</Text>
          </Pressable>
          <Pressable style={[style.btn, style.btnEliminar]}>
            <Text style={style.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      <Modal animationType='slide'
      visible={modalInformacionC}
      onRequestClose={() => {
        Alert.alert('La ventana se cerro');
        setModalInformacionC(!modalInformacionC)
      }}>
        <View style={style.centerView}>
          <View style={style.modalView}>
          <Text style={style.label}>Informacion de la Categoria</Text>
            <View style={style.campo}>
              <Text style={style.label}>Nombre de la Categoria: <Text style={style.texto}>{nombreCate}</Text></Text>
              <Text style={style.label}>Numero total de Equipos permitidos: <Text style={style.texto}>{numeroCate}</Text></Text>
              <Text style={style.label}>Edad Minima: <Text style={style.texto}>{edadminCate}</Text></Text>
              <Text style={style.label}>Edad Maxima: <Text style={style.texto}>{edadmaxCate}</Text></Text>
            </View>
            <Pressable style={[style.btn, style.btnEliminar]}
              onPress={() => setModalInformacionC(!modalInformacionC)}>
                <Text style={style.btnTexto}>Cerrar</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
};
const style = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f6f7f8',
       padding: 20,
       borderBlockColor: '#054e9c',
       borderBottomWidth: 1,
    },    
    label: {
        color: '#054e9c',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10,
      },
    texto: {
        textTransform: 'uppercase',
        color: '#054e9c',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10,
      },
    fecha: {
        color: '#054e9c',
        fontSize: 16,
      },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
      },
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
    btnTexto:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF',
      },
    btnEditar:{
        backgroundColor: '#F59E0B',
      },
    btnEliminar:{
        backgroundColor: '#EF4444',
      },
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    campo: {
        marginBottom: 10,
    },
});
export default Categoria;
