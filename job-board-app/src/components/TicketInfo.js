const TicketInfo = ({ result, image, children }) => {
  return (
    <div className={`ticket-info ${result}`}>
      <img src={image} alt={result} width="50" height="50" />
      {children}
    </div>
  );
};
export default TicketInfo;
