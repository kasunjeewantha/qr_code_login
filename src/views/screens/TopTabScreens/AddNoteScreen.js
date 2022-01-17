import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import AddNoteScreenStyles from '../../../styles/screens/TopTabScreens/AddNoteScreenStyles';
import MainTextInput from '../../components/MainTextInput';
import Button from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Colors from '../../../styles/Colors';
import {ValidateADDNotes} from '../../../actions/AddNoteActions';

class AddNoteScreen extends Component {
  constructor() {
    super();
    this.state = {
      note: '',
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', async () => {
      this.setState({
        note: '',
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleNotes = value => {
    this.setState({
      note: value,
    });
  };

  SubmitButton = async () => {
    this.props.ValidateADDNotes(this.state.note, this.props.userdetails.QRId);
  };

  render() {
    return (
      <>
        <View style={AddNoteScreenStyles.mainContainer}>
          <KeyboardAwareScrollView
            behavior="padding"
            contentContainerStyle={AddNoteScreenStyles.KeyboardAwareScrollView}>
            <View style={AddNoteScreenStyles.textInputView}>
              <MainTextInput
                displaytitle={true}
                title="Note"
                value={this.state.note}
                placeholder={'Add Notes'}
                placeholderTextColor={Colors.INPUT_TEXT_HINT_COLOR}
                onChangeText={this.handleNotes}
                autoFocus={true}
                returnKeyType="next"
                blurOnSubmit={false}
                multiline={true}
              />
            </View>
            <View style={AddNoteScreenStyles.buttonView}>
              <Button
                text={'Submit'}
                buttoncolor={Colors.BUTTON_ACTIVE_GREEN_COLOR}
                textcolor={'white'}
                border={false}
                onPress={() => {
                  this.SubmitButton();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userdetails: state.userdetails,
});

const mapDispatchToProps = dispatch => ({
  ValidateADDNotes: bindActionCreators(ValidateADDNotes, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteScreen);
