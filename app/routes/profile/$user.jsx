
import { useLoaderData } from "remix";

export const loader = async ({ params }) => {
  let user = null;
  await fetch(`https://api.github.com/users/${params.user}`, { method: 'GET' })
    .then(response => response.json())
    .then(resp => {
      user = resp;
    })
  return user;
};

export default function UserProfile() {
  const user = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", maxWidth: '728px', margin: '0 auto' }}>
      <h1>It's {user.login}'s profile</h1>

      {Object.keys(user).map((key, index) => (
        <p key={index}>{key}: <strong>{user[key]}</strong></p>
      ))}

    </div>
  );
}
