import {UseTestIDProps} from './props';

export * from './props';

export const useTestID = ({testID = ''}: UseTestIDProps) => {
  return {
    getTestID: (prefix: string) => (testID ? `${prefix}-${testID}` : prefix),
  };
};
