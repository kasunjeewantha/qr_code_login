// React Native NetInfo
// https://aboutreact.com/react-native-netinfo/

// import React in our code
import React, { Component } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

export default class CheckNetwork extends Component {
    // const[netInfo, setNetInfo] = useState('');
    constructor(props) {
        super(props)
        this.state = {
            netInfo: '',
            ipAddress: 'iiiii'
        }
    }
    componentDidMount() {
        // Subscribe to network state updates
        this.unsubscribe = NetInfo.addEventListener((state) => {
            this.setState({
                netInfo: `Connection type: ${state.type}
           Is connected?: ${state.isConnected}
           IP Address: ${state.details.ipAddress}`,
            })
            alert(this.state.netInfo)

        });
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    getNetInfo = async () => {
        let isConnected;
        // To get the network state once
        isConnected = await NetInfo.fetch().then(async (state) => {
            // alert(
            //     `Connection type: ${state.type}
            // Is connected?: ${state.isConnected}
            // IP Address: ${state.details.ipAddress}`,
            // );
            //  alert('\n\nisConnected : ' + state.isConnected + '\ntype : ' + state.type + '\nip address : ' + state.details.ipAddress + '\n\n')

            return state.isConnected

        });
        console.log('Network Connection ' + isConnected)
        //alert(ipAddress)
        return await isConnected
        //return ip
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.container}>
                    <Text style={styles.header}>
                        React Native NetInfo
          {'\n'}
          To Get NetInfo information
        </Text>
                    <Text style={styles.textStyle}>
                     
                    </Text>
                    <Button
                        title="Get more detailed NetInfo"
                        onPress={this.getNetInfo()}
                    />
                </View> */}
            </SafeAreaView >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        marginTop: 30,
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        paddingVertical: 20,
    },
});




const checkNetwork = new CheckNetwork()
export { checkNetwork }