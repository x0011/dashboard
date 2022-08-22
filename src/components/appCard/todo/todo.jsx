import React from 'react';
import AppCard from '../appCard';
import TodoFront from './todoFront/todoFront';
import TodoBack from './todoBack/todoBack';
// images
import LSService from '../../../services/LSService';

export default class Todo extends React.Component {
  LS = new LSService('todo');

  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      showSettings: false,
    };
  }

  componentDidMount() {
    this.update();
  }

  showSettings = () => {
    const { showSettings } = this.state;
    this.setState({
      showSettings: !showSettings,
    });
  };

  // Хук для обновления состояния родителя
  update = () => {
    this.LS.setTest().then((res) => {
      this.setState({
        todoList: res.data,
      });
    });
  };

  addItem = (title) => {
    this.LS.addCustomItem({
      title,
      key: this.LS.genKey(),
    });
    this.update();
  };

  editItem = (itemKey, title) => {
    this.LS.editItem(itemKey, title);
    this.update();
  };

  deleteItem = (key) => {
    this.LS.deleteById(key);
    this.update();
  };

  render() {
    const { showSettings, todoList } = this.state;
    return (
      <AppCard
        front={(
          <TodoFront
            showSettings={this.showSettings}
            todoList={todoList}
            update={this.update}
            editItem={this.editItem}
            deleteItem={this.deleteItem}
          />
          )}
        back={(
          <TodoBack
            showSettings={this.showSettings}
            update={this.update}
            todoList={todoList}
            editItem={this.editItem}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
          />
        )}
        showSettings={showSettings}
      />
    );
  }
}
