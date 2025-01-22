import { proxy, useSnapshot, subscribe } from 'valtio';
import { useEffect } from 'react';

const STORAGE_KEY_bayId = 'current_bay_configuration_id';
const STORAGE_KEY_bayName = 'current_bay_configuration_name';

const state = proxy({
  bayId: localStorage.getItem(STORAGE_KEY_bayId) || '',
  bayName: localStorage.getItem(STORAGE_KEY_bayName) || '',
});

export const useCurrentBay = () => {
  const snap = useSnapshot(state);
  
  useEffect(() => {
    const unsubscribe = subscribe(state, () => {
      console.log('[bayId changed]', state.bayId);
      localStorage.setItem(STORAGE_KEY_bayId, state.bayId);
      console.log('[bayName changed]', state.bayName);
      localStorage.setItem(STORAGE_KEY_bayName, state.bayName);
    });
    
    return () => unsubscribe();
  }, []);
  
  return {
    bayId: snap.bayId,
    setBayId: (newId: string) => {
      console.log('[setBayId]', newId);
      state.bayId = newId;
    },
    bayName: snap.bayName,
    setBayName: (newName: string) => {
      console.log('[setBayName]', newName);
      state.bayName = newName;
    },
  };
}; 