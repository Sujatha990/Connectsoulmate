// data/dummyData.js

let dummyData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  ];
  
  export default dummyData;
  
  export const addNewUser = (userData) => {
    const newUser = {
      id: dummyData.length + 1, // Generate new ID based on current array length (simplified)
      ...userData
    };
    dummyData.push(newUser);
  };
  