import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center'
    },
    stepScreen: {
        flex: 1
    },
    inputText: {
        height: 40,
        width: '90%',
        position: 'relative',
        top: '35%',
        borderBottomWidth: 0.5
    },
    buttonStyle: {
        position: 'absolute',
        bottom: '10%'
    },
    listStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        margin: 10
    }
})
export default styles
