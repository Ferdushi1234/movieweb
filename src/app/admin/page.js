"use client";

import { useSession } from "next-auth/react";
import Dashboard from "../dashboard/page"
const Home = () => {
  const { data: session, status } = useSession({
    required: true,
  });

  if(status === "loading") {
    return <><h1>Loading...</h1></>
  }

  return (
    <>
      <Dashboard/>
    </>
  );
};export default Home;
