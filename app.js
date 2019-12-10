class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
    this.onListItemMouseEnter = this.onListItemMouseEnter.bind(this);
    this.onListItemMouseLeave = this.onListItemMouseLeave.bind(this);
  }

  onListItemMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hovering: false
    });
  }

  render() {
    const style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseLeave={this.onListItemMouseLeave}
        onMouseEnter={this.onListItemMouseEnter}
      >
        {this.props.item}
      </li>
    );
  }
}

const GroceryList = props => (
  <ul>
    {props.items.map(item => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

ReactDOM.render(
  <GroceryList items={['kale', 'cucumbers']} />,
  document.getElementById('app')
);
