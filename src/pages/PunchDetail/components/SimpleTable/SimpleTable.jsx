import React, { Component } from 'react';
import { Table, Pagination, Balloon } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import moment from 'moment'

moment.locale('zh-cn');

export default class SimpleTable extends Component {
  static displayName = 'SimpleTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  renderTime = (value) => {
    const t1 = moment(new Date(value)).format('LLLL');
    return (
      <div>{t1}</div>
    );
  };

  render() {
    let kqCards = this.props.kqCards;

    return (
      <div className="simple-table">
        <IceContainer>
          <Table
            dataSource={kqCards}
            className="basic-table"
            hasBorder={false}
            isZebra={true}
          >
            <Table.Column
              title="打卡人地址"
              dataIndex="from"
            />
            <Table.Column
              title="员工编号"
              dataIndex="userId"
              width="150px"
            />
            <Table.Column
              title="打卡时间"
              dataIndex="time"
              cell={this.renderTime}
            />
          </Table>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  operation: {
    marginRight: '12px',
    textDecoration: 'none',
  },
  paginationWrapper: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
