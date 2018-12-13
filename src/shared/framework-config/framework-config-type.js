
export type FrameworkPluginConfig = {
  plugin: string,
  config: any,
};

export type FrameworkConfigStruct = {
  directories: {
    logs: string,
    build: string,
    resources: string,
    routes: string,
    translations: string,
  },

  'entry-react': string,
  'render-html': ?string,
  'pre-init': ?string,
  'service-worker': ?string,

  plugins: ?{ [string]: any },
};
