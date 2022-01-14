import { StyleSheet } from "react-native";


export const GetCommonStyles=(theme) => {
    
    const CommonStyles = StyleSheet.create({
        
        parent_container: {
            flex: 1, 
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        },
        parent_inner_container: {
            flex: 1, 
            backgroundColor: theme.INNER_HEADER_BACKGROUND_COLOR,
        },
        
    });

    return CommonStyles;
}  