import React, { useState , useEffect } from 'react';


const Counter = () => {

  // display all numbers in the console .. 

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(` counter : ${counter}`);
  },[counter]);

  const myStyles = {
    imed_jaberi : {
      color:"grey",
      fontWeight: "bold"
    },
    plus : {
      color: "#FF1493" 
    }
  }

    return (
        <div>
          <center>
          <div className="uk-container">
            <div className="uk-card uk-card-secondary uk-width-1-3@m">
              <div className="uk-card-header">
                  <div className="uk-width-expand">
                    <h1 className="uk-card-title uk-margin-remove-bottom"> 
                      REACT REDUX COUNTER 
                    </h1>
                  </div>
                  <hr/>
              </div>
              <div className="uk-card-body">
                <h1 className="counter"> { counter } </h1>
              </div>
              <div className="uk-card-footer">
                  <button className="uk-button uk-button-primary uk-button-large plus" onClick={() => setCounter(counter+1)}><h1 style={myStyles.plus}>+</h1></button>
                  <button className="uk-button uk-button-danger uk-button-large moins" onClick={() => setCounter(counter-1)}><h1>-</h1></button>
                  <hr/>
                  <p> &copy; 2019 Copyright || Made by <a style={myStyles.imed_jaberi} href="https://github.com/3imed-jaberi" > 3imed-jaberi </a> </p>
              </div>
            </div>
          </div>
          </center>
      </div>
    )
}

export default Counter ;