import React, {useState} from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const Equipo = ({item}) => {
    console.log(item);
    const {equipo, cantidad, color, engargado} = item;
    const [modalInformacion, setModalInformacion] = useState(false);
    
    return (
    <View style={style.contenedor}>
      <Text style={style.label}>Nombre del Equipo</Text>
      <Text style={style.texto}>{equipo}</Text>
      <Text style={style.label}>Cantidad de Jugadores</Text>
      <Text style={style.texto}>{cantidad}</Text>
      <Text style={style.label}>Color de Equipo</Text>
      <Text style={style.texto}>{color}</Text>
      <Text style={style.label}>Nombre del Encargado</Text>
      <Text style={style.texto}>{engargado}</Text>
        <View style={style.contenedorBotones}>
          <Pressable style={[style.btn, style.btnEditar]}
            onPress={() => setModalInformacion(true)}>
            <Text style={style.btnTexto}>Ver Informacion</Text>
        </Pressable>
        <Pressable style={[style.btn, style.btnEliminar]}>
           <Text style={style.btnTexto}>Eliminar</Text>
        </Pressable>
         </View>
      <Modal animationType='slide'
        visible={modalInformacion}
        onRequestClose={() => {
        Alert.alert('La ventana se cerro');
        setModalInformacion(!modalInformacion)
      }}>
        <View style={style.centerView}>
          <View style={style.modalView}>
          <Text style={style.label}>Informacion del Equipo</Text>
            <View style={style.campo}>
              <Text style={style.label}>Nombre del Equipo: <Text style={style.texto}>{equipo}</Text></Text>
              <Text style={style.label}>Cantidad de Jugadores: <Text style={style.texto}>{cantidad}</Text></Text>
              <Text style={style.label}>Color de Equipo: <Text style={style.texto}>{color}</Text></Text>
              <Text style={style.label}>Nombre del Encargado: <Text style={style.texto}>{engargado}</Text></Text>
            </View>
            <Pressable style={[style.btn, style.btnEliminar]}
              onPress={() => setModalInformacion(!modalInformacion)}>
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
        backgroundColor: '#0dbdf7',
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
        backgroundColor: '#32af37',
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
export default Equipo;
