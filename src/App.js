import './App.css';

import cards from './utils/cardlist';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <div className='App-card'>
        {cards.map((card) => 
          <Card 
          level={card.level}
          titleRequirements={card.titleRequirements}
          requirement1={card.requirement1}
          requirement2={card.requirement2}
          requirement3={card.requirement3}
          annualTurnover={card.annualTurnover}
          color={card.color}
          backgroundColor={card.backgroundColor}
          logo={card.logo}
          check={card.check}
          isSelected={card.isSelected}
          />)
        }
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <div className='App-card'>
         
//           <CardsList />
        
//       </div>
//     </div>
//   );
// }

// export default App;