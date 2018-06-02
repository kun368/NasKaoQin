import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '一天一码',
    pic: 'https://img.alicdn.com/tfs/TB1i7OMif6H8KJjSspmXXb2WXXa-210-210.png',
    desc: '赋能企业考勤管理',
  },
  {
    title: '高效管理',
    pic: 'https://img.alicdn.com/tfs/TB1wA5KinvI8KJjSspjXXcgjXXa-210-210.png',
    desc: '简化考勤流程 数据永不丢失',
  },
  {
    title: '公开透明',
    pic: 'https://img.alicdn.com/tfs/TB1laelicjI8KJjSsppXXXbyVXa-210-210.png',
    desc: '分布式、公开透明、无法作弊',
  },
  {
    title: '安全第一',
    pic: 'https://img.alicdn.com/tfs/TB1EfLYfOqAXuNjy1XdXXaYcVXa-207-210.png',
    desc: '不可篡改、信息安全',
  },
  {
    title: '移动兼容',
    pic: 'https://img.alicdn.com/tfs/TB1a31mignH8KJjSspcXXb3QFXa-210-210.png',
    desc: '同时支持PC电脑端和移动端',
  },
  {
    title: '符合需求',
    pic: 'https://img.alicdn.com/tfs/TB1ALecicrI8KJjy0FhXXbfnpXa-210-210.png',
    desc: '更人性化、更高效化、更具适应性',
  },
];

export default class ProductInfo extends Component {
  static displayName = 'ProductInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-info" style={styles.container}>
        <Row wrap>
          {dataSource.map((item, index) => {
            return (
              <Col xxs="12" s="8" l="8" key={index} style={styles.item}>
                <img src={item.pic} style={styles.pic} alt="" />
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.desc}>{item.desc}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 0',
  },
  item: {
    textAlign: 'center',
    padding: '10px 22px',
    marginBottom: '20px',
  },
  pic: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {
    lineHeight: '22px',
    color: '#999',
  },
};
