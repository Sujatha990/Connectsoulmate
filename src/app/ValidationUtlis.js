import React from 'react'
import dummydata from './Loginregisterdummydata/dummydata'

export const validateCredentials = (email, password) => {
    return dummydata.find(user => user.email === email && user.password === password);
  };
  
  export const userExists = (email) => {
    return dummydata.some(user => user.email === email);
  };


 