import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  async function addMeetupHandler(data) {
    const response = await fetch('/api/new-meetups', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const meetData = await response.json();
    console.log(meetData)
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
