import { mockProfiles, Profile } from '../mockProfiles';

describe('mockProfiles', () => {
  describe('data structure', () => {
    it('should be an array', () => {
      expect(Array.isArray(mockProfiles)).toBe(true);
    });

    it('should contain profiles', () => {
      expect(mockProfiles.length).toBeGreaterThan(0);
    });
  });

  describe('profile schema validation', () => {
    it('each profile should have required fields', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(profile).toHaveProperty('id');
        expect(profile).toHaveProperty('name');
        expect(profile).toHaveProperty('age');
        expect(profile).toHaveProperty('avatar');
        expect(profile).toHaveProperty('interests');
        expect(profile).toHaveProperty('vibe');
      });
    });

    it('each profile id should be a string', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(typeof profile.id).toBe('string');
      });
    });

    it('each profile name should be a non-empty string', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(typeof profile.name).toBe('string');
        expect(profile.name.length).toBeGreaterThan(0);
      });
    });

    it('each profile age should be a positive number', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(typeof profile.age).toBe('number');
        expect(profile.age).toBeGreaterThan(0);
      });
    });

    it('each profile avatar should be a valid URL string', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(typeof profile.avatar).toBe('string');
        expect(profile.avatar).toMatch(/^https?:\/\//);
      });
    });

    it('each profile interests should be an array of strings', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(Array.isArray(profile.interests)).toBe(true);
        profile.interests.forEach((interest) => {
          expect(typeof interest).toBe('string');
        });
      });
    });

    it('each profile vibe should be either "spicy" or "para pasarlo bien"', () => {
      mockProfiles.forEach((profile: Profile) => {
        expect(['spicy', 'para pasarlo bien']).toContain(profile.vibe);
      });
    });
  });

  describe('profile uniqueness', () => {
    it('all profile ids should be unique', () => {
      const ids = mockProfiles.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });
});
