import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="text-center">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <div className="row">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index} className="col-md-6">
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
