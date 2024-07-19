import {useCallback, useEffect, useState} from 'react';

type UseCheckableProps = {
  // Initial checked value
  isChecked?: boolean;
  onChange?(isChecked: boolean): void;
};

export const useCheckable = (props: UseCheckableProps) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const {onChange: _onChange = () => null} = props;
  const [isChecked, setIsChecked] = useState(props.isChecked);

  useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);

  const onChange = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const newIsChecked = !isChecked;

    if (props.isChecked === undefined) {
      setIsChecked(newIsChecked);
    }

    _onChange(newIsChecked);
  }, [_onChange, isChecked, props.isChecked]);

  return {
    isChecked,
    onChange,
  };
};
