import React from "react"
import Travellist from "./components/Travellist";
import Loading from "./components/Loading";

export default function App({
 deletecity, city ,interTours , loading,
 toggleRead,
 refresh
}) {
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <h1 className="underline"> Our tours </h1>
      {loading ? (
        <Loading />
      ) : interTours.length ? (
        <Travellist
          city={interTours}
          deletecity={deletecity}
          toggleRead={toggleRead}
        />
      ) : (
        <button className="button" onClick={refresh}>
        Refresh
      </button>
      )}
    </div>
  );
}