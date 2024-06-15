import api from "../api";

interface Event {
    name: string;
    description: string;
    startingDate: Date;
    endingDate: Date;
    type: string;
    location: string;
    slug: string;
    maxAttendees: number;
    userId: number;
  }

// Create Event
const createEvent = async (event: Event) => {
    try {
      const response = await api.post('/create-event/', event);
    
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('There was an error!', error);
      throw error;
    }
  };

  const eventService = {
    createEvent,
  };
  
  export default eventService;