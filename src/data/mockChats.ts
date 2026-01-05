export type Message = {
  id: string;
  text: string;
  timestamp: string;
  senderId: string;
};

export type Chat = {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage: string;
  timestamp: string;
  matchDate: string;
  messages: Message[];
};

export const currentUserId = "me";

export const mockChats: Chat[] = [
  {
    id: "chat-1",
    name: "Lucía",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    lastMessage: "¿Nos vemos este finde?",
    timestamp: "10:32",
    matchDate: "Matched hace 2 días",
    messages: [
      {
        id: "msg-1",
        text: "¡Hola! Me encantó tu playlist.",
        timestamp: "10:12",
        senderId: "lucia",
      },
      {
        id: "msg-2",
        text: "¡Gracias! ¿Tienes alguna recomendación?",
        timestamp: "10:14",
        senderId: currentUserId,
      },
      {
        id: "msg-3",
        text: "Sí, después te mando mis favoritas.",
        timestamp: "10:18",
        senderId: "lucia",
      },
      {
        id: "msg-4",
        text: "¿Nos vemos este finde?",
        timestamp: "10:32",
        senderId: "lucia",
      },
    ],
  },
  {
    id: "chat-2",
    name: "Mateo",
    avatarUrl: "https://i.pravatar.cc/150?img=33",
    lastMessage: "¡Planazo!",
    timestamp: "Ayer",
    matchDate: "Matched hace 1 semana",
    messages: [
      {
        id: "msg-5",
        text: "Ese lugar está brutal.",
        timestamp: "Ayer",
        senderId: "mateo",
      },
      {
        id: "msg-6",
        text: "Entonces lo agendamos 😊",
        timestamp: "Ayer",
        senderId: currentUserId,
      },
      {
        id: "msg-7",
        text: "¡Planazo!",
        timestamp: "Ayer",
        senderId: "mateo",
      },
    ],
  },
  {
    id: "chat-3",
    name: "Sofía",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Me encantó tu foto en la playa.",
    timestamp: "Lun",
    matchDate: "Matched hace 3 semanas",
    messages: [
      {
        id: "msg-8",
        text: "Me encantó tu foto en la playa.",
        timestamp: "Lun",
        senderId: "sofia",
      },
      {
        id: "msg-9",
        text: "¡Gracias! Fue en Cádiz.",
        timestamp: "Lun",
        senderId: currentUserId,
      },
    ],
  },
];
