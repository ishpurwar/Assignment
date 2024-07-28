// recoil/atoms.ts
import { atom } from 'recoil';

export const preferenceState = atom({
  key: 'preferenceState',
  default: '',
});

export const filtersState = atom({
  key: 'filtersState',
  default: { start: 0, end: 11 },
});

export const selectedChartsState = atom({
  key: 'selectedChartsState',
  default:'all',
});
