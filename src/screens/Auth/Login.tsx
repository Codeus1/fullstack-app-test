import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

import { useAuth } from '../../store/auth';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    setIsSubmitting(true);
    const { error } = await signIn(email.trim(), password);
    setIsSubmitting(false);

    if (error) {
      Alert.alert('Login failed', error.message);
    }
  };

  return (
    <View style={{ padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Login</Text>
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
      <Button
        title={isSubmitting ? 'Signing in...' : 'Sign in'}
        onPress={handleLogin}
        disabled={isSubmitting}
      />
    </View>
  );
};

export default Login;
