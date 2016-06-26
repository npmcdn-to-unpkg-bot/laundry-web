import boom from 'boom';
import ViewData from '../helpers/ViewData';
import appRender from '../helpers/appRender';
import { getState } from '../helpers/stateCreator';

export const main = {
  auth: 'session',
  handler(request, reply) {
    const baseData = ViewData.getBaseData(request.server.app);
    console.log(baseData);
    getState(request).then((state) => {
      baseData.state = state;
      return appRender(request.path, state).then((html) => {
        baseData.html = html;
        return reply.view('main', baseData);
      });
    }).catch((err) => {
      console.error(err);
      return reply(boom.badImplementation('Internal Server Error'));
    });
  },
};
