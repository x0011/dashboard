import React from 'react';
import Styles from './todoList.module.scss';
import LSService from '../../../../services/LSService';
import AppCard from '../../appCard';
// images
import IMG_delIcon from '../../../../assets/img/todo/trash.svg';

// function genKey() {
//   return `todo_${new Date().getTime()}`;
// }

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: null,
      editableValue: null,
    };
  }

  startEdit = (key) => {
    this.setState({
      editable: key,
    });
  };

  closeEdit = (event) => {
    this.setState({
      editable: null,
    });
  };

  editItem = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      editableValue: value,
    });
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.editableValue);
  };

  // Формирует список todo
  // createList() {
  //   const { data } = this.props;
  //   const { editable } = this.state;
  //   let listView;
  //   if (data.length > 0) {
  //     listView = data.map((item) => (
  //       editable !== item.key
  //         ? (
  //           <li
  //             className={`${Styles.item} ${Styles.itemComplete}`}
  //             key={item.key}
  //             onClick={() => { this.startEdit(item.key); }}
  //             alt="Нажмите чтобы завершить"
  //           >
  //             {item.title}
  //           </li>
  //         )
  //         : (
  //           <li
  //             className={`${Styles.item} ${Styles.itemComplete}`}
  //             key={item.key}
  //             alt="Нажмите чтобы завершить"
  //           >
  //             <input
  //               onBlur={this.closeEdit}
  //               onFocus={this.editItem}
  //               className={Styles.edit}
  //               defaultValue={item.title}
  //               onChange={this.editItem}
  //             />
  //           </li>
  //         )
  //     ));
  //   }

  // Формирует список todo
  createList = () => {
    const { data, deleteItem } = this.props;
    let listView;
    if (data.length > 0) {
      listView = data.map((item) => (
        <li
          className={`${Styles.item} ${Styles.itemComplete}`}
          key={item.key}
          alt="Нажмите чтобы завершить"
        >
          <input
            className={Styles.edit}
            defaultValue={item.title}
            onChange={(event) => this.editItem(event, item.key)}
            onFocus={() => this.startEdit(item.key)}
            onBlur={(event) => this.endEdit(event, item.key)}
          />
          <button onClick={() => deleteItem(item.key)} type="button" className={Styles.delItemBtn}>
            <img src={IMG_delIcon} alt="Test" />
          </button>
        </li>
      ));
    }

    return (
      data.length > 0
        ? listView
        : <span className={Styles.noTasks}>Нет добавленных заданий</span>
    );
  };

  endEdit(event, itemKey) {
    const { target } = event;
    const { editItem, deleteItem } = this.props;
    const { editableValue } = this.state;
    if (target.defaultValue !== target.value && target.value !== '') {
      // eslint-disable-next-line no-restricted-globals
      const save = confirm('Сохранить изменения?');
      if (save) {
        editItem(itemKey, editableValue);
      } else {
        target.value = event.target.defaultValue;
      }
    } else if (target.value === '') {
      // eslint-disable-next-line no-restricted-globals
      const remove = confirm('Удалить задание?');
      if (remove) {
        deleteItem(itemKey);
      } else {
        target.value = event.target.defaultValue;
      }
    }
  }

  render() {
    return (
      <ul className={Styles.wrapper}>
        {this.createList()}
      </ul>
    );
  }
}
