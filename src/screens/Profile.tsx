import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import { supabase } from '../lib/supabase';
import { useAuth } from '../store/auth';

type ProfileData = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
};

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('id, username, full_name, avatar_url')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        Alert.alert('Failed to load profile', error.message);
      }

      if (data) {
        setProfile(data);
      }

      setIsLoading(false);
    };

    loadProfile();
  }, [user]);

  const handleSave = async () => {
    if (!user || !profile) {
      return;
    }

    setIsSaving(true);
    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      username: profile.username,
      full_name: profile.full_name,
      avatar_url: profile.avatar_url,
    });
    setIsSaving(false);

    if (error) {
      Alert.alert('Failed to update profile', error.message);
    } else {
      Alert.alert('Profile updated');
    }
  };

  if (isLoading) {
    return (
      <View style={{ padding: 24 }}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={{ padding: 24 }}>
        <Text>No profile found.</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Profile</Text>
      <TextInput
        placeholder="Full name"
        value={profile.full_name ?? ''}
        onChangeText={(value) =>
          setProfile((current) =>
            current ? { ...current, full_name: value } : current,
          )
        }
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Username"
        value={profile.username ?? ''}
        onChangeText={(value) =>
          setProfile((current) =>
            current ? { ...current, username: value } : current,
          )
        }
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Avatar URL"
        value={profile.avatar_url ?? ''}
        onChangeText={(value) =>
          setProfile((current) =>
            current ? { ...current, avatar_url: value } : current,
          )
        }
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <Button
        title={isSaving ? 'Saving...' : 'Save changes'}
        onPress={handleSave}
        disabled={isSaving}
      />
    </View>
  );
};

export default Profile;
