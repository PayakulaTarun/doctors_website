import api from '../lib/api';

export const getClinicalSummary = async (appointmentId: number, patientNotes: string) => {
  try {
    const response = await api.post('/ai/summarize', {
      appointment_id: appointmentId,
      notes: patientNotes
    });

    return response.data;
  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
};
