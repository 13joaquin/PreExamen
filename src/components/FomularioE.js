import React, {useState} from 'react';
import { Modal, Text } from 'react-native';

const FomularioE = ({modalVisibleEqupo, setModalisibleEquipo,  equipos, setEquipos}) => {
    const[] = useState('');
    const[] = useState('');
    const[] = useState('');
    const[] = useState('');

    
  return (
    <Modal animationType='slide' 
    visible={modalVisibleEqupo}>
        <Text>Desde la ventana de Modal Formulario Equipo</Text>
        
    </Modal>
  )
};

export default FomularioE;
