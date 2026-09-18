const TicketInfo = ({ result, image, count, children }) => {
  return (
    <div className={`ticket-info ${result}`}>
      <img src={image} alt={result} width="50" height="50" />
      {children}
      <p className="ticket-count">{count}</p>
    </div>
  );
};
export default TicketInfo;
