import React, { use, useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { styles } from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

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
                    style={styles.input} />
                <MaterialIcons 
                name="email"
                size={20}
                color={themas.colors.gray}
                 />

            </View>
            <Text style={styles.titleinput}>SENHA</Text>
             <View style={styles.boxinput}>  
                <TextInput 
                    style={styles.input} />
                <MaterialIcons 
                name="remove-red-eye"
                size={20}
                color={themas.colors.gray}
                 />

            </View>
        </View>
        <View style={styles.boxbottom}> 
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.textBotton}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
    </View>
   ) 
}