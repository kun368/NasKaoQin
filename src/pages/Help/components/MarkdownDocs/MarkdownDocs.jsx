import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownDocs.scss';

const initialSource = `
# 系统简介

考勤是现代企业和人力资源最基本最重要的管理工具之一，它看似是一种微不足道的公司流程，却实际是一门艺术性科学。考勤事实上对于一个企业来说却有着非常重要的作用，良好合理的考勤制度和考勤方式能促进企业的效率和内部公平，培养良好的企业文化；反之则会给员工与管理者带来隔阂，产生无尽的怨恨与矛盾，进而拖累企业的健康成长。

有调查显示，从20世纪90年代起，中国企业对考勤工具的依赖程度逐年上升，从最初的考勤打卡机、到后来的指纹打卡、视网膜打卡等等，考勤设备在不断更新换代，但是考勤过程中的痛点却往往并未能很好地同步解决。尤其是随着互联网和电子科技的飞速发展，如今的企事业单位早已经进入了现代化办公的时代，人们的工作效率不断提升，工作流程和方式也在日新月异，对更加科学合理的考勤服务的需求越来越迫切，考勤管理必须更人性化、更高效化，更具适应性。

如何避免考勤作弊？如何更加灵活地安排考勤流程？如何更合理有效地分析运用考勤数据？……

**星云考勤系统团队通过创造性地运用区块链技术，为考勤工具带来了全新的可能。**

**我们发挥区块链技术所具有的分布式、公开透明、无法作弊、不可篡改、信息安全等特性，打造了新的考勤系统。**

基于区块链技术的考勤系统，采用如下的实现思路：一个单位作为一个主账户，所有员工生成对应的子账户，单位一天一码，上班打卡添加对应子账户的上班信息并广播到星云区块链网络中。将打卡信息广播到区块链中确认后，我们的考勤系统可以对打卡数据进行分析导出。

# 我们的优势

1. 数据不可篡改，无法作弊
2. 数据永不丢失
3. 简化考勤流程
4. 同时支持PC端和移动端考勤

我们还将与多家公司合作，落地星云考勤系统，相信会有越来越多的应用成果不断涌现。

# 系统使用示例

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/69589895.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/49016057.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/23388368.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/20185719.jpg)


![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/84149867.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/17552954.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/80546122.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/13123140.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/73809555.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/45086019.jpg)


![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/44571522.jpg)

![](http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-6-2/56116726.jpg)

`;

export default class MarkdownDocs extends Component {
  static displayName = 'MarkdownDocs';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ReactMarkdown className="markdown-docs-body" source={initialSource} />
      </div>
    );
  }
}
