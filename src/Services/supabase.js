import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nyaodbdifwekqpwtsfmt.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YW9kYmRpZndla3Fwd3RzZm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTY1ODcsImV4cCI6MjA0NzkzMjU4N30.MQN-Sy_abhkPoRk2yVCm8qVLqd0ibc4Rj2JIOvwvibw"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase