interface CheckboxFacetProps {
  id: string;
  name: string;
  value: string;
  labelName: string;
  amount: number;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxFacet = (props: CheckboxFacetProps) => {
  return (
    <div className="checkboxFacet">
      <div className="checkboxFacetInput">
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
        />
      </div>
      <div className="checkboxFacetLabel">
        <label htmlFor={props.id}>{props.labelName}</label>
      </div>
      <div className="searchFacetSmallText">
        <small>{`(${props.amount})`}</small>
      </div>
    </div>
  );
};

export default CheckboxFacet;
