import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {Icon} from "@icedesign/base/index";

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo" style={{}}>
        <Link to="/" className="logo-text">
          <Icon type="operation" size="xl"/> 星云考勤
        </Link>
      </div>
    );
  }
}
