const Employees = [
  {
    id: "1",
    name: "Usman Khan",
    role: "Leader"
  },
  {
    id: "2",
    name: "Umer javeid",
    role: "Developer"
  },
  {
    id: "3",
    name: "Haris Safeer",
    role: "Developer"
  },
  {
    id: "4",
    name: "Umair Rajpoot",
    role: "Developer"
  },
  {
    id: "5",
    name: "Usman Ali",
    role: "Developer"
  },
  {
    id: "6",
    name: "Hamza Javeid",
    role: "Developer"
  }
];
export const getEmployees = () => {
  return Employees;
};
export const getEmployeeById = id => {
  return Employees.filter(employee => {
    return employee.id === id;
  });
};
