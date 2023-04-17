interface CheckboxFacetProps {
  id: string;
  name: string;
  value: string;
  labelName: string;
  amount: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxFacet = (props: CheckboxFacetProps) => {
  return (
    <div className="searchFacet">
      <div className="checkboxFacet">
        <div className="checkboxFacetInput">
          <input
            type="checkbox"
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        <div className="checkboxFacetLabel">
          <label htmlFor={props.id}>{props.labelName}</label>
        </div>
        <div className="searchFacetSmallText">
          <small>{`(${props.amount})`}</small>
        </div>
      </div>
    </div>
  );
};

export default CheckboxFacet;
