import { mount } from 'react-mounter';
// load Layout and Welcome React components
import { Layout } from './app.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout);
  },
});
