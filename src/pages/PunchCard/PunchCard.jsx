import React, { Component } from 'react';
import DetailTable from './components/DetailTable';
import ContentEditor from './components/ContentEditor';
import {withRouter} from "react-router-dom";
import NebUtils from "../../../util/NebUtils";

@withRouter
export default class PunchCard extends Component {
  static displayName = 'PunchCard';

  constructor(props) {
    super(props);
    this.state = {
      txHash: this.props.match.params.txHash,
      kqDay: null,
    }
  }

  componentDidMount() {
    const txHash = this.state.txHash;
    NebUtils.userCallAxios(
      "queryKqDayInfo", `["${txHash}"]`,
      resp => {
        if (resp) {
          this.setState({
            kqDay: resp,
          })
        }
      }
    )
  }

  render() {

    return (
      <div className="punch-card-page">
        <DetailTable kqDay={this.state.kqDay}/>
        <ContentEditor kqTxHash={this.state.txHash}/>
      </div>
    );
  }
}
