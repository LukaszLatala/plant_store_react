import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import { routes } from "../../../src/routes/routes";
import { animateScroll as scroll } from "react-scroll";

// https://material-ui.com/components/grid-list/#image-only-grid-list
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 550,
  },
}));

const tileData = [
  {
    img:
      "https://cdn.shoplo.com/2473/banners/6-12-1604945237_f2c87f7208cfa440.jpg?286",
    title: "lewa góra",
    cols: 2,
  },
  {
    img:
      "https://cdn.shoplo.com/2473/banners/6-21-1604945256_299098161eef3c9e.jpg?288",
    title: "sa",
    cols: 2,
  },
  {
    img:
      "https://cdn.shoplo.com/2473/banners/4-21-1604945220_112e623ba8c96792.jpg?284",
    title: "sa",
    cols: 2,
  },
];

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className="text_info">
        <h1>Welcome to our amazing shop!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          odio molestias labore alias ad numquam sapiente ex consequuntur
          dolorem? Impedit modi repellat rem fuga odit laboriosam esse sequi
          pariatur cupiditate. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptatem, odio molestias labore alias ad numquam
          sapiente ex consequuntur dolorem? Impedit modi repellat rem fuga odit
          laboriosam esse sequi pariatur cupiditate.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatem, odio molestias labore alias
          ad numquam sapiente ex consequuntur dolorem? Impedit modi repellat rem
          fuga odit laboriosam esse sequi pariatur cupiditate. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Voluptatem, odio molestias
          labore alias ad numquam sapiente ex consequuntur dolorem? Impedit modi
          repellat rem fuga odit laboriosam esse sequi pariatur cupiditate.
        </p>{" "}
      </div>
      <Link
        className="return_link"
        to={routes.products}
        onClick={() => scroll.scrollToTop()}
      >
        <div className="container_images">
          <div className={classes.root}>
            <GridList cellHeight={280} className={classes.gridList} cols={2}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1} rows={1}>
                  <img
                    src={tile.img}
                    alt={tile.title}
                    title={"Lets clic and see our products"}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Home;
