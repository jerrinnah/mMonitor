import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  CheckBox,
} from 'react-native';
import logo from '../../assets/monitorAppLogosmaller.png';
import { Entypo } from '@expo/vector-icons';
import Button from '../components/Button';





const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.topShape}></View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formTitle}>
          <Text style={styles.titleText}>SignUp</Text>
          <Text style={styles.subTitle}> SignUp to begin</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTitle}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: Tunde Adekare Uju"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex: tundeade2001@gmail.com"
          />
        </View>

        <View style={styles.shortInputs}>
          <View style={styles.input}>
            <View style={styles.dropDwnInput}>
              <Text style={styles.inputTitle}>Area</Text>
              <TextInput
                style={styles.textInputShort}
                placeholder="Select area"
              />
              <Entypo
                style={styles.dropDwn}
                name="chevron-small-down"
                size={24}
                color="black"
              />
            </View>
          </View>
          <View style={styles.input}>
            <View style={styles.dropDwnInput}>
              <Text style={styles.inputTitle}>Polling Unit</Text>
              <TextInput
                style={styles.textInputShort}
                placeholder="Polling Unit"
              />
            </View>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput style={styles.textInput} placeholder="Password" />
            <Entypo
              style={styles.closedEye}
              name="eye-with-line"
              color="grey"
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.checkBoxRow}>
            <TextInput style={styles.checkInput} />
            <Text style={styles.terms}>I accept the terms of Use.</Text>
          </View>
        </View>
        <View>
            
                  {/* <Button onPress={() => navigation.navigate("Success Screen")} /> */}
                  <View style={styles.myBtn} >
                      <Text style={styles.btnText} onPress={()=> navigation.navigate('Login Screen')}>REGISTER</Text>
                  </View>
        </View>

        <View style={styles.bottomInfo}>
          <Text style={styles.bottomInfoText} >
            By continuing, you agree to accept our Privacy Policy & Terms of
            Service.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    height: '15%',
    width: '100%',
    // backgroundColor: 'red',
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: '40%',
    top: 20,
  },
  logo: {
    width: 100,
    left: 10,
  },
  topShape: {
    height: 100,
    width: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 30,
    backgroundColor: 'blue',
    bottom: 40,
    left: 50,
  },

  formContainer: {
    height: '70%',
    width: '90%',
    // backgroundColor: 'red',
    margin: 10,
    padding: 10,
    // alignItems:'center'
  },
  formTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 10,
    color: 'grey',
  },

  input: {
    marginTop: 30,
    // backgroundColor: 'red',
    padding: 5,
  },
  inputTitle: {
    fontWeight: '400',
    bottom: 3,
  },
  textInput: {
    height: 39,
    width: '100%',
    backgroundColor: '#E9E5E5',
    borderRadius: 5,
    padding: 10,
    fontSize: 10,
  },
  textInputShort: {
    height: 39,
    width: '100%',
    backgroundColor: '#E9E5E5',
    borderRadius: 5,
    padding: 20,
    fontSize: 10,
  },
  dropDwn: {
    position: 'absolute',
    top: 25,
    left: 70,
  },

  shortInputs: {
    height: 70,
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordContainer: {
    justifyContent: 'center',
  },
  closedEye: {
    position: 'absolute',
    left: 280,
  },

  checkInput: {
    height: 30,
    width: '10%',
    backgroundColor: '#E9E5E5',
    borderRadius: 5,
    padding: 20,
    fontSize: 10,
  },
  checkBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  terms: {
    left: 10,
    fontSize: 10,
    color: 'grey',
    },
  
    bottomInfo: {
        justifyContent: 'center',
        alignItems:'center'
    },
  
    bottomInfoText: {
        fontSize: 10,
        color: 'grey',
        textAlign: 'center',
        width:'70%'
        
    },
    myBtn: {
            height: 39,
            width: '90%',
            backgroundColor: '#1713BA',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            margin: 15,
    
        },
        btnText: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold'
        }

});
