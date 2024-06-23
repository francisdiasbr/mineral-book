import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';

import { MineralInfoScreenRouteProp } from '../../navigation/navigationTypes';
import * as S from './styles';

const MineralPropertiesScreen = () => {
  const route = useRoute<MineralInfoScreenRouteProp>();
  const { mineral } = route.params;

  const mineralGeneral = [
    { label: 'Category', value: mineral.category },
    { label: 'Formula', value: mineral.formula },
    { label: 'Ima Symbol', value: mineral.ima_symbol },
    { label: 'Strunz Classification', value: mineral.strunz_classification },
    { label: 'Dana Classification', value: mineral.dana_classification },
    { label: 'Crystal System', value: mineral.crystal_system },
    { label: 'Space Group', value: mineral.space_group },
    { label: 'Unit Cell', value: mineral.unit_cell },
  ];

  const mineralIdentification = [
    { label: 'Cleavage', value: mineral.cleavage },
    { label: 'Fracture', value: mineral.fracture },
    { label: 'Mohs Scale', value: mineral.mohs_scale },
    { label: 'Luster', value: mineral.luster },
    { label: 'Streak', value: mineral.streak },
    { label: 'Diaphaneity', value: mineral.diaphaneity },
    { label: 'Specific Gravity', value: mineral.specific_gravity },
    { label: 'Optical Properties', value: mineral.optical_properties },
    { label: 'Ultraviolet Fluorescence', value: mineral.ultraviolet_fluorescence },
    { label: 'Absorption Spectra', value: mineral.absorption_spectra },
  ];

  return (
    <S.Container>
      <Card style={{ height: '90%', width: '100%' }}>
        <Card.Title title={mineral.name} />
        <ScrollView>
          {mineral.image_url && (
            <Card.Cover
              style={{ padding: 16, width: '100%' }}
              source={{ uri: mineral.image_url }}
            />
          )}
          <Card.Content>
            <Text variant='titleLarge' style={{marginBottom: 8}}>General</Text>
            {mineralGeneral.map(({ label, value }, index) => (
              value ? (
                <React.Fragment key={index}>
                  <Text variant='titleMedium'>{label}</Text>
                  <Text variant='bodyMedium' style={{marginBottom: 16}}>{value}</Text>
                </React.Fragment>
              ) : null
            ))}
            <Text variant='titleLarge' style={{marginBottom: 8}}>Identification</Text>
            {mineralIdentification.map(({ label, value }, index) => (
              value ? (
                <React.Fragment key={index}>
                  <Text variant='titleMedium'>{label}</Text>
                  <Text variant='bodyMedium' style={{marginBottom: 16}}>{value}</Text>
                </React.Fragment>
              ) : null
            ))}
          </Card.Content>
        </ScrollView>
      </Card>
    </S.Container>
  );
};

export default MineralPropertiesScreen;
