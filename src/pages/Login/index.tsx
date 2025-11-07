import React, { use, useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try{
            setLoading(true);

            if(!email || !password){
                alert("Preencha todos os campos");
                return;
            }
            setTimeout(()=>{
                Alert.alert('Logado com sucesso!')
            },300)

            
        } catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

   return(
    <View style={styles.container}> 
        <View style={styles.boxtop}> 
            <Image 
                source={logo}
                style={styles.logo }
                resizeMode="contain"
            />

            <Text style={styles.text}>Bem vindo de volta!</Text>
        </View>
        <View style={styles.boxMid}> 
            <Text style={styles.titleinput}>ENDEREÇO DE E-MAIL</Text>
            <View style={styles.boxinput}>  
                <TextInput 
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                     />
                <MaterialIcons 
                name="email"
                size={20}
                color={themas.colors.gray}
                 />

            </View>
            <Text style={styles.titleinput}>SENHA</Text>
             <View style={styles.boxinput}>  
                <TextInput 
                    style={styles.input}
                    value={password} 
                    onChangeText={setPassword}
                    />
                <MaterialIcons 
                name="remove-red-eye"
                size={20}
                color={themas.colors.gray}
                 />

            </View>
        </View>
        <View style={styles.boxbottom}> 
            <TouchableOpacity style={styles.button} onPress={()=>getLogin()}>
                {
                    loading?
                        <ActivityIndicator color={'#ffff'} size={"small"}/>
                    :
                        <Text style={styles.textButton}>Entrar</Text>
                }
                
            </TouchableOpacity>
        </View>
        <Text style={styles.textBotton}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
    </View>
   ) 
}