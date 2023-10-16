function MiniCard(props) {
  const getColor = () => {
    if (props.value <= 500) {
      return "red";
    }
  };
  return (
    <div>
      <h1>{props.broj}</h1>
      <p>{props.text}</p>
    </div>
  );
}
export default MiniCard;
