import React, { Component } from 'react';
import Modal from './modal';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
class ModalButton extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { videoID } = this.props;
    return (
      <>
        <button type="button" className="btn btn-primary"
          onClick={this.openModal}
        ><FontAwesomeIcon icon={faYoutube} /> YouTube</button>
        <Modal
          title="Youtube video"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
        >
          <YouTube
            videoId={videoID}
            opts={{
              width: '640px',
              height: '480px'
            }}
          />
        </Modal>
      </>
    );
  }
}

export default ModalButton;
