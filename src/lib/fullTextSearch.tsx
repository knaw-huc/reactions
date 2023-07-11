//Code adapted from: https://github.com/knaw-huc/browser-base-react/blob/4e09cd3e911a4877a6d88402696f55114cff09e2/src/facets/freeTextFacet.tsx
import React from "react";

type FullTextFacetProps = {
  valueHandler: (value: string) => void;
  enterPressedHandler: (pressed: boolean) => void;
  value: string;
  className?: string;
};

export default function FullTextFacet(props: FullTextFacetProps) {
  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.enterPressedHandler(true);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.valueHandler(event.currentTarget.value);
  };

  return (
    <input
      className={props.className}
      type="search"
      name="fullTextInput"
      id="fullText"
      value={props.value}
      placeholder="Press ENTER to search"
      onKeyUp={keyPressHandler}
      onChange={handleChange}
    />
  );
}
