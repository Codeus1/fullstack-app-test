import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import { useAuth } from '../../store/auth';

const Register: React.FC = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    const { error } = await signUp(email.trim(), password);
    setIsSubmitting(false);

    if (error) {
      Alert.alert('Registration failed', error.message);
    } else {
      Alert.alert('Check your inbox', 'Confirm your email to continue.');
    }
  };

  return (
    <View style={{ padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Create account</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />
      <Button
        title={isSubmitting ? 'Creating...' : 'Create account'}
        onPress={handleRegister}
        disabled={isSubmitting}
      />
    </View>
  );
};

export default Register;
