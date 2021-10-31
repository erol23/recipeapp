import React from "react";
import Form from "./Form";
import { HeaderContainer } from "./headerStyle";

const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <HeaderContainer>
      <h2>REcipe App</h2>
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header;
