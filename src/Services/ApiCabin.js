import axios from "axios"

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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching cabins:", error);
    throw error;
  }
}

