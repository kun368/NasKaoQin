import React, { Component } from 'react';
import ContentEditor from './components/ContentEditor';

export default class Create extends Component {
  static displayName = 'Create';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="create-page">
        <ContentEditor />
      </div>
    );
  }
}
