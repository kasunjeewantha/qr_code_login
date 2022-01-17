import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import HomeSummaryScreenStyles from '../../../styles/screens/TopTabScreens/ViewNoteScreenStyles';
import {connect} from 'react-redux';
import GetNotes from '../../../process/AddNoteProcess';
import {UpdateADDNotes} from '../../../actions/AddNoteActions';
import {bindActionCreators} from 'redux';

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

      this.props.UpdateADDNotes(this.state.NoteTableDetails);
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
      <View style={HomeSummaryScreenStyles.mainContainer}>
        <View style={HomeSummaryScreenStyles.flatlistView}>
          {this.props.usernotes.NoteList &&
          this.props.usernotes.NoteList.length > 0 ? (
            <FlatList
              data={this.props.usernotes.NoteList}
              renderItem={({item}) => (
                <View style={HomeSummaryScreenStyles.CardView}>
                  <View style={HomeSummaryScreenStyles.topView}>
                    <Text style={HomeSummaryScreenStyles.topViewText}>
                     {item.Content}
                    </Text>
                  </View>
                  <View style={HomeSummaryScreenStyles.bottomView}>
                    <Text style={HomeSummaryScreenStyles.bottomViewText}>
                     {item.Date}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.ID}
            />
          ) : (
            <View style={HomeSummaryScreenStyles.mainContainer}></View>
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
  UpdateADDNotes: bindActionCreators(UpdateADDNotes, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewNoteScreen);
