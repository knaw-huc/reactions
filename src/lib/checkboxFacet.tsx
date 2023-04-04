interface CheckboxFacetProps {
  id: string;
  name: string;
  value: string;
  labelName: string;
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
      />
    </div>
  );
};

export default CheckboxFacet;
