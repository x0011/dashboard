import React from 'react';
import IMG_edit from '../../../../assets/img/todo/edit.svg';
import Styles from './todoBack.module.scss';
import TodoList from '../todoList/todoList';
import LSService from '../../../../services/LSService';

class TodoBack extends React.Component {
  LS = new LSService('todo');

  constructor() {
    super();
    this.state = {
      itemTitle: null,
    };
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      itemTitle: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { addItem } = this.props;
    const { itemTitle } = this.state;
    addItem(itemTitle);
  };

  // addItem(event) {
  //   const { update, addItem } = this.props;
  //   const { itemTitle } = this.state;
  //   this.LS.addItem({
  //     title: itemTitle,
  //     status: false,
  //     key: this.LS.genKey(),
  //   });
  //   update();
  // }

  render() {
    const {
      showSettings, todoList, editItem, deleteItem,
    } = this.props;
    return (
      <>
        <div className={Styles.wrapper}>
          <form className={Styles.form} onSubmit={this.onSubmit}>
            <button className={Styles.editBtn} type="button" href="#" onClick={showSettings} onKeyUp={showSettings} label="Закрыть" />
            <input className={Styles.input} type="text" onChange={this.onChange} placeholder="Новая задача" />
            <button type="submit" aria-label="Добавить" className={Styles.addBtn} />
          </form>
        </div>
        <div className={Styles.list}>
          <TodoList data={todoList} deleteItem={deleteItem} editItem={editItem} />
        </div>
      </>
    );
  }
}

export default TodoBack;
