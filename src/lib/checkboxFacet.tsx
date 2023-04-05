interface CheckboxFacetProps {
  id: string;
  name: string;
  value: string;
  labelName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxFacet = (props: CheckboxFacetProps) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CheckboxFacet;
