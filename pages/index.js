import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEET = [
  {
    id: "m1",
    title: "My first meetup",
    address: "some city-1456, some state",
    image:
      "https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE=",
  },
  {
    id: "m1",
    title: "My second meetup",
    address: "some city-66, some state",
    image:
      "https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE=",
  },
];
export default function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps(){
    return {
        props: {
            meetups: DUMMY_MEET
        },
        revalidate: 1
    }
}
