import React, { Component } from "react";

const FeePrompt = () => {
  if (window.confirm("Are you 18 or over?")) {
    alert("Are you sure?");
  } else {
    alert("We won't tell anyone ;)");
  }
};

// async function doubleConfirm() {
//   const confirmation = await enteranceFee();
// }

export default FeePrompt;
