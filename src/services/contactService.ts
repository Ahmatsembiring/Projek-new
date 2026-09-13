import { ContactMessagePayload } from '../types/journal';

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

export const contactService = {
  /**
   * Send a contact inquiry message
   */
  async sendMessage(payload: ContactMessagePayload): Promise<ContactResponse> {
    // Validate inputs
    if (!payload.name.trim()) {
      return { success: false, message: 'Nama lengkap wajib diisi.' };
    }
    if (!payload.email.trim() || !payload.email.includes('@')) {
      return { success: false, message: 'Alamat email tidak valid.' };
    }
    if (!payload.subject.trim()) {
      return { success: false, message: 'Subjek pesan wajib dipilih atau diisi.' };
    }
    if (!payload.message.trim() || payload.message.trim().length < 10) {
      return { success: false, message: 'Pesan minimal berisi 10 karakter.' };
    }

    // Simulate API request to backend / mailer
    return new Promise((resolve) => {
      setTimeout(() => {
        const ticketId = `GRD-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
        resolve({
          success: true,
          message: `Terima kasih! Pesan Anda telah diterima oleh Sekretariat Redaksi Garudaya. Nomor tiket: ${ticketId}. Kami akan membalas melalui email Anda dalam 1x24 jam kerja.`,
          ticketId,
        });
      }, 500);
    });
  },
};
