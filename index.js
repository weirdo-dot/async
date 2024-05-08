// Task 01: Iterate with Async/Await
async function iterateWithAsyncAwait(arr) {
    for (const value of arr) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Task 02: Awaiting a Call
  async function awaitCall() {
    try {
      const response = await fetchDataFromAPI();
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch data from API:", error.message);
    }
  }
  
  // Task 03: Handling Errors with Async/Await
  async function awaitCall() {
    try {
      const response = await fetchDataFromAPI();
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch data from API:", error.message);
    }
  }