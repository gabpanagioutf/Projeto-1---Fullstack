function ListaTimes({ times }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {times.map((time) => (
        <div
          key={time.idTeam}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <img src={time.strBadge} alt={time.strTeam} width="80" />
          <h3>{time.strTeam}</h3>
          <p>{time.strLeague}</p>
          <p>{time.strStadium}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaTimes;