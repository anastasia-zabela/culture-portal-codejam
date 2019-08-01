import React, { Component } from 'react';
import Modal from './modal';
import YouTube from 'react-youtube';

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
        <button onClick={this.openModal}>Show modal</button>
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
