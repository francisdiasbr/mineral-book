import React from 'react';

import MineralSearch from '../../components/MineralSearch';
import * as S from './styles';

const HomeScreen = ({ navigation }: any) => {

  return (
    <S.Container>
      <MineralSearch navigation={navigation}/>
    </S.Container>
  );
};

export default HomeScreen;
