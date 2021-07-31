import React from 'react';
import {View, Button, TextInput} from 'react-native'
import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';
import styles from './Style/GFitStyle'


const gFitScopes = [
"https://www.googleapis.com/auth/fitness.activity.read",
"https://www.googleapis.com/auth/fitness.activity.write"]

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numOfDays: 1
        }
        this.setText = this.setText.bind(this)
    }

    setText = (days) => {
        this.setState({numOfDays : days})
    }

    onPressButton = () => {
         Google.logInAsync({
            iosClientId: '712762819963-ctj5pukpfs8am3l2i5r2qhlg7guocdk8.apps.googleusercontent.com',
            scopes: gFitScopes
          })
          .then((result) => {
            if (result.type === 'success') {
                SecureStore.setItemAsync("accessToken", result.accessToken)
                .then(() => {
                    this.props.navigation.navigate('StepScreen',{
                        numOfDays: this.state.numOfDays,
                      })
                })
              } else {
                alert("Please retry")
              }
          })
          
          
      }

    render(){
        return(<View style = {styles.parent} >
                <TextInput
                        style={styles.inputText}
                        placeholder="Enter number of days"
                        onChangeText={text => this.setText(text)}
                        defaultValue= {this.state.numOfDays}
                        keyboardType = "numeric"
                        returnKeyType='done'
                    />
                    <View style = {styles.buttonStyle}>
                        <Button
                            onPress={this.onPressButton}
                            title="Login with Google"
                        /> 
                    </View>
                 
            </View>)
    }
}