import React, { Component } from 'react';
import _ from "lodash";
import './Grid.css';
import Keyboard from "./Keyboard";

class Grid extends Component {
  constructor(props) {
    super(props);
    const makeCell = (i) => {
      return {
        index: i,
        row: Math.floor(i / props.rows),
        col: i % props.rows,
        active: false,
        value: ""
      }
    }
    const len = props.rows * props.cols;
    let cells = _.times(len, makeCell);
    console.log("made a bunch of cells:", cells);
    cells[0].active = true;

    this.state = {
      activeCell: 0,
      cells: cells,
    }

    this.activate = _.bind(this.activate, this);
    this.keyPress = _.bind(this.keyPress, this);
  }

  activate(cellIndex) {
    let cells = this.state.cells;
    console.log("activating cell:", cellIndex);
    console.log("cells:", cells);
    console.log("old active:", this.state.activeCell);
    let deactivate = cells[this.state.activeCell];
    console.log("old active:", deactivate);
    cells[this.state.activeCell].active = false;
    cells[cellIndex].active = true;
    this.setState({cells: cells, activeCell: cellIndex});
  }

  keyPress(key) {
    let cells = this.state.cells;
    cells[this.state.activeCell].value = key;
    this.setState({cells: cells});
  }


  render() {

    const makeCellComponent = (c) => {
     return (
       <Cell key={`cell_${c.index}`}
        cell={c} activate={this.activate} />
      )
    };

    let cells = _.map(this.state.cells, makeCellComponent);
    let rows = _.chunk(cells, this.props.cols);

    return (
      <div>
        <div className="Grid">
          {rows.map(Row)}
        </div>
        <Keyboard keyPress={this.keyPress} />
      </div>
    );
  }
}

function Row(cells, rowNum) {
  const key = `row_${rowNum}`;
  return (
    <div key={key} className={`Row ${key} d-flex align-items-stretch`}>
      {cells}
    </div>
  )

}

function Cell(props) {
  const cell = props.cell;
  const css = (cell.active) ? "active":"inactive";
  const activate = ()=> { props.activate(cell.index); };

  return (
    <div id={`cell_${cell.index}`}
         className={`Cell border m-0 p-0 ${css}`}
         onClick={activate}>{cell.value}</div>
  )

}

export default Grid;
