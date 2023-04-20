import React from "react";

import cards from "../../utils/cardlist";
import Card from "../Card/Card";

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCardIndex: 0,
    };
  }

  handleCardClick = (index) => {
    this.setState({ selectedCardIndex: index });
  };

  render() {
    return (
      <>
        {cards.map((card, index) => (
          <Card
            key={index}
            isSelected={index === this.state.selectedCardIndex}
            {...card}
            onClick={() => this.handleCardClick(index)}
          />
        ))}
      </>
    );
  }
}

export default CardsList;
