import React from 'react';
import {Animated} from 'react-native';

/**
 * Currently Animated.createAnimatedComponent only supports class components.
 * Therefore in order to animate custom component, it should be wrapped within
 * class component
 * @param Component - Component to wrap within class component
 * @returns Class component which acts as a wrapper for provided Component
 */
const wrapWithinClassComponent = <P extends {}>(
  component: React.ComponentType<P>,
) =>
  class ComponentWithAnimation extends React.Component<P> {
    render(): React.ReactNode {
      const Component = component;

      return <Component {...this.props} />;
    }
  };

export const withAnimation = <P extends {}>(
  component: React.ComponentType<P>,
) => {
  return Animated.createAnimatedComponent(wrapWithinClassComponent(component));
};
