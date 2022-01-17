import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Select github user</h1>
      <ul>
        <li>
          <Link to="/profile/ervandra">
            ervandra
          </Link>
        </li>
        <li>
          <Link to="/profile/ervandrah">
            ervandrah
          </Link>
        </li>
      </ul>
    </div>
  );
}

export async function getUser(user) {
  const postData = await fetch(`https://api.github.com/users/${user}`);
  return { user, data: postData };
}