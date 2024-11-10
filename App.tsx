import { useState } from 'react';
import React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import FomularioE from './src/components/FomularioE';
import FormularioCT from './src/components/FormularioCT';

const App = () => {
  const[modalVisibleEqupo, setModalisibleEquipo] = useState(false);
  const[modalVisibleCate, setModalisibleCate] = useState(false);
  const[equipos, setEquipos] = useState([]);
  const[categorias, setCategorias] = useState([]);

  return (
    <SafeAreaView style={styles.conteiner}>
      <Text style={styles.titulo}>
        Liga Deportiva Guatemala
      </Text>
      <Pressable style={styles.botonNuevaCita}
      onPress={() => setModalisibleEquipo(!modalVisibleEqupo)}>
        <Text style={styles.btnTextoNuevaCita}>Nuevo Equipo</Text>
      </Pressable>
      <Pressable style={styles.botonNuevaCita}
      onPress={() => setModalisibleCate(!modalVisibleCate)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Categoria</Text>
      </Pressable>
      <FomularioE 
      modalVisibleEqupo={modalVisibleEqupo}
      setModalisibleEquipo={setModalisibleEquipo}
      equipos={equipos}
      setEquipos={setEquipos}
      />
      <FormularioCT 
      modalVisibleCate={modalVisibleCate}
      setModalisibleCate={setModalisibleCate}
      categorias={categorias}
      setCategorias={setCategorias}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#f6f7f8',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 45,
    color: '#030303',
    fontWeight: '600',
    fontStyle: 'italic'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#054e9c',
  },
  botonNuevaCita:{
   backgroundColor: '#054e9c',
   padding: 15,
   marginTop: 30,
   marginHorizontal: 20,
   borderRadius: 10,
  },
  btnTextoNuevaCita: {
   textAlign: 'center',
   color: '#FFF',
   fontSize: 18,
   fontWeight: '900',
   textTransform: 'uppercase',
  },
  noPaciente:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  }
});
export default App;

