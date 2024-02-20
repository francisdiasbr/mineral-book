import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  MineralInfo: {
    name: string;
    description?: string;
    image_url?: string;
  };
};

// Defina o tipo para a prop 'route'
 export type MineralInfoScreenRouteProp = RouteProp<RootStackParamList, 'MineralInfo'>;
  
// Defina o tipo para a prop 'navigation'
export type MineralInfoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MineralInfo'>;