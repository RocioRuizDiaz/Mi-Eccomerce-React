
const SimulationFetch = (dataBase, time) => {
  return new Promise((resolve, rejact) => {
    setTimeout((error, data) => {
      if (console.error()) {
        rejact (error);
        return;
      }
        resolve(dataBase);
       
    }, time)
  } )
}

export default SimulationFetch;