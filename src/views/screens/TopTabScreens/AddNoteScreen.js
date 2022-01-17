import React, {Component} from 'react';
import {View} from 'react-native';
import AddNoteScreenStyles from '../../../styles/screens/TopTabScreens/AddNoteScreenStyles';
import MainTextInput from '../../components/MainTextInput';
import Button from '../../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {db} from '../../../firebase/firebase-config';
import {collection, addDoc} from 'firebase/firestore/lite';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import moment from 'moment';
import themes from '../../../styles/Thems';
//import {UpdateADDNotes} from '../../../actions/AddNoteActions';
//import GetNotes from '../../../process/AddNoteProcess';

class AddNoteScreen extends Component {
  constructor() {
    super();
    this.state = {
      note: '',
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleNotes = value => {
    this.setState({
      note: value,
    });
  };

  SubmitButton = async () => {
    let CurrentDate = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss')
      .toString();

    const docRef = await addDoc(collection(db, 'notes'), {
      note: this.state.note,
      time: CurrentDate,
      QRId: this.props.userdetails.QRId,
    });
  };

  render() {
    return (
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
              placeholderTextColor={themes.INPUT_TEXT_HINT_COLOR}
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
              buttoncolor={'green'}
              textcolor={'white'}
              border={false}
              onPress={() => {
                this.SubmitButton();
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userdetails: state.userdetails,
});


export default connect(mapStateToProps, '')(AddNoteScreen);
