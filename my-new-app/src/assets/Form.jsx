/* imamo 3 inputa i submit button unutar forme 
kontrolisemo vrednost inputa preko state */
const Form = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInputValues({
    ...inputValues,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputValues);
};

export default Form;
