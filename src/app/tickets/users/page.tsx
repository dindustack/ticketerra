import { UserRoundCheck, UserRoundX } from "lucide-react";

const users = [
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
  {
    name: "Vera Wang",
    job: "Software Engineer",
    isAvailable: true,
  },
  {
    name: "Alexx Ekubo",
    job: "Product Manager",
    isAvailable: false,
  },
  // ... add as much users as you want
];
export default function UserList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td className={`text-white ${!user.isAvailable ? "bg-red-500" : "bg-green-500"}`}>
              {user.isAvailable ? <UserRoundX /> : <UserRoundCheck />}
            </td>
            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
