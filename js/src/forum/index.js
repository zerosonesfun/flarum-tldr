import { extend } from 'flarum/common/extend';
import ForumApplication from 'flarum/common/ForumApplication';
import Tldr from './components/Tldr';

app.initializers.add('zerosonesfun/flarum-tldr', () => {
  extend(ForumApplication.prototype, 'mount', () => {
      m.mount(document.body.appendChild, Tldr);
  });
});