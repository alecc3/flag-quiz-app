import React from 'react';

type ChoiceProps = {
  name: string,
  function(event: React.FormEvent<HTMLInputElement>): void;
  checked: boolean
}

export default ChoiceProps;