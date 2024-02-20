import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Card, Text } from 'react-native-paper';

import { MineralInfoScreenRouteProp } from '../../../navigationTypes';
import * as S from './styles';
import { ScrollView } from 'react-native';

const MineralInfoScreen = () => {
  const route = useRoute<MineralInfoScreenRouteProp>();
  const { name, description, image_url } = route.params;

  return (
    <S.Container>
      <Card style={{ height: '90%', width: '100%' }}>
        <Card.Title title={name}/>
        <ScrollView>
          {image_url && (
            <Card.Cover
              style={{ padding: 16, width: '100%', height: 300 }}
              source={{ uri: image_url }}
            />
          )}
          <Card.Content>
            <Text variant='bodyMedium'>{description}</Text>
          </Card.Content>
        </ScrollView>
      </Card>
    </S.Container>
  );
};

export default MineralInfoScreen;
