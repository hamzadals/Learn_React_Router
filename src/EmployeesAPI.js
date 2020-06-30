const Employees = [
  {
    id: "1",
    name: "Usman Khan",
    role: "Developer"
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
