import React, { Component } from 'react';
import { Tab, Feedback } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import './TagMessageList.scss';
import NebUtils from "../../../../../util/NebUtils";

const Toast = Feedback.toast;


export default class TagMessageList extends Component {
  static displayName = 'TagMessageList';

  constructor(props) {
    super(props);
    this.state = {
      days: [],
      cards: [],
    };
  }

  componentDidMount() {
    if (!NebUtils.checkInstalledPlugin()) {
      Toast.error('还未安装Chrome扩展，请在电脑端打开并安装扩展使用！');
      return;
    }
    Toast.success("正在获取数据中，请稍等...");
    NebUtils.getPluginUserAddress(addr => {
      NebUtils.userCallAxios("queryUserAll", `["${addr}"]`, resp => {
        this.setState({
          days: resp.days.reverse(),
          cards: resp.cards.reverse(),
        });
      })
    });
  }

  renderDays = (item, idx) => {
    const url = `/#/PunchDetail/${item.txHash}`;

    return (
      <div style={styles.item} key={idx}>
        <a href={url} style={styles.title}>
          {item.organization} —— {item.title} （{item.forDay}）
        </a>
        <div style={styles.date}>{new Date(item.time).toLocaleDateString()}</div>
      </div>
    );
  };

  renderCards = (item, idx) => {
    const url = `/#/PunchDetail/${item.kqDayId}`;

    return (
      <div style={styles.item} key={idx}>
        <a href={url} style={styles.title}>
          员工编号{item.userId}
        </a>
        <div style={styles.date}>{new Date(item.time).toLocaleDateString()}</div>
      </div>
    );
  };

  render() {

    return (
      <div className="tag-message-list">
        <IceContainer>
          <Tab size="small">
            <Tab.TabPane key={0} tab={`我发布的考勤（${this.state.days.length}）`}>
              {this.state.days.map(this.renderDays)}
            </Tab.TabPane>
            <Tab.TabPane key={1} tab={`我的打卡记录（${this.state.cards.length}）`}>
              {this.state.cards.map(this.renderCards)}
            </Tab.TabPane>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  allMessage: {
    marginTop: '20px',
    textAlign: 'center',
  },
  item: {
    borderBottom: '1px solid #F4F4F4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px 0',
  },
  title: {
    fontSize: '14px',
    color: '#666',
  },
  date: {
    fontSize: '12px',
    color: '#666',
  },
};
