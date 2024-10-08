import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { HelperText, Text, TextInput } from 'react-native-paper';

import {
  clearMinerals,
  fetchMinerals,
} from '../../lib/features/searchMineralsSlice';
import * as S from './styles';

const MineralSearch = ({ navigation }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const mineralsSearch = useAppSelector(state => state.searchMinerals);

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
