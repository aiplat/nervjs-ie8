import Nerv from 'nervjs';

class Index extends Nerv.Component {
  render() {
    let site = { url: 'http://aiplat.com', site: 'aiplat.com' };
    return (
      <div className="cm_pf cm_bl0 cm_mb3 cm_w100 cm_tc cm_hl2 cm_bf">
        @2016{' '}
        <a href={site.url} target="_blank">
          {site.site}
        </a>
      </div>
    );
  }
}

export default Index;
