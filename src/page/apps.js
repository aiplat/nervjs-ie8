import Nerv from 'nervjs';
import Index from 'views/Apps';

class App extends Nerv.Component {
  render() {
    return <Index />;
  }
}

Nerv.render(<App />, document.querySelector('#aiplat'));
