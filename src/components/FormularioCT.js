import React, {useState} from 'react';
import { Modal, Text } from 'react-native'

const FormularioCT = ({modalVisibleCate, setModalisibleCate, categorias, setCategorias}) => {
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombreCategoria] = useState('');
  const [numero, setNoEqPer] = useState('');
  const [edadmin, setEdadMin] = useState('');
  const [edadmax, setEdadMax] = useState('');
  
  return (
    <Modal animationType='slide'
    visible={modalVisibleCate}>
        <Text>Desde la ventana de Fomualrio Categoria</Text>
    </Modal>
  )
};

export default FormularioCT;
