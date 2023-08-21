import { useEffect, useState } from "react";
import { trpc } from "../../trpc";
import { User } from "shared-ts";
import { Button } from "ui";

const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await trpc.user.get.query({ userId: "1234" });
      setUsers(users);
    };

    void getUsers();
  }, []);

  const handleClick = async () => {
    // await trpc.user.update.mutate({
    //   firstName: "fn",
    //   lastName: "ln",
    //   preferences: "pr",
    //   userId: "ui",
    // });

    await trpc.user.delete.mutate({ userId: "1234" });
  };

  return (
    <div className="h-screen">
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        test
      </Button>
      <h1 className="text-3xl font-extrabold p-6 text-center">Users</h1>
      <div>
        <ul className="flex flex-row gap-16">
          {users.map((user) => {
            return (
              <li className="border-gray-900 border-2 p-6 rounded">
                <p>
                  <strong>First Name: </strong>
                  {user.firstName}
                </p>
                <p>
                  <strong>Last Name: </strong> {user.lastName}
                </p>
                <p>{/* <strong>Preferences: </strong> {user.preferences} */}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListUsers;
