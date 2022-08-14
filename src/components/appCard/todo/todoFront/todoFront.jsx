import React from 'react';
import Styles from './todoFront.module.scss';
import TodoList from '../todoList/todoList';
// images
import IMG_edit from '../../../../assets/img/todo/edit.svg';

export default class TodoFront extends React.Component {
  render() {
    const {
      showSettings, todoList, deleteItem, editItem,
    } = this.props;
    return (
      <>
        <div className={Styles.header}>
          <div className={Styles.title}>Мои задачи</div>
          <button className={Styles.editBtn} type="button" href="#" onClick={showSettings} onKeyUp={showSettings}>
            <img src={IMG_edit} alt="" />
          </button>
        </div>
        <div className={Styles.list}>
          <TodoList data={todoList} deleteItem={deleteItem} editItem={editItem} />
        </div>
      </>
    );
  }
}
