import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Grid, Form, Button, Select, DatePicker, Feedback, Dialog} from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import NebUtils from '../../../../../util/NebUtils.js'
import {Base64} from 'js-base64';
import QRCode from 'qrcode.react'
import moment from 'moment'

const Toast = Feedback.toast;
const {Row, Col} = Grid;
const FormItem = Form.Item;

export default class ContentEditor extends Component {
  static displayName = 'ContentEditor';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        organization: '',
        title: '',
        forDay: '',
      },
      qrDialogShow: false,
      txHash: '',
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.postForm.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
      if (errors) {
        return false;
      }
      if (!NebUtils.checkInstalledPlugin()) {
        Toast.error('请确认已安装Chrome扩展或者移动端NAS钱包，已安装请忽略~');
      }

      const day = moment(values.forDay).format("YYYY-MM-DD");
      const contract = {
        function: 'createKaoQinDay',
        args: `["${values.organization}", "${values.title}", "${day}"]`,
      };
      NebUtils.nebPayCall(contract.function, contract.args, false, (txHash) => {
        Toast.success("已提交交易，请不要关闭页面，耐心等待交易完成~");
        NebUtils.intervalQueryTx(txHash, () => {
          this.setState({
            qrDialogShow: true,
            txHash: txHash,
          });
        })
      });

    });
  };

  onQRDialogClose = () => {
    this.setState({
      qrDialogShow: false
    });
  };

  renderQRDialog() {
    const url = `http://kq.zzkun.com/#/PunchCard/${this.state.txHash}`;

    return (
      <Dialog
        visible={this.state.qrDialogShow}
        onOk={this.onQRDialogClose}
        closable="esc,mask,close"
        onCancel={this.onQRDialogClose}
        onClose={this.onQRDialogClose}
        title="已为您生成考勤打卡二维码！"
      >
        <div style={{textAlign: 'center'}}>
          <QRCode value={url} renderAs="svg" size={196}/>
        </div>
        <p>请将此二维码保存后放置在员工上班入口，员工手机扫码后可以进行考勤打卡！</p>
        <p>您还可以到“我的考勤”页面，查看员工打卡情况</p>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="content-editor">
        {this.renderQRDialog()}
        <IceFormBinderWrapper
          ref={(refInstance) => {
            this.postForm = refInstance;
          }}
          value={this.state.value}
          onChange={this.formChange}
        >
          <IceContainer title="我是老板：创建考勤">
            <Form labelAlign="top" style={styles.form}>

              <Row>
                <Col span="24">
                  <FormItem label="考勤组织" required>
                    <IceFormBinder name="organization" required message="组织必填">
                      <Input placeholder="例如：XXX有限公司"/>
                    </IceFormBinder>
                    <IceFormError name="organization"/>
                  </FormItem>
                </Col>
              </Row>

              <Row>
                <Col span="24">
                  <FormItem label="考勤标题" required>
                    <IceFormBinder name="title" required message="标题必填">
                      <Input placeholder="例如：XXX有限公司2018年6月1日考勤"/>
                    </IceFormBinder>
                    <IceFormError name="title"/>
                  </FormItem>
                </Col>
              </Row>

              <Row>
                <Col span="24">
                  <FormItem label="考勤对应日期" required>
                    <IceFormBinder name="forDay" required message="日期必填">
                      <DatePicker/>
                    </IceFormBinder>
                    <IceFormError name="forDay"/>
                  </FormItem>
                </Col>
              </Row>

              <FormItem label=" ">
                <Button type="primary" onClick={this.handleSubmit}>
                  创建
                </Button>
              </FormItem>
            </Form>
          </IceContainer>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

const styles = {
  form: {
    marginTop: 30,
  },
  cats: {
    width: '100%',
  },
};
