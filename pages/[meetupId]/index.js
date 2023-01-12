import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
// import {useRouter} from "next/router";

export default function NewMeetupId() {
  // const router = useRouter();
  // const route = router.query.meetupId;
  return (
    <>
      <MeetupDetails
        image="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
        title="The first meet"
        address="some streed 5, some city"
        description="The meet up description"
      />
    </>
  );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ],
    
  }
}

export async function getStaticProps(context){

  const meetupId = context.params.meetupId
  return {
      props: {
          meetupData: {
            image:"https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE=",
            title: "The first meet",
            address: 'some street 5 some city',
            description: 'The meet up description'
          }
      },
  }
}
