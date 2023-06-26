import React from 'react';
type NotificationProps = {
    message:string
}

function Notification({ message }:NotificationProps) {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
}

export default Notification;