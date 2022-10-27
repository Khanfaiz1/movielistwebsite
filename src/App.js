import Cards from "./Cards";
import Sdata from "./Sdata";

const App = () =>{
  return(
    <>
      {
        Sdata.map(val=>{
          return (
            <Cards image={val.img.src}
            id={val.id}
            title={val.title}
            Year={val.year}
            Distributor={val.distributor}
            Amt={val.amount}
             />
          );
        })
      }
    </>
  );
}
export default App;