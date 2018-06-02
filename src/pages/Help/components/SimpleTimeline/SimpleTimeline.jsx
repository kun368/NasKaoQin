import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Timeline } from '@icedesign/base';

const { Item: TimelineItem } = Timeline;

export default class SimpleTimeline extends Component {
  static displayName = 'SimpleTimeline';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer title="星云考勤系统使用过程">
        <Timeline
        >
          <TimelineItem
            title="老板"
            content="打开星云考勤系统首页，进入“创建考勤”选项卡"
            state="process"
          />
          <TimelineItem
            title="老板"
            content="填写老板所属的考勤组织、考勤标题、考勤对应的日期"
            state="process"
          />
          <TimelineItem
            title="老板"
            content="提交表单，可通过电脑端或者手机端交易创建考勤"
            state="process"
          />
          <TimelineItem
            title="老板"
            content="交易成功后，系统给出员工打卡二维码，保存/截图二维码"
            state="process"
          />
          <TimelineItem
            title="老板"
            content="将生成的二维码，上班前粘贴到公司入口，供员工扫描打卡"
            state="process"
          />
          <TimelineItem
            title="员工"
            content="员工上班时，在门口扫描考勤二维码"
            state="success"
          />
          <TimelineItem
            title="员工"
            content="查看当天的考勤信息，填写自己的工号"
            state="success"
          />
          <TimelineItem
            title="员工"
            content="提交信息后，弹出NAS手机钱包进行交易"
            state="success"
          />
          <TimelineItem
            title="员工"
            content="交易成功后，可以到“我的考勤”查看自己的打卡记录"
            state="success"
          />
          <TimelineItem
            title="老板"
            content="可以随时到“我的考勤”里，查看每天的员工打卡情况"
            state="process"
          />
        </Timeline>
      </IceContainer>
    );
  }
}
