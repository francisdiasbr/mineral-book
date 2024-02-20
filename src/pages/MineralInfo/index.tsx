import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

import { Text } from 'react-native';

import * as S from './styles';

  // Defina os tipos para os parâmetros das rotas
  type RootStackParamList = {
    MineralInfo: {
      name: string;
      description?: string;
      image_url?: string;
    };
  };
  
  // Defina o tipo para a prop 'route'
  type MineralInfoScreenRouteProp = RouteProp<RootStackParamList, 'MineralInfo'>;
  
  // Defina o tipo para a prop 'navigation'
  type MineralInfoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MineralInfo'>;

  
const MineralInfoScreen = () => {
  const route = useRoute<MineralInfoScreenRouteProp>();
  const navigation = useNavigation<MineralInfoScreenNavigationProp>();
  const { name, description, image_url } = route.params;

  // Configura o título no header
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({ name });
  // }, [navigation, name]);

  return (
    <S.Container>
      <Text>{name}</Text>
      <Text>{description}</Text>
      {image_url && (
        <S.StyledImage
          source={{ uri: image_url }}
        />
      )}
    </S.Container>
  );
};

export default MineralInfoScreen;

