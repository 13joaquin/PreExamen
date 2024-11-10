import React, {useState} from 'react';
import { Modal, Text } from 'react-native'

const FormularioCT = ({modalVisibleCate, setModalisibleCate, categorias, setCategorias}) => {
  return (
    <Modal animationType='slide'
    visible={modalVisibleCate}>
        <Text>Desde la ventana de Fomualrio Categoria</Text>
    </Modal>
  )
};

export default FormularioCT;
