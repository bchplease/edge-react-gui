import React, {Component} from 'react'
import {
    View,
    TouchableHighlight,
    Image
} from 'react-native'
import SearchResults from '../../components/SearchResults'
import FormattedText from '../../components/FormattedText'
import ContactImage from '../../../../assets/images/contact.png'
import styles from './style'
import {colors} from '../../../../theme/variables/airbitz'

class ContactSearchResults extends Component {

  render () {
    const filteredArray = this.props.contacts.filter((entry) => (entry.givenName + ' ' + entry.familyName).indexOf(this.props.currentPayeeText) >= 0)

    return (
      <SearchResults
        renderRegularResultFxn={this.renderResult}
        onRegularSelectFxn={this.props.onSelectPayee}
        regularArray={filteredArray}
        usableHeight={this.props.usableHeight}
        style={[{width: '100%', backgroundColor: 'white'}]}
        keyExtractor={this.keyExtractor}
        height={this.props.usableHeight - 32}
        extraTopSpace={-10}
      />
    )
  }

  renderResult = (data, onRegularSelectFxn) => {
    const fullName = data.item.familyName ? data.item.givenName + ' ' + data.item.familyName : data.item.givenName

    return (
      <View style={styles.singleContactWrap}>
        <TouchableHighlight onPress={() => onRegularSelectFxn(fullName, data.item.thumbnailPath)} underlayColor={colors.gray4} style={[styles.singleContact]}>
          <View style={[styles.contactInfoWrap]}>
            <View style={styles.contactLeft}>
              <View style={[styles.contactLogo]} >
                {data.item.thumbnailPath ? (
                  <Image source={{uri: data.item.thumbnailPath}} style={{height: 40, width: 40, borderRadius: 20}} />
                ) : (
                  <Image source={ContactImage} style={{height: 40, width: 40, borderRadius: 20}} />
                )}

              </View>
              <View style={[styles.contactLeftTextWrap]}>
                <FormattedText style={[styles.contactName]}>{fullName}</FormattedText>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  keyExtractor = (item, index) => index
}

export default ContactSearchResults