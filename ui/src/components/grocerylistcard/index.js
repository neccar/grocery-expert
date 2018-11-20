import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

export const GroceryListItem = props => {
  const { item, handleCheckboxChange, handleTextChange } = props;
  return (
    <React.Fragment>
      <Checkbox checked={item.isPurchased} onChange={handleCheckboxChange} />
      <TextField
        value={item.text}
        margin="normal"
        onChange={handleTextChange}
      />
      <br />
    </React.Fragment>
  );
};

export const GroceryListCard = props => {
  const {
    groceryList,
    handleItemCheckboxChange,
    handleItemTextChange,
    handleTitleChange
  } = props;

  return (
    <Card>
      <TextField
        id="standard-name"
        value={groceryList.title}
        margin="normal"
        onChange={event =>
          handleTitleChange(groceryList.id, event.target.value)
        }
      />
      <CardContent>
        {groceryList.items.map(groceryListItem => {
          return (
            <GroceryListItem
              key={groceryListItem.id}
              item={groceryListItem}
              handleCheckboxChange={event =>
                handleItemCheckboxChange(groceryList.id, groceryListItem.id)
              }
              handleTextChange={event =>
                handleItemTextChange(
                  groceryList.id,
                  groceryListItem.id,
                  event.target.value
                )
              }
            />
          );
        })}
      </CardContent>      
    </Card>
  );
};