import axios from 'axios';

export async function fetchUserTasks() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return response?.data?.slice(0, 3) || [];
  } catch (error) {
    console.error('Error fetching random data:', error);
    throw error;
  }
}