const fetchData = async () => {
  // REST API

  try {
    // get videos form yt server
    // show a spinner
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    debugger;

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    // show a popup error
  } finally {
    // hide spinner
  }
};
fetchData();

// const fetchTeacherData = async () => {
//   // 1) pyaj
//   // 3) tel garam pareo
// };
// async function fetchData()
// {

// }
