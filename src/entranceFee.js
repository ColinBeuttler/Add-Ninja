const enteranceFee = confirm("Are you 18?");

async function doubleConfirm() {
  const confirmation = await enteranceFee();
}

export default enteranceFee;
