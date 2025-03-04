import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const botToken = process.env.TELEGRAM_BOT_TOKEN;

export async function telegramChannelMembers(channelName: string): Promise<number> {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${botToken}/getChatMembersCount?chat_id=@${channelName}`);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching Telegram members count:', error);
    return 0;
  }
}

export function formatMemberCount(num: number): string {
  if (num < 1000) {
    return num.toString();
  } else if (num < 10000) {
    const truncated = Math.floor((num / 1000) * 10) / 10;
    return truncated + 'k';
  } else {
    return Math.floor(num / 1000) + 'k';
  }
}
