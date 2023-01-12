import React from "react";
import Image from "next/image";
import classes from './MeetupDetails.module.css'

export default function MeetupDetails(props) {
  const myLoader = () => {
    return props.image;
  };
  return (
    <section className={classes.details}>
      <Image
        loader={myLoader}
        src={props.image}
        alt={props.title}
        width={500}
        height={500}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
