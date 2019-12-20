import mixpanel from 'mixpanel-browser';

mixpanel.init('f50b22bb08c146d18fb228ee193c791e');

const env_check = process.env.NODE_ENV === 'production';

const actions = {
  track: (name :any) => {
    if (env_check) mixpanel.track(name);
  }
};

export const Mixpanel = actions;