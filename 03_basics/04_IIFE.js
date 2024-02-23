(function chai() {
  console.log("DB Connected");
})();

((name) => {
  console.log(`DB Connected 2 ${name}`);
})("Sameer");
