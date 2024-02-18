function getWorkerDate() {
  const date = new Date();
  postMessage(date);
  setTimeout(getWorkerDate, 1000);
}

getWorkerDate();