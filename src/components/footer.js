import Nerv from 'nervjs';

class Index extends Nerv.Component {
  render() {
    const path = this.props.path;
    const MenuList = [
      {
        name: '首页',
        url: '/index.html',
        img: require('../assets/images/footer/sy_01.png'),
        imgOn: require('../assets/images/footer/sy_01on.png')
      },
      {
        name: '应用展示',
        url: '/apps.html',
        img: require('../assets/images/footer/sy_03.png'),
        imgOn: require('../assets/images/footer/sy_03on.png')
      },
      {
        name: '捐赠我们',
        url: '/donate.html',
        img: require('../assets/images/footer/sy_04.png'),
        imgOn: require('../assets/images/footer/sy_04on.png')
      }
    ];
    const Len = 'cm_pc_' + MenuList.length + 'f';
    return (
      <div className="cm_pf cm_bl0 cm_w100">
        <div className="cm_main2">
          <div className="cm_main">
            <div className="cm_pc_12 cm_tc cm_bf cm_bt1ce cm_br1ce cm_bl1ce">
              {MenuList.map((m, key) => {
                const c =
                  path == m.url ? 'cm_fs06 cm_c8c cm_c6b' : 'cm_fs06 cm_c4c';
                let d = path == m.url ? Len + ' cm_c6b' : Len;
                d = key > 0 ? (d += ' cm_bl1ce') : d;
                return (
                  <a className={d} href={m.url}
                      key={key}
                  >
                    <div className="cm_pc_12 cm_mt02">
                      <img className="cm_wh105 cm_bs100" src={path == m.url ? m.imgOn : m.img} />
                    </div>
                    <div className="cm_pc_12 cm_mb02">
                      <span className={c}>{m.name}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
