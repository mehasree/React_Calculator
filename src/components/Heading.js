
/*function Heading(props){
  return(
    <div>
    <h1>Hello!{props.name}</h1>
    <h1>Too-toung hehe{props.age}</h1> 
    </div>
  );
}
export default Heading;
*/
import React from 'react';
import Wrapper from './wrapper';
function Heading(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}>
      <h1>Heading here</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
}

export default Heading;