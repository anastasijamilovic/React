const simpleForm = ({ defaultInput, buttonTitle }) => {
  const complete = (e) => {
    // e.preventDefault
    console.log(e.target);
  };

  const onChange = (e) => {
    console.log(e.target.value);
  };
};
export default simpleForm;
