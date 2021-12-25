import { useMoralis } from "react-moralis";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `enter your UserName (currrent: ${user.get("username")})`
    );
    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change your UserName
      </button>
    </div>
  );
}

export default ChangeUserName;
