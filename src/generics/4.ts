interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  console.log("Updated values:", initialValues);
}
