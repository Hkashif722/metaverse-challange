import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Message from "../components/Messages";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  console.log(isAuthenticated);
  if (!isAuthenticated) return <Login />;
  return (
    <div className=" h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
      <Head>
        <title>Metaverse Challange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="max-w-screen-2xl mx-auto">
          {/* Header  */}
          <Header />
          {/* Message  */}
          <Messages />
        </div>
      </div>
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
}
