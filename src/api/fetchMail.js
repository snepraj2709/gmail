import dayjs from "dayjs";
const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const fetchMail = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allemails") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            // Entry 1
            {
              mailId: 1,
              subject: "Planning a Weekend Getaway",
              mailBody:
                "Hey there! I've been thinking about planning a weekend getaway. Are you up for some adventure?",
              sender: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              receiver: {
                userId: 3,
                email: "david@example.com",
                name: "David Smith",
              },
              starred: false,
              deleted: false,
              important: true,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: false,
              replies: [
                {
                  mailId: 2,
                  sender: {
                    id: 3,
                    email: "david@example.com",
                    name: "David Smith",
                  },
                  receiver: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  mailBody:
                    "Hi Emma, that sounds amazing! I'm definitely in. Any specific destination in mind?",
                },
                {
                  mailId: 3,
                  sender: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  receiver: {
                    id: 3,
                    email: "david@example.com",
                    name: "David Smith",
                  },
                  mailBody:
                    "I was thinking of a cozy cabin in the mountains. How does that sound?",
                },
                {
                  mailId: 4,
                  sender: {
                    id: 3,
                    email: "david@example.com",
                    name: "David Smith",
                  },
                  receiver: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  mailBody: "Sounds perfect! Let's start planning the details.",
                },
              ],
            },
            // Entry 2
            {
              mailId: 5,
              subject: "Recipe Exchange",
              mailBody:
                "Hey, I recently tried a new recipe for chocolate chip cookies. They turned out amazing! Would you like the recipe?",
              sender: {
                userId: 4,
                email: "sara@example.com",
                name: "Sara Johnson",
              },
              receiver: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              starred: true,
              deleted: false,
              important: false,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: false,
              replies: [
                {
                  mailId: 6,
                  sender: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  receiver: {
                    id: 4,
                    email: "sara@example.com",
                    name: "Sara Johnson",
                  },
                  mailBody:
                    "Hi Sara, I'd love to have the recipe! Chocolate chip cookies are my weakness.",
                },
                {
                  mailId: 7,
                  sender: {
                    id: 4,
                    email: "sara@example.com",
                    name: "Sara Johnson",
                  },
                  receiver: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  mailBody: "Sure thing! I'll send it over in a bit.",
                },
              ],
            },
            // Entry 3
            {
              mailId: 8,
              subject: "Upcoming Team Meeting",
              mailBody:
                "Hello team, our next meeting is scheduled for next Monday at 10 AM. Please make sure to prepare your updates and bring any relevant materials.",
              sender: {
                userId: 5,
                email: "jason@example.com",
                name: "Jason Miller",
              },
              receiver: {
                userId: 6,
                email: "team@example.com",
                name: "Project Team",
              },
              starred: false,
              deleted: true,
              important: true,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: true,
              replies: [],
            },
            // Entry 4
            {
              mailId: 9,
              subject: "Travel Recommendations",
              mailBody:
                "Hi there, I'm planning a solo trip next month and I'm looking for some travel recommendations. Any hidden gems you'd like to share?",
              sender: {
                userId: 7,
                email: "lucas@example.com",
                name: "Lucas Turner",
              },
              receiver: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              starred: true,
              deleted: false,
              important: false,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: false,
              replies: [
                {
                  mailId: 10,
                  sender: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  receiver: {
                    id: 7,
                    email: "lucas@example.com",
                    name: "Lucas Turner",
                  },
                  mailBody:
                    "Hey Lucas, I've got a few recommendations in mind. Let me know your interests so I can tailor the suggestions!",
                },
              ],
            },
            // Entry 5
            {
              mailId: 11,
              subject: "Congratulations on Your Promotion!",
              mailBody:
                "Hi [Name], I heard about your recent promotion. Congratulations! You deserve all the success that's coming your way.",
              sender: {
                userId: 8,
                email: "natalie@example.com",
                name: "Natalie Adams",
              },
              receiver: {
                userId: 9,
                email: "recipient@example.com",
                name: "Recipient Name",
              },
              starred: true,
              deleted: false,
              important: true,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: false,
              replies: [
                {
                  mailId: 12,
                  sender: {
                    id: 9,
                    email: "recipient@example.com",
                    name: "Recipient Name",
                  },
                  receiver: {
                    id: 8,
                    email: "natalie@example.com",
                    name: "Natalie Adams",
                  },
                  mailBody:
                    "Thank you so much, Natalie! I'm really excited about it.",
                },
              ],
            },
            //Entry 6
            {
              mailId: 12,
              subject: "Just wanna know how you are doing",
              mailBody: "Hi how are your and other such long lines of text",
              sender: {
                userId: 2,
                email: "ayesha@gmail.com",
                name: "Ayesha takia",
              },
              receiver: {
                userId: 3,
                email: "ayush@gmail.com",
                name: "Ayush Mehra",
              },
              starred: false,
              deleted: false,
              important: true,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: true,
              replies: [
                {
                  mailId: 2,
                  sender: {
                    id: 2,
                    email: "ayesha@gmail.com",
                    name: "Ayesha takia",
                  },
                  receiver: {
                    id: 3,
                    email: "ayush@gmail.com",
                    name: "Ayush Mehra",
                  },
                  mailBody: "Hi Ayush, I am good, how are you",
                },
                {
                  mailId: 3,
                  sender: {
                    id: 3,
                    email: "ayush@gmail.com",
                    name: "Ayush Mehra",
                  },
                  receiver: {
                    userId: 2,
                    email: "ayesha@gmail.com",
                    name: "Ayesha takia",
                  },
                  mailBody:
                    "Just planning a new vacation with friends, wanna join",
                },
                {
                  mailId: 4,
                  sender: {
                    userId: 2,
                    email: "ayesha@gmail.com",
                    name: "Ayesha takia",
                  },
                  receiver: {
                    userId: 3,
                    email: "ayush@gmail.com",
                    name: "Ayush Mehra",
                  },
                  mailBody: "Yeah Sure, why not",
                },
              ],
            },
            {
              mailId: 13,
              subject: "Movie Night Tomorrow!",
              mailBody:
                "Hey everyone, we're having a movie night at my place tomorrow. Feel free to bring your favorite snacks!",
              sender: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              receiver: {
                userId: 10,
                email: "friends@example.com",
                name: "Close Friends",
              },
              starred: true,
              deleted: false,
              important: false,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: false,
              replies: [],
            },

            // Entry 7
            {
              mailId: 14,
              subject: "Volunteer Opportunity",
              mailBody:
                "Hello Emma, our local community center is organizing a volunteering event this weekend. Would you be interested in joining?",
              sender: {
                userId: 11,
                email: "community@example.com",
                name: "Community Center",
              },
              receiver: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              starred: false,
              deleted: false,
              important: true,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: true,
              replies: [
                {
                  mailId: 15,
                  sender: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  receiver: {
                    id: 11,
                    email: "community@example.com",
                    name: "Community Center",
                  },
                  mailBody:
                    "Hi, thanks for letting me know! I'd love to contribute. Please provide me with more details.",
                },
              ],
            },

            // Entry 8
            {
              mailId: 16,
              subject: "Meeting Reminder",
              mailBody:
                "Hi Emma, just a quick reminder about our team meeting tomorrow. Your input is crucial for the upcoming project discussions.",
              sender: {
                userId: 12,
                email: "manager@example.com",
                name: "Project Manager",
              },
              receiver: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              starred: false,
              deleted: false,
              important: true,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: true,
              replies: [],
            },

            // Entry 9
            {
              mailId: 17,
              subject: "Book Recommendations",
              mailBody:
                "Hello Emma, I recently read a captivating book and thought you might enjoy it too. It's called 'The Night Circus.'",
              sender: {
                userId: 13,
                email: "booklover@example.com",
                name: "Book Lover",
              },
              receiver: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              starred: true,
              deleted: false,
              important: false,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: false,
              replies: [
                {
                  mailId: 18,
                  sender: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  receiver: {
                    id: 13,
                    email: "booklover@example.com",
                    name: "Book Lover",
                  },
                  mailBody:
                    "Thank you for the recommendation! I've heard great things about 'The Night Circus.' I'll definitely check it out.",
                },
              ],
            },

            // Entry 10
            {
              mailId: 19,
              subject: "Weekend Plans",
              mailBody:
                "Hey Emma, I hope you're doing well. I'm thinking of going for a hike this weekend. Would you like to join me?",
              sender: {
                userId: 14,
                email: "outdoors@example.com",
                name: "Outdoor Enthusiast",
              },
              receiver: {
                userId: 2,
                email: "emma@example.com",
                name: "Emma Watson",
              },
              starred: true,
              deleted: false,
              important: false,
              media: "",
              createdAt: formatDate(),
              updatedAt: formatDate(),
              read: true,
              replies: [
                {
                  mailId: 20,
                  sender: {
                    id: 2,
                    email: "emma@example.com",
                    name: "Emma Watson",
                  },
                  receiver: {
                    id: 14,
                    email: "outdoors@example.com",
                    name: "Outdoor Enthusiast",
                  },
                  mailBody:
                    "Hi, thanks for the invitation! Hiking sounds great. I'm in!",
                },
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Email list not found.",
        });
      }
    }, 2000);
  });
};
export default fetchMail;
