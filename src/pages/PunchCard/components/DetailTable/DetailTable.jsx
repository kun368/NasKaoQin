import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

export default class DetailTable extends Component {
  static displayName = 'DetailTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const kqDay = this.props.kqDay;
    if (!kqDay) {
      return (
        <div className="detail-table">
          <IceContainer title="考勤详情">
            <p>正在获取数据中，请稍候...</p>
          </IceContainer>
        </div>
      );
    }

    return (
      <div className="detail-table">
        <IceContainer title="考勤详情">
          <ul style={styles.detailTable}>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>创建者：</div>
              <div style={styles.detailBody}>{kqDay.from}</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>考勤组织：</div>
              <div style={styles.detailBody}>{kqDay.organization}</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>考勤标题：</div>
              <div style={styles.detailBody}>{kqDay.title}</div>
            </li>
            <li style={styles.detailItem}>
              <div style={styles.detailTitle}>考勤对应日期：</div>
              <div style={styles.detailBody}>{kqDay.forDay}</div>
            </li>
          </ul>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  detailItem: {
    padding: '15px 0px',
    display: 'flex',
    borderTop: '1px solid #EEEFF3',
  },
  detailTitle: {
    marginRight: '30px',
    textAlign: 'right',
    width: '120px',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },
  statusProcessing: {
    color: '#64D874',
  },
};
