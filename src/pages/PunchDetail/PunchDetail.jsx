import React, { Component } from 'react';
import SimpleTable from './components/SimpleTable';
import DetailTable from "../PunchCard/components/DetailTable/DetailTable";
import {withRouter} from "react-router-dom";
import NebUtils from "../../../util/NebUtils";

@withRouter
export default class PunchDetail extends Component {
  static displayName = 'PunchDetail';

  constructor(props) {
    super(props);
    this.state = {
      txHash: this.props.match.params.txHash,
      kqDay: null,
      kqCards: [],
    };
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
    );
    NebUtils.userCallAxios(
      "queryKqCards", `["${txHash}"]`,
      resp => {
        if (resp) {
          this.setState({
            kqCards: resp,
          })
        }
      }
    );
  }

  render() {
    return (
      <div className="punch-detail-page">
        <DetailTable kqDay={this.state.kqDay}/>
        <SimpleTable kqCards={this.state.kqCards}/>
      </div>
    );
  }
}
