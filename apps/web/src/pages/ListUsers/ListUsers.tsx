const ListUsers = () => {
  const users = [
    {
      firstName: "ryan",
      lastName: "robinson",
      preferences: "consent",
    },
    {
      firstName: "ryan 2",
      lastName: "robinson 2",
      preferences: "consent 2",
    },
  ];

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-extrabold p-6 text-center">Users</h1>
      <div>
        <ul className="flex flex-row gap-16">
          {users.map((user) => {
            return (
              <li className="border-gray-900 border-2 p-6 rounded">
                <p>
                  <strong>First Name: </strong> {user.firstName}
                </p>
                <p>
                  <strong>Last Name: </strong> {user.lastName}
                </p>
                <p>
                  <strong>Preferences: </strong> {user.preferences}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListUsers;
