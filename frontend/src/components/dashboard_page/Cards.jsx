import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    cursor: "pointer",
    boxShadow: "0 10px 6px -6px #777",
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: "20px",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  header: {
    color: "red",
    fontSize: "24px",
    fontWeight: 600,
  },
}));

export default function AlbumCard(props) {
  const classes = useStyles();
  return (
    <>
      <Link
        to={`/flat/${props.data.flat_id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.root}>
          <div class="card mb-3 ml-5 shadow p-3 mb-5 bg-white rounded">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={props.data.flat_image[0]}
                  class="card-img"
                  style={{ height: "200px" }}
                  alt="flats"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title text-danger">
                    Flat No : {props.data.flat_number}
                  </h2>
                  <h6 class="card-text">Type : {props.data.resident_type}</h6>
                  <h6 class="card-text">Block : {props.data.block}</h6>

                  <h6 class="card-text">
                    No of Resident : {props.data.flat_resident.length}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
