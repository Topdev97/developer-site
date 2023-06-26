import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { NotificationContext } from '../../context/NotificationContext';
import Notification from '../Notification';

function NotificationPortal() {
  const { notifications } = useContext(NotificationContext)

  return ReactDOM.createPortal(
    <>
      {notifications.map((message, i) => (
        <Notification key={i} message={message} />
      ))}
    </>,
    document.querySelector('.notification-container') as Element
  );
}

export default NotificationPortal;