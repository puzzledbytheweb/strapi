/**
 *
 * EditViewLink
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Modal, ModalBody } from 'reactstrap';
import P from './components';

// Create link from content-type-builder to content-manager
function EditViewLink(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(prevState => !prevState);

  return (
    <>
      <li>
        <P {...props} onClick={toggleModal}>
          <i className={`fa ${props.icon}`} />
          <FormattedMessage id={props.message.id} />
        </P>
      </li>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalBody>Your form here</ModalBody>
      </Modal>
    </>
  );
}

EditViewLink.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
};

export default EditViewLink;
