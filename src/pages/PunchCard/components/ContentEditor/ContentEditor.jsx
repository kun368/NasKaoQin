import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Grid, Form, Button, Select, Feedback} from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

const Toast = Feedback.toast;
import NebUtils from "../../../../../util/NebUtils";

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
        userId: '',
      },
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
      const id = this.props.kqTxHash;
      NebUtils.nebPayCall("createPunchCard", `["${id}", "${values.userId}"]`, false, txHash => {
          Toast.success("已提交交易，交易成功后即打卡成功~");
          NebUtils.intervalQueryTx(txHash, () => {
            alert("打卡成功！");
          })
        }
      );
    });
  };


  render() {
    return (
      <div className="content-editor">
        <IceFormBinderWrapper
          ref={(refInstance) => {
            this.postForm = refInstance;
          }}
          value={this.state.value}
          onChange={this.formChange}
        >
          <IceContainer title="">
            <Form labelAlign="top" style={styles.form}>

              <Row>
                <Col span="24">
                  <FormItem label="工作编号" required>
                    <IceFormBinder name="userId" required message="必填">
                      <Input placeholder="例如：您的工作工号"/>
                    </IceFormBinder>
                    <IceFormError name="userId"/>
                  </FormItem>
                </Col>
              </Row>

              <Button type="primary" onClick={this.handleSubmit}>
                考勤打卡！
              </Button>
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
