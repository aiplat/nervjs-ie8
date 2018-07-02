import Nerv from 'nervjs';

import Beian from 'components/beian';
import Header from 'components/header';
import Footer from 'components/footer';

import 'assets/css/index.css';
import 'assets/less/aiplat.less';

class Index extends Nerv.Component {
  constructor() {
    super(...arguments);
    this.state = {
      icon: require('assets/images/icon.png'),
      indexData: {
        description:
          'AI智能空间,拥抱人工智能,明天会更好。个人项目:跨平台app~《亲信地铁》、小程序~《娱乐计分器》。技术研究潜心使用各种框架开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致。详见应用展示。',
        gitName: '我的github',
        gitUrl: 'github.com/womendi',
        gitUrl2: 'https://github.com/womendi',
        gitList: [
          {
            name: 'cmui',
            desc: '自己写的跨平台css3框架',
            url: 'https://github.com/womendi/cmui'
          },
          {
            name: 'vueapp',
            desc: '改写vue-cli的跨平台框架',
            url: 'https://github.com/womendi/vueapp'
          },
          {
            name: 'react-app-ie8',
            desc: '改写react兼容IE8的跨平台框架',
            url: 'https://github.com/womendi/react-app-ie8'
          },
          {
            name: 'angular-app',
            desc: '改写angular-cli的跨平台框架',
            url: 'https://github.com/womendi/angular-app'
          },
          {
            name: 'express-multipage',
            desc: '改写express的多页面框架',
            url: 'https://github.com/womendi/express-multipage'
          },
          {
            name: 'nervjs-ie8',
            desc: '改写nervjs兼容IE8的多页面框架',
            url: 'https://github.com/womendi/nervjs-ie8'
          },
          {
            name: 'reactNative',
            desc: '改写reactNative的APP框架',
            url: 'https://github.com/womendi/reactNative'
          }
        ],
        cooperation: '联系我',
        email: 'womendi@qq.com'
      }
    };
  }
  toEmail() {
    return 'mailto:' + this.state.indexData.email;
  }
  render() {
    const Hdata = { title: '首页', imgL: '', imgR: '' };
    const thisPath = '/index.html';
    return (
      <div>
        <Header Hdata={Hdata} />
        <div className="cm_main">
          <ul className="cm_pc_12 cm_mt3 cm_mb6">
            <li className="cm_pc_12 cm_mt05">
              <img
                  className="cm_wh7 cm_bs100 cm_br305 cm_lessbr305 cm_fc"
                  src={this.state.icon}
              />
            </li>
            <li className="cm_pc_12 cm_be">
              <div className="cm_pc_12 cm_pd05 cm_bf cm_lh105 cm_ti2 cm_mb05">
                {this.state.indexData.description}
              </div>
            </li>
            <li className="cm_pc_12 cm_prl05">
              <div className="cm_pc_12">
                <div className="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">
                  {this.state.indexData.gitName}
                </div>
                <div className="cm_pa cm_tr0 cm_hl3 cm_mr05">
                  <a
                      className="cm_c9c"
                      href={this.state.indexData.gitUrl2}
                      target="_blank"
                  >
                    {this.state.indexData.gitUrl}
                  </a>
                </div>
              </div>
              <div className="cm_pc_12 cm_pd05 cm_tc cm_be">
                {this.state.indexData.gitList.map((v, k) => {
                  return (
                    <div
                        className="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce"
                        key={k}
                    >
                      <a href={v.url} target="_blank">
                        <div className="cmtou">
                          <span className="cm_c1c cm_fwb">{v.name}</span>:<span className="cm_fs08">
                            {v.desc}
                          </span>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </li>
            <li className="cm_pc_12 cm_prl05 cm_tc">
              <div className="cm_pc_12 cm_bb1ce">
                <div className="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">
                  {this.state.indexData.cooperation}
                </div>
                <div className="cm_pa cm_tr0 cm_hl3 cm_mr05">
                  <a href={this.toEmail()} target="_blank">
                    {this.state.indexData.email}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Beian />
        <Footer path={thisPath} />
      </div>
    );
  }
}

export default Index;
