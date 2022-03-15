import './App.css';

const Bath = (props) => {
  return ( 
    <div className='bath' id={`bath-${props.size}`}>
      <h2>{props.size} Bath</h2>
    </div>
  );
}
 
export default Bath;