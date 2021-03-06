// @flow

import * as React from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import s from '../../../../locales/strings.js'
import { PrimaryButton } from '../Buttons/PrimaryButton.ui.js'
import { TertiaryButton } from '../Buttons/TertiaryButton.ui.js'
import Text from '../FormattedText/FormattedText.ui.js'
import { InteractiveModal } from '../Modals/InteractiveModal/InteractiveModal.ui.js'
import { styles } from './PasswordRecoveryReminderModalStyles.js'

type PasswordRecoveryReminderModalOwnProps = {}

type PasswordRecoveryReminderModalStateProps = {
  isVisible: boolean
}

type PasswordRecoveryReminderModalDispatchProps = {
  hidePasswordRecoveryReminderModal: () => void,
  onGoToPasswordRecoveryScene: () => void
}

type PasswordRecoveryReminderModalProps = PasswordRecoveryReminderModalOwnProps &
  PasswordRecoveryReminderModalStateProps &
  PasswordRecoveryReminderModalDispatchProps

export class PasswordRecoveryReminderModalComponent extends React.Component<PasswordRecoveryReminderModalProps> {
  render() {
    const { isVisible, hidePasswordRecoveryReminderModal, onGoToPasswordRecoveryScene } = this.props
    return (
      <InteractiveModal legacy isActive={isVisible} onModalHide={hidePasswordRecoveryReminderModal}>
        <InteractiveModal.Icon>
          <AntDesignIcon style={styles.icon} name="lock" />
        </InteractiveModal.Icon>
        <InteractiveModal.Title>
          <Text>{s.strings.password_recovery_reminder_modal_title}</Text>
        </InteractiveModal.Title>

        <InteractiveModal.Body>
          <InteractiveModal.Description style={{ textAlign: 'center' }}>{s.strings.password_recovery_reminder_modal_message}</InteractiveModal.Description>
        </InteractiveModal.Body>
        <InteractiveModal.Footer>
          <InteractiveModal.Row>
            <InteractiveModal.Item>
              <PrimaryButton onPress={onGoToPasswordRecoveryScene}>
                <PrimaryButton.Text>{s.strings.password_recovery_reminder_modal_set_up}</PrimaryButton.Text>
              </PrimaryButton>
            </InteractiveModal.Item>
          </InteractiveModal.Row>

          <InteractiveModal.Row>
            <InteractiveModal.Item>
              <TertiaryButton onPress={hidePasswordRecoveryReminderModal}>
                <TertiaryButton.Text>{s.strings.password_check_check_later}</TertiaryButton.Text>
              </TertiaryButton>
            </InteractiveModal.Item>
          </InteractiveModal.Row>
        </InteractiveModal.Footer>
      </InteractiveModal>
    )
  }
}
