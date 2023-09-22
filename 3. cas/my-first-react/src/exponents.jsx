const Example = () => {
  const a = "value";
  function func() {
    return a;
  }
  return (
    <div className="box">
      <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.5 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sed. Minus
        accusamus odio quasi sapiente magni pariatur error excepturi porro,
        eveniet aspernatur eaque provident totam, quibusdam vel commodi at
        impedit. Velit qui suscipit dicta, nesciunt deserunt, minima sapiente
        cupiditate possimus aperiam repellendus cum libero non molestiae maxime
        optio adipisci deleniti.
      </p>
      <h1 className={`box2`} style={{ fontSize: 42, fontWeight: 700 }}>
        Text{" "}
      </h1>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        width={400}
        height={400}
      />
    </div>
  );
};

export const a = 10;

export default Example;
