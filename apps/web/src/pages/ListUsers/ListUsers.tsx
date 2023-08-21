import { useEffect, useState } from "react";
import { trpc } from "../../trpc";
import { User } from "shared-ts";
import { Link } from "ui";

const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await trpc.user.getAll.query();
      setUsers(users);
    };

    void getUsers();
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-extrabold p-6 text-center">Users</h1>
      <div>
        {users.length === 0 ? (
          <p>
            Looks like there's no users. Why not create one{" "}
            <Link href="/users/create" className="text-red-500">
              Here
            </Link>
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {users.map((user) => {
              return (
                <li className="flex flex-col gap-2 border-gray-900 border-2 p-2 rounded">
                  <p>
                    <strong>First Name: </strong>
                    {user.firstName}
                  </p>
                  <p>
                    <strong>Last Name: </strong> {user.lastName}
                  </p>
                  <Link href={`/users/${user.userId}`} className="text-white bg-blue-500 p-2 rounded w-fit">
                    Update user
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListUsers;
