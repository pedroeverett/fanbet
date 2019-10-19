import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const ResultModal = ({onClick, open, fppg, message, buttonLabel}) => (
  <Modal open={open} centered={false}>
    <Header icon='clipboard' content='Your result this time was...' />
    <Modal.Content>
      <Modal.Description>
        <Header>{message}</Header>
        <h4>
          Your player FPPG score is: {fppg}
        </h4>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted onClick={onClick}>
        {buttonLabel}
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ResultModal;