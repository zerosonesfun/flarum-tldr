import { extend } from 'flarum/extend';
import Component from 'flarum/common/Component';
import PostStream from 'flarum/common/components/PostStream';

export default class Magic extends Component {
    oninit(vnode) {
        super.oninit(vnode);
            extend(PostStream.prototype, 'view', function(vnode) {
                if (vnode.children && vnode.children.splice) {
                    const insert = <script src="../assets/extensions/zerosonesfun-tldr/tldr.js"></script>;
                    vnode.children.splice(1, 0, insert);
                  }
              });
    }
    view() {
        return;
    }
}