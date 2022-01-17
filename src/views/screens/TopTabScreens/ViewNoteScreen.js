import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import ViewNoteScreenStyles from '../../../styles/screens/TopTabScreens/ViewNoteScreenStyles';
import {connect} from 'react-redux';
import GetNotes from '../../../process/ViewNoteProcess';
import {UpdateViewNotes} from '../../../actions/ViewNoteAction';
import {bindActionCreators} from 'redux';
import ViewNote from '../../../assets/icons/viewnote.svg';
import Colors from '../../../styles/Colors';

class ViewNoteScreen extends Component {
  constructor() {
    super();
    this.state = {
      NoteTableDetails: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', async () => {
      console.log('Add Note Screen');
      await GetNotes(this.props.userdetails.QRId, NoteTableDetails => {
        console.log('NoteTableDetails' + JSON.stringify(NoteTableDetails));
        this.setState({
          NoteTableDetails: NoteTableDetails,
        });
      });

      this.props.UpdateViewNotes(this.state.NoteTableDetails);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    //console.log(
    //'View Note Screen Props : ',
    // JSON.stringify(this.props.usernotes.NoteList),
    //);
    return (
      <View style={ViewNoteScreenStyles.mainContainer}>
        <View style={ViewNoteScreenStyles.flatlistView}>
          {this.props.usernotes.NoteList &&
          this.props.usernotes.NoteList.length > 0 ? (
            <FlatList
              data={this.props.usernotes.NoteList}
              renderItem={({item}) => (
                <View style={ViewNoteScreenStyles.CardView}>
                  <View style={ViewNoteScreenStyles.topView}>
                    <Text style={ViewNoteScreenStyles.topViewText}>
                      {item.Content}
                    </Text>
                  </View>
                  <View style={ViewNoteScreenStyles.bottomView}>
                    <Text style={ViewNoteScreenStyles.bottomViewText}>
                      {item.Date}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.ID}
            />
          ) : (
            <View style={ViewNoteScreenStyles.ViewBlank}>
              <ViewNote height={75} width={75} fill={Colors.GREEN_COLOR} />

              <Text style={ViewNoteScreenStyles.BlankText}>
                No result to show
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  usernotes: state.usernotes,
  userdetails: state.userdetails,
});

const mapDispatchToProps = dispatch => ({
  UpdateViewNotes: bindActionCreators(UpdateViewNotes, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewNoteScreen);
