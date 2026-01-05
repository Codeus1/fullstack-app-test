import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import { supabase } from '../lib/supabase';
import { useAuth } from '../store/auth';

const Onboarding: React.FC = () => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleComplete = async () => {
    if (!user) {
      Alert.alert('No authenticated user');
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from('profiles').insert({
      id: user.id,
      full_name: fullName,
      username,
    });
    setIsSubmitting(false);

    if (error) {
      Alert.alert('Failed to save profile', error.message);
    } else {
      Alert.alert('Profile saved');
    }
  };

  return (
    <View style={{ padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Welcome!</Text>
      <TextInput
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <Button
        title={isSubmitting ? 'Saving...' : 'Complete setup'}
        onPress={handleComplete}
        disabled={isSubmitting}
      />
    </View>
  );
};

export default Onboarding;
