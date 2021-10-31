import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./headerStyle";

const Header = ({ setQuery, query, getData, mealTypes, meal, setMeal }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
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
