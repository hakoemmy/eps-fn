import cogoToast from "cogo-toast";

const notifier = (message, status = "success") =>
  cogoToast[status](message, {
    position: "top-right",
    bar: { size: "6px" },
    hideAfter: 5,
  });

export default notifier;
