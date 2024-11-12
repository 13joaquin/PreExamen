import { useState } from 'react';
import React from 'react';
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import FomularioE from './src/components/FomularioE';
import FormularioCT from './src/components/FormularioCT';
import Equipo from './src/components/Equipo';
import Categoria from './src/components/Categoria';

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
      <Pressable style={styles.botonNuevo}
      onPress={() => setModalisibleEquipo(!modalVisibleEqupo)}>
        <Text style={styles.btnTextoNuevo}>Nuevo Equipo</Text>
      </Pressable>
      <Pressable style={styles.botonNuevo}
      onPress={() => setModalisibleCate(!modalVisibleCate)}>
        <Text style={styles.btnTextoNuevo}>Nueva Categoria</Text>
      </Pressable>

      {equipos.length === 0?(
        <Text style={styles.Numero}>Noo hay Equipos</Text>
      ):(
        <FlatList
        style={styles.listado}
        data={equipos}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return(
            <Equipo
            item = {item}/>
          )
        }}
        />
      )
      }
      {categorias.length === 0?(
        <Text style={styles.Numero}>Noo hay categorias</Text>
      ):(
        <FlatList 
          style={styles.listado}
          data={categorias}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return(
              <Categoria
              item = {item}/>
            )
          }}
        />
      )}
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
  botonNuevo:{
   backgroundColor: '#054e9c',
   padding: 15,
   marginTop: 30,
   marginHorizontal: 20,
   borderRadius: 10,
  },
  btnTextoNuevo: {
   textAlign: 'center',
   color: '#FFF',
   fontSize: 18,
   fontWeight: '900',
   textTransform: 'uppercase',
  },
  Numero:{
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

