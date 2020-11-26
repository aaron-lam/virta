import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'semantic-ui-react';

const ModalBasic = (props) => ReactDOM.createPortal(
  <Modal open onClose={props.onDismiss}>
    <Modal.Header>{props.title}</Modal.Header>
    <Modal.Content>
      {props.content}
    </Modal.Content>
    <Modal.Actions>
      {props.actions}
    </Modal.Actions>
  </Modal>,
  document.querySelector('#modal'),
);

export default ModalBasic;
