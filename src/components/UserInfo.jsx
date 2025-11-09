export const UserInfo = ({ userInformation }) => {
  const firstName = userInformation?.firstName;
  const lastName = userInformation?.lastName;
  return (
    <div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
    </div>
  );
};
