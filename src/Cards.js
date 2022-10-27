

const Cards = (props) =>{
    return(
      <>
      <div className="Movie-list">
        <div className="list">
          <img src={props.image} alt={props.Attribute} className="list_img"/>
          <div className="cardInfo">
            <h1>#{props.id} - {props.title} ({props.Year})</h1>
            <p>Distributor: {props.Distributor}</p>
            <p>Amount: {props.Amt}</p>
          </div>
          
        </div>
      </div>
      </>
    );
  }
  export default Cards;