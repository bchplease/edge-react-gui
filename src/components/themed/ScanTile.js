// @flow

import * as React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import s from '../../locales/strings.js'
import { ScanModal } from '../modals/ScanModal'
import { Airship } from '../services/AirshipInstance'
import { type Theme, type ThemeProps, cacheStyles, withTheme } from '../services/ThemeContext.js'
import { EdgeText } from './EdgeText'

type OwnProps = {
  onScan: string => Promise<void>
}

type Props = OwnProps & ThemeProps

class ScanTileComponent extends React.PureComponent<Props> {
  showScan = async () => {
    const { onScan } = this.props
    const result = await Airship.show(bridge => <ScanModal bridge={bridge} title={s.strings.scan_qr_label} />)
    onScan(result)
  }

  onScanPress = () => {
    this.showScan()
  }

  render() {
    const { theme } = this.props
    const styles = getStyles(theme)
    return (
      <TouchableWithoutFeedback onPress={this.onScanPress}>
        <View style={[styles.tileRow, styles.noVerticalMargin]}>
          <EdgeText style={styles.tileTextBottom}>{s.strings.scan_qr_label}</EdgeText>
          <FontAwesome5 name="expand" style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const getStyles = cacheStyles((theme: Theme) => ({
  tileRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.tileBackground,
    paddingHorizontal: theme.rem(0.75),
    paddingVertical: theme.rem(0.5)
  },
  tileTextBottom: {
    color: theme.primaryText,
    fontSize: theme.rem(1),
    paddingRight: theme.rem(0.75)
  },
  noVerticalMargin: {
    marginVertical: 0
  },
  icon: {
    color: theme.iconTappable,
    fontSize: theme.rem(1)
  }
}))

export const ScanTile = withTheme(ScanTileComponent)
