'use client'

import React from "react";

export default function Home() {
  const [calls, setCalls] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/graphql/num_calls");
      const new_num_calls = await response.json().then(data => data.data.num_calls);
      setCalls(new_num_calls);
    }
    fetchData();
  }, [])

  async function callBackend() {
    const response = await fetch("/graphql/call");
    const new_num_calls = await response.json().then(data => data.data.num_calls);
    setCalls(new_num_calls);
  }

  return (
    <main>
      Calls: {calls}
      <button onClick={callBackend}>Call</button>
    </main>
  )
}
