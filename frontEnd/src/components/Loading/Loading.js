import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Lottie from "react-lottie";
import noteData from "../../assets/spinner.json";
const useStyles = makeStyles(() => ({
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: blueGrey[50],
    maxWidth: "100vw",
  },
}));

const Loading = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderedSettings: {
      preseveAspectRatio: "xMdidYMid slice",
    },
  };

  return (
    <>
      <Container maxheight="100vh" className={classes.image}>
        <div>
          <Lottie
            options={{ animationData: noteData, ...defaultOptions }}
            width="100vw"
            height="100vh"
          />
        </div>
      </Container>
    </>
  );
};

export default Loading;
