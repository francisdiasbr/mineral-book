import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HelperText, Text, TextInput } from 'react-native-paper';

import { DispatchType, RootState } from '../../app/store';
import {
  clearMinerals,
  fetchMinerals,
} from '../../features/mineralsSearchSlice';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { MineralInfoScreenNavigationProp } from '../../../navigationTypes';

const MineralSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch<DispatchType>();

  const navigation = useNavigation<MineralInfoScreenNavigationProp>();
  const mineralsSearch = useSelector(
    (state: RootState) => state.mineralsSearch
  );

  const handleSearchMineral = (searchTerm: string) => {
    if (searchTerm.trim().length >= 3) {
      dispatch(fetchMinerals(searchTerm));
    }
  };

  const hasErrors = () => searchTerm.length < 3 && searchTerm.length > 0;

  return (
    <S.Container>
      <Text variant='headlineSmall'>Mineral search</Text>
      <Text variant='titleSmall'>Search for a mineral</Text>
      <S.Input>
        <TextInput
          onChangeText={(newText) => {
            setSearchTerm(newText);
            if (newText.trim().length >= 3) {
              handleSearchMineral(newText);
            } else {
              dispatch(clearMinerals());
            }
          }}
          value={searchTerm}
          placeholder='Type to search'
          style={{ marginTop: 32, width: '100%' }}
        />
        <HelperText type='info' visible={hasErrors()}>
          You need to type at least three letters
        </HelperText>
      </S.Input>
      {mineralsSearch.status === 'succeeded' &&
        Array.isArray(mineralsSearch.minerals) && (
          <S.StyledScrollView>
            {mineralsSearch.minerals.map((item: any, index: number) => (
              <S.StyledTouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('MineralInfo', { mineral: item })
                }
              >
                <Text variant='bodyLarge'>{item.name}</Text>
              </S.StyledTouchableOpacity>
            ))}
          </S.StyledScrollView>
        )}
    </S.Container>
  );
};

export default MineralSearch;
