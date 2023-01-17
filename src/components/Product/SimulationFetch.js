
const SimulationFetch = (dataBase, time) => {
  return new Promise((resolve, rejact) => {
    setTimeout(() => {
        resolve(dataBase);
        rejact(new Error("Ups, algo salio mal"))
    }, time)
  } )
}

export default SimulationFetch