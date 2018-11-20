import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Header from "../components/header";
import { GroceryListCard } from "../components/grocerylistcard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { fetchGroceryLists } from "../apiClient/index";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class Index extends React.Component {
  getChildItem(id, itemId) {
    return this.state.groceryLists
      .find(x => x.id === id)
      .items.find(item => item.id === itemId);
  }
  handleItemCheckboxChange = (id, itemId) => {
    const groceryLists = [...this.state.groceryLists];
    const childItem = groceryLists
      .find(x => x.id === id)
      .items.find(item => item.id === itemId);
    childItem.isPurchased = !childItem.isPurchased;
    this.setState({ groceryLists: groceryLists });
  };

  handleItemTextChange = (id, itemId, value) => {
    const groceryLists = [...this.state.groceryLists];
    const childItem = groceryLists
      .find(x => x.id === id)
      .items.find(item => item.id === itemId);
    childItem.text = value;

    console.log(value);
    this.setState({ groceryLists: groceryLists });
  };

  handleTitleChange = (id, value) => {
    const groceryLists = [...this.state.groceryLists];
    groceryLists.find(x => x.id === id).title = value;
    this.setState({ groceryLists: groceryLists });
  };

  async componentDidMount() {
    const groceryLists = await fetchGroceryLists();
    this.setState({ groceryLists: groceryLists });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header> </Header>
        {this.state && this.state.groceryLists && (
          <div className={classes.root}>
            <GridList cols={this.state.groceryLists.length}>
              {this.state.groceryLists.map(groceryList => {
                return (
                  <GridListTile key={groceryList.id}>
                    <GroceryListCard
                      groceryList={groceryList}
                      key={groceryList.id}
                      handleTitleChange={this.handleTitleChange}
                      handleItemCheckboxChange={this.handleItemCheckboxChange}
                      handleItemTextChange={this.handleItemTextChange}
                    />
                  </GridListTile>
                );
              })}
            </GridList>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
