import React, { Component } from 'react';
import ExcellentHomePage from "./components/ExcellentHomePage/ExcellentHomePage";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import {Dialog} from "@icedesign/base/index";

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      welcomeDialogShow: true,
    };
  }

  onWelcomeDialogClose = () => {
    this.setState({
      welcomeDialogShow: false
    });
  };

  renderWelcomeDialog() {
    return (
      <Dialog
        visible={this.state.welcomeDialogShow}
        onOk={this.onWelcomeDialogClose}
        closable="esc,mask,close"
        onCancel={this.onWelcomeDialogClose}
        onClose={this.onWelcomeDialogClose}
        title="欢迎使用星云考勤系统"
      >
        <p style={{color: 'red'}}>本应用已完美支持：移动端界面自适应 + 移动端扫码考勤 + 移动端钱包交易！</p>
        <p>
          如何避免考勤作弊？<br/>
          如何更加灵活地安排考勤流程？<br/>
          如何更合理有效地分析运用考勤数据？…… <br/>
          我们通过创造性地运用区块链技术，为考勤工具带来了全新的可能。<br/>
          星云考勤系统，基于星云智能合约，数据不可篡改，无法作弊，简化考勤流程<br/>
        </p>
        <p style={{color: 'red'}}>您可以点击“使用帮助”查看详细的考勤使用过程。</p>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="home-page">
        {this.renderWelcomeDialog()}
        <ExcellentHomePage/>
        <ProductInfo/>
      </div>
    );
  }
}
