import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../theme/colors';

export const AnimeGamingIcons = () => {
  return [
    {
      name: 'game-controller',
      Component: Ionicons,
      color: colors.neon.cyan,
      label: 'Arcade vibes',
    },
    {
      name: 'sword-cross',
      Component: MaterialCommunityIcons,
      color: colors.neon.pink,
      label: 'Battles épicas',
    },
    {
      name: 'pokeball',
      Component: MaterialCommunityIcons,
      color: colors.neon.green,
      label: 'Colecciona momentos',
    },
    {
      name: 'ghost',
      Component: MaterialCommunityIcons,
      color: colors.neon.purple,
      label: 'Misterio nocturno',
    },
  ];
};
