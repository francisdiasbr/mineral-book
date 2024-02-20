import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  MineralInfo: {
    mineral: {
      name: string;
      category?: string;
      formula?: string;
      ima_symbol?: string;
      strunz_classification?: string;
      dana_classification?: string;
      crystal_system?: string;
      space_group?: string;
      unit_cell?: string;
      color?: string;
      cleavage?: string;
      fracture?: string;
      mohs_scale?: string;
      luster?: string;
      streak?: string;
      diaphaneity?: string;
      specific_gravity?: string;
      optical_properties?: string;
      ultraviolet_fluorescence?: string;
      absorption_spectra?: string;
      image_url?: string;
    }
  };
};

// Defina o tipo para a prop 'route'
 export type MineralInfoScreenRouteProp = RouteProp<RootStackParamList, 'MineralInfo'>;
  
// Defina o tipo para a prop 'navigation'
export type MineralInfoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MineralInfo'>;