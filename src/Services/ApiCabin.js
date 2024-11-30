import axios from "axios"
import supabase from './supabase'
export async function getCabins() {
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YW9kYmRpZndla3Fwd3RzZm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTY1ODcsImV4cCI6MjA0NzkzMjU4N30.MQN-Sy_abhkPoRk2yVCm8qVLqd0ibc4Rj2JIOvwvibw";
  try {
       const response = await axios.get(
      "https://nyaodbdifwekqpwtsfmt.supabase.co/rest/v1/Cabins?select=*",
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`
        }
      }
    );
    console.log(response);
    return response.data;
  } 
  catch (error) {
    console.error("Error fetching cabins:", error);
    throw error;
  }
}

export async function AddNewCabin(data) {
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YW9kYmRpZndla3Fwd3RzZm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTY1ODcsImV4cCI6MjA0NzkzMjU4N30.MQN-Sy_abhkPoRk2yVCm8qVLqd0ibc4Rj2JIOvwvibw";

  try {
    const response = await axios.post(
      "https://nyaodbdifwekqpwtsfmt.supabase.co/rest/v1/Cabins",
      [data],
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding new cabins:", error);
    throw error;
  }
}


export async function deleteCabin(id) {
  // const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  // if (error) {
  //   console.error(error);
  //   throw new Error("Cabin could not be deleted");
  // }

  // return data;
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YW9kYmRpZndla3Fwd3RzZm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTY1ODcsImV4cCI6MjA0NzkzMjU4N30.MQN-Sy_abhkPoRk2yVCm8qVLqd0ibc4Rj2JIOvwvibw";

  try {
    const response = await axios.delete(
      `https://nyaodbdifwekqpwtsfmt.supabase.co/rest/v1/Cabins?id=eq.${id}`, 
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting cabin:", error.response?.data || error.message);
    throw error;
  }
}
export async function getById(Id) {
  if (!Id) {
    throw new Error("Invalid ID"); // Prevents running the query with an undefined ID
  }

  let { data: cabin, error } = await supabase
    .from("Cabins")
    .select("*")
    .eq("id", Id);

  if (error) {
    console.error(error.message);
    throw new Error(error.message); // Throw an error to let React Query handle it
  }

  return cabin; // Return the data (React Query will manage it)
}




  // const supabaseKey =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YW9kYmRpZndla3Fwd3RzZm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTY1ODcsImV4cCI6MjA0NzkzMjU4N30.MQN-Sy_abhkPoRk2yVCm8qVLqd0ibc4Rj2JIOvwvibw";

  // try {
  //   const response = await axios.get(
  //     `https://nyaodbdifwekqpwtsfmt.supabase.co/rest/v1/Cabins?select=7`, 
  //     {
  //       headers: {
  //         apikey: supabaseKey,
  //         Authorization: `Bearer ${supabaseKey}`,
  //       },
  //     }
  //   );
  //   console.log(response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error deleting cabin:", error.response?.data || error.message);
  //   throw error;
  // }
