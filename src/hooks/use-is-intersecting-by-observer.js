import { useEffect, useState } from "react";
import hash from "json-stable-stringify";

let idCount = 0;
const generateId = () => {
  idCount++;
  return idCount;
};

const contextsDict = {};

function getObserverContextFromOptions(options) {
  const hashStr = hash(options);
  if (contextsDict[hashStr]) {
    return contextsDict[hashStr];
  } else {
    const callbacksDict = {};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (callbacksDict[entry.target.__id])
          callbacksDict[entry.target.__id](entry.isIntersecting);
      });
    }, options);
    contextsDict[hashStr] = {
      callbacksDict,
      observer,
    };
    return contextsDict[hashStr];
  }
}

function useIsIntersectingByObserver(
  element,
  intersectionObserverOptions,
  hookOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    if (element) {
      if (!element.__id) {
        element.__id = generateId();
      }
      const { callbacksDict, observer } = getObserverContextFromOptions(
        intersectionObserverOptions
      );
      observer.observe(element);
      callbacksDict[element.__id] = (commingIsIntersecting) => {
        if (hookOptions.keepTrue && isIntersecting === true) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(commingIsIntersecting);
        }
      };
      return () => {
        callbacksDict[element.__id] = undefined;
        observer.unobserve(element);
      };
    } else {
      return () => undefined;
    }
  }, [
    element,
    setIsIntersecting,
    isIntersecting,
    hookOptions.keepTrue,
    intersectionObserverOptions,
  ]);

  return isIntersecting;
}

export default useIsIntersectingByObserver;
