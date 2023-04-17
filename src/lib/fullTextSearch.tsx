//Code adapted from: https://github.com/knaw-huc/browser-base-react/blob/4e09cd3e911a4877a6d88402696f55114cff09e2/src/facets/freeTextFacet.tsx
import React from "react";

interface FullTextFacetProps {
  valueHandler: (value: string) => void;
}

export default function FullTextFacet(props: FullTextFacetProps) {
  const [textField, setTextField] = React.useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTextField(event.currentTarget.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.valueHandler(event.currentTarget.value);
    }
  };

  const buttonClickHandler = () => {
    props.valueHandler(textField);
  };

  return (
    <div className="searchFacet">
      <div className="hcFacetSearch">
        <input
          type="text"
          name=""
          id="freeText"
          value={textField}
          placeholder="Press ENTER to search"
          onChange={handleChange}
          onKeyUp={keyPressHandler}
        />
        <button type="button" name="button" onClick={buttonClickHandler}>
          Search
        </button>
      </div>
    </div>
  );
}
