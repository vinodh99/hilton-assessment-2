import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./main.css";
import { save } from "../redux/reducer";
import { Room, Header } from "./cards";
class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }
  // upon mounting, the initial state is set from the redux which we get from redux-persist

  componentDidMount() {
    this.setState({
      rooms: this.props.rooms
    });
  }

  // setting the local state

  countHandler = (e, i) => {
    let name = e.target.name;
    let updatedRooms = this.state.rooms.slice();
    updatedRooms[i][name] = +e.target.value;
    this.setState({
      rooms: updatedRooms
    });
  };

  checkHandler = (i, e) => {
    let updatedRooms = this.state.rooms.slice();
    updatedRooms[i].checked = e.target.checked;
    this.setState(
      {
        rooms: updatedRooms
      },
      () => {
        for (let j = 0; j < this.state.rooms.length; j++) {
          let updatedRooms = this.state.rooms.slice();
          if (j > i && j !== 0) {
            updatedRooms[j].checked = false;
            this.setState(
              {
                rooms: updatedRooms
              },
              () => {
                this.reset(j, i);
              }
            );
          } else if (j < i) {
            updatedRooms[j].checked = true;
            this.setState(
              {
                rooms: updatedRooms
              },
              () => {
                this.reset(j, i);
              }
            );
          }
        }
      }
    );
  };

  // to reset the inputs

  reset(j, i) {
    let updatedRooms = this.state.rooms.slice();
    if (!this.state.rooms[j].checked) {
      updatedRooms[j].adults = 1;
      updatedRooms[j].children = 0;
      this.setState({
        rooms: updatedRooms
      });
    } else if (!this.state.rooms[i].checked) {
      updatedRooms[i].adults = 1;
      updatedRooms[i].children = 0;
      this.setState({
        rooms: updatedRooms
      });
    }
  }

  // saving inputs from the user to redux-state

  submitHandler = () => {
    this.props.save(this.state.rooms);
  };

  render() {
    // rendering all the rooms by mapping from the state
    const rooms = this.state.rooms.map((room, i) => {
      return (
        <Room key={i} active={room.checked}>
          <Header active={room.checked} className="checkbox">
            {i > 0 && (
              <input
                type="checkbox"
                checked={room.checked}
                onChange={e => this.checkHandler(i, e)}
              />
            )}
            <h3>{room.name}</h3>
          </Header>
          <div className="contentWrap">
            <div className="content">
              <p>Adults</p>
              <select
                className="count"
                name="adults"
                value={room.adults}
                disabled={!room.checked}
                onChange={e => this.countHandler(e, i)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="content">
              <p>Children</p>
              <select
                className="count"
                name="children"
                value={room.children}
                disabled={!room.checked}
                onChange={e => this.countHandler(e, i)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </Room>
      );
    });

    return (
      <Fragment>
        <div className="wrapper">{rooms}</div>
        <button className="submit" onClick={this.submitHandler}>
          Submit
        </button>
      </Fragment>
    );
  }
}

// mapping redux global state to local state
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { save }
)(Rooms);
