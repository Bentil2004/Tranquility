import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyAccountUser from './MyAccountUser';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import LogoutModal from './LogoutModal';

const ManageAccount = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    // Handle the actual logout process here
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack(MyAccountUser)}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Account</Text>
      </View>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate(ChangePassword)}>
        <Icon name="key-outline" size={20} color="#7459AA" style={styles.icon} />
        <Text style={styles.actionText}>Change Password</Text>
        <Icon name="chevron-forward-outline" size={20} color="#7459AA" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate(DeleteAccount)}>
        <Icon name="trash-outline" size={20} color="#7459AA" style={styles.icon} />
        <Text style={styles.actionText}>Delete Account</Text>
        <Icon name="chevron-forward-outline" size={20} color="#7459AA" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
        <Icon name="log-out-outline" size={20} color="#7459AA" style={styles.icon} />
        <Text style={styles.actionText}>Log out</Text>
        <Icon name="chevron-forward-outline" size={20} color="#7459AA" />
      </TouchableOpacity>
      <LogoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#7459AA',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#7459AA',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default ManageAccount;
