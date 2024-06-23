import { useRoute } from '@react-navigation/native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { Divider, Text } from 'react-native-paper';

import { MineralInfoScreenRouteProp } from '../../../navigationTypes';
import * as S from './styles';

const MineralInfoScreen = () => {
  const route = useRoute<MineralInfoScreenRouteProp>();
  const { mineral } = route.params;

  return (
    <S.Container>
      <Swiper showsPagination={false} loop={false}>
        <S.CardContainer>
          <S.LeftContent>
            <S.StyledImage
              source={{ uri: mineral.image_url }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{mineral.name}</Text>
          </S.LeftContent>
          <S.RightContent>
            <Text style={{ fontSize: 16 }}>{mineral.category}</Text>
            <Divider />
            <Text style={{ fontSize: 16 }}>{mineral.color}</Text>
          </S.RightContent>
        </S.CardContainer>

        <S.CardContainer>
          <Text>{mineral.description_paragraph}</Text>
        </S.CardContainer>
      </Swiper>
    </S.Container>
  );
};

export default MineralInfoScreen;
