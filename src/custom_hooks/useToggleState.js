import { useState } from "react";

export default function useToggleState(bool = true) {
  const [state, stateSetter] = useState(bool);

  function wrappedSetter() {
    stateSetter(!state);
  }

  return [state, wrappedSetter];
}
