const Display = ({ Dispalayval }) => {
  return (
    <input
      type="text"
      value={Dispalayval}
      readOnly
      aria-label="Calculator display"
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "10px",
        marginBottom: "8px",
        textAlign: "right",
        fontSize: "20px"
      }}
    />
  );
};

export default Display;
