import { useProfileStore } from '../profile';

describe('useProfileStore', () => {
  beforeEach(() => {
    // Reset store to initial state before each test
    useProfileStore.setState({
      name: '',
      age: '',
      city: '',
      bio: '',
      intentionHaveFun: false,
      interests: [],
    });
  });

  describe('initial state', () => {
    it('should have empty initial values', () => {
      const state = useProfileStore.getState();
      expect(state.name).toBe('');
      expect(state.age).toBe('');
      expect(state.city).toBe('');
      expect(state.bio).toBe('');
      expect(state.intentionHaveFun).toBe(false);
      expect(state.interests).toEqual([]);
    });
  });

  describe('updateProfile', () => {
    it('should update a single field', () => {
      useProfileStore.getState().updateProfile({ name: 'John' });
      expect(useProfileStore.getState().name).toBe('John');
    });

    it('should update multiple fields at once', () => {
      useProfileStore.getState().updateProfile({
        name: 'Jane',
        age: '25',
        city: 'Madrid',
      });
      const state = useProfileStore.getState();
      expect(state.name).toBe('Jane');
      expect(state.age).toBe('25');
      expect(state.city).toBe('Madrid');
    });

    it('should preserve existing values when updating other fields', () => {
      useProfileStore.getState().updateProfile({ name: 'Alice' });
      useProfileStore.getState().updateProfile({ city: 'Barcelona' });
      const state = useProfileStore.getState();
      expect(state.name).toBe('Alice');
      expect(state.city).toBe('Barcelona');
    });

    it('should update bio field', () => {
      useProfileStore.getState().updateProfile({ bio: 'I love anime and gaming!' });
      expect(useProfileStore.getState().bio).toBe('I love anime and gaming!');
    });

    it('should update intentionHaveFun boolean', () => {
      expect(useProfileStore.getState().intentionHaveFun).toBe(false);
      useProfileStore.getState().updateProfile({ intentionHaveFun: true });
      expect(useProfileStore.getState().intentionHaveFun).toBe(true);
    });
  });

  describe('setInterests', () => {
    it('should set interests array', () => {
      useProfileStore.getState().setInterests(['anime', 'gaming', 'cosplay']);
      expect(useProfileStore.getState().interests).toEqual(['anime', 'gaming', 'cosplay']);
    });

    it('should replace existing interests', () => {
      useProfileStore.getState().setInterests(['anime']);
      useProfileStore.getState().setInterests(['gaming', 'streaming']);
      expect(useProfileStore.getState().interests).toEqual(['gaming', 'streaming']);
    });

    it('should allow setting empty interests array', () => {
      useProfileStore.getState().setInterests(['anime', 'gaming']);
      useProfileStore.getState().setInterests([]);
      expect(useProfileStore.getState().interests).toEqual([]);
    });
  });
});
