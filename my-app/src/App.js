
import './App.css';
import Question from './Question';
import Data from './data';
console.log(Data)

function App() {
  return (
    <>
    <section className='Body'>

    <section className="container">
      
      <p id='side-text'> Frequenty asked Questions on Login</p>
      <section className='questions-box'>
        {
            Data.map((data)=>{
                return ( <Question key={data.id} data={data}></Question>)
            })
          }
           
      </section>
       


    </section>
  
    </section>


    </>
  );
}

export default App;
