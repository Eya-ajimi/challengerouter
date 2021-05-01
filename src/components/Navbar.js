import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu, Search } from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
   
    
    return (
      <div>
        <Menu pointing>
          <Link to="/" > <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          /></Link>
           <Link to="/tours"><Menu.Item
            name='Our Tours'
            active={activeItem === 'Our Tours'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to="/addtour"> <Menu.Item
            name='Add New Tour'
            active={activeItem === 'Add New Tour'}
            onClick={this.handleItemClick}
          /></Link>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...'
              value ={this.props.Search}
              onChange={e=>this.props.setSearch(e.target.value)} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}