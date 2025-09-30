import { Dimensions, StyleSheet } from "react-native";  
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        
    },
    boxtop:{
        height:Dimensions.get("window").height/3,
        width:"100%",
        //backgroundColor:"#ff0e0eff",
        alignItems:"center",
        justifyContent:"center",
    },
    boxMid:{
        height:Dimensions.get("window").height/4,
        width:"100%",
        //backgroundColor:"#2ba02bff",
        paddingHorizontal:37,
    },
    boxbottom:{
        height:Dimensions.get("window").height/3,
        width:"100%",   
        //backgroundColor:"#420effff",
        alignItems:"center",
        justifyContent:"center",    
    },
    logo:{
        width:80,
        height:80,
    },
    text:{
        fontWeight:"bold",
        marginTop:40,
        fontSize:18,
    },
    titleinput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20,
    },
    boxinput:{
        width:"100%",
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:5,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray,
    },
    input:{
        height:"100%",
        width:'90%',
        //backgroundColor:"red",
        borderRadius:40,
        paddingLeft:5,
    },
    button:{
        width:200,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textButton:{
        fontSize:16,
        color:'white',
    },
    textBotton:{
        fontSize:16,
        color:themas.colors.gray,
    },
 
});