import { useEffect, useState } from "react";

export default function useCyclicState(arrayOfChoices, startInd = 0) {
  let [index, setIndex] = useState(startInd);

  let startingValue = arrayOfChoices[index];
  let [choice, setChoice] = useState(startingValue);

  useEffect(() => {
    setChoice(arrayOfChoices[index]);
  }, [index]);

  function stateCycler() {
    let newIndex = index === arrayOfChoices.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  }

  return [choice, stateCycler];
}
