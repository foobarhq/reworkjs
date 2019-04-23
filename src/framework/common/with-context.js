// @flow

import * as React from 'react';

type WithContextOption = {
  [string]: React.Context<*>,
};

export default function withContext<NewProps: WithContextOption>(contextMap: NewProps) {

  return function decorate<Props>(
    WrappedComponent: React.ComponentType<Props>,
  ): React.ComponentType<$Diff<Props, NewProps>> {

    return function WithContext(props: *) {

      const contextProps = {};

      // $FlowFixMe - https://github.com/facebook/flow/issues/2221
      for (const [key, context]: [string, React.Context<*>] of Object.entries(contextMap)) {

        contextProps[key] = React.useContext(context);
      }

      return <WrappedComponent {...props} {...contextProps} />;
    };
  };
}
