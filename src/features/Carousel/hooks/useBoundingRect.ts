import { useState, useCallback, useEffect } from "react";

interface Dimensions {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  x?: number;
  y?: number;
  right?: number;
  bottom?: number;
}

const debounce = (limit: number, callback: any) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, args);
  };
};

function getDimensionObject(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export default function useBoundingRect(limit?: number): [any, Dimensions, HTMLElement | undefined] {
  const [dimensions, setDimensions] = useState<Dimensions>({});
  const [node, setNode] = useState<HTMLElement>();

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
