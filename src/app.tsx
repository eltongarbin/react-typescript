import * as React from 'react';
import * as ReactDOM from 'react-dom';

// type AppProps = { message: string };
// const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

type AppProps = { message: string };
type AppState = { count: number };
class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div onClick={this.increment}>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

ReactDOM.render(
  <App message="Hello world!" />,
  document.getElementById('root')
);
