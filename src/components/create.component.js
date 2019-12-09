import React, { Component } from 'react'
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      toDisplay: ''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name
    }
    axios.post('http://localhost:4000/business/add', obj)
      .then(res => {
        console.log(res.data.business, "DATA")
        this.setState({
          toDisplay: res.data.business.name
        })
      }
      );

    console.log(`The values are ${this.state.name}`)

  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Select city</label>

            <select
              onChange={this.onChangeName}
              value={this.state.name}
              class="form-control"
              id="exampleFormControlSelect1">
              <option>Iraq</option>
              <option>Paris</option>
              <option>Mordor</option>

            </select>
            {/* <input
              onChange={this.onChangeName}
              value={this.state.name}
              type="text"
              className="form-control" /> */}
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Call backend"
              className="btn btn-primary" />
          </div>

        </form>
        <h2>you have selected {this.state.toDisplay}</h2>
      </div>
    )
  }
}

export default Create
