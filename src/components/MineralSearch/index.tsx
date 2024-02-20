import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextInput } from 'react-native-paper';

import { DispatchType, RootState } from '../../app/store';
import {
  clearMinerals,
  fetchMinerals,
} from '../../features/mineralsSearchSlice';
import * as S from './styles';

const MineralSearch = ({ navigation }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch<DispatchType>();

  const mineralsSearch = useSelector(
    (state: RootState) => state.mineralsSearch
  );

  const handleSearchMineral = (searchTerm: string) => {
    if (searchTerm.trim().length >= 3) {
      dispatch(fetchMinerals(searchTerm));
    }
  };

  return (
    <S.Container>
      <Text style={{ fontSize: 20 }}>Mineral search</Text>
      <Text>Search for a mineral</Text>
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
        style={{width: '100%'}}
      />
      {mineralsSearch.status === 'succeeded' &&
        Array.isArray(mineralsSearch.minerals) && (
          <S.StyledScrollView>
            {mineralsSearch.minerals.map((item: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('MineralInfo', {
                    name: item.name,
                    description: item.description,
                    image_url: item.image_url,
                  })
                }
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </S.StyledScrollView>
        )}
    </S.Container>
  );
};

export default MineralSearch;
