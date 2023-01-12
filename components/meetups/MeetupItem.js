import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/" + props.id);
  };
  const myLoader = () => {
    return props.image;
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            loader={myLoader}
            src={props.image}
            alt={props.title}
            width={500}
            height={500}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
