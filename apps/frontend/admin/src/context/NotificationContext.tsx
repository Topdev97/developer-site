import React, { createContext, useContext, useState } from 'react';

export const NotificationContext = createContext<{ notifications: string[], addNotification:any}>({
  notifications: [],
  addNotification: () => {}
});
