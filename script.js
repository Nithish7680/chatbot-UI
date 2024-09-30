    //Privacy
    // document.addEventListener("contextmenu", function(e) {
    //     e.preventDefault();
    // }, false);
    // document.addEventListener("keydown", function(e) {
    //     if (e.ctrlKey || e.keyCode === 123) { // Disable Ctrl and F12
    //         e.stopPropagation();
    //         e.preventDefault();
    //     }
    // }, false);
    
const data = {
    "users": [
        {
          "user_id": "user_1",
          "name": "Alice",
          "profile_image": "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png", // Unique image URL for Alice
          "messages": [
            {
              "message_id": "msg_1",
              "timestamp": "2024-08-13T12:00:00Z",
              "type": "text",
              "content": "Hi there, I'm Alice.",
              "sender": "user"
            },
            {
              "message_id": "msg_2",
              "timestamp": "2024-08-13T12:01:00Z",
              "type": "text",
              "content": "How can I help you today?",
              "sender": "bot"
            },
            {
              "message_id": "msg_3",
              "timestamp": "2024-08-13T12:15:00Z",
              "type": "text",
              "content": "I have a question about your services.",
              "sender": "user"
            },
            {
              "message_id": "msg_4",
              "timestamp": "2024-08-13T12:16:00Z",
              "type": "text",
              "content": "Sure, what would you like to know?",
              "sender": "bot"
            },
            {
              "message_id": "msg_5",
              "timestamp": "2024-08-13T12:30:00Z",
              "type": "text",
              "content": "Can you tell me about the pricing?",
              "sender": "user"
            },
            {
              "message_id": "msg_6",
              "timestamp": "2024-08-13T12:31:00Z",
              "type": "text",
              "content": "Our pricing depends on the service. Do you have a specific service in mind?",
              "sender": "bot"
            },
            {
              "message_id": "msg_7",
              "timestamp": "2024-08-13T12:45:00Z",
              "type": "text",
              "content": "Yes, I’m interested in the premium package.",
              "sender": "user"
            },
            {
              "message_id": "msg_8",
              "timestamp": "2024-08-13T12:46:00Z",
              "type": "text",
              "content": "The premium package is $299. It includes additional features and support.",
              "sender": "bot"
            },
            {
              "message_id": "msg_9",
              "timestamp": "2024-08-13T13:00:00Z",
              "type": "text",
              "content": "That sounds good. How do I sign up?",
              "sender": "user"
            },
            {
              "message_id": "msg_10",
              "timestamp": "2024-08-13T13:01:00Z",
              "type": "text",
              "content": "I can assist you with the sign-up process. Just follow the link I’ll send.",
              "sender": "bot"
            }
          ]
        },
        {
          "user_id": "user_2",
          "name": "Bob",
          "profile_image": "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png", // Unique image URL for Bob
          "messages": [
            {
              "message_id": "msg_11",
              "timestamp": "2024-08-13T12:05:00Z",
              "type": "text",
              "content": "Hello, Bob here.",
              "sender": "user"
            },
            {
              "message_id": "msg_12",
              "timestamp": "2024-08-13T12:06:00Z",
              "type": "text",
              "content": "Hello Bob! How can I assist you today?",
              "sender": "bot"
            },
            {
              "message_id": "msg_13",
              "timestamp": "2024-08-13T12:20:00Z",
              "type": "text",
              "content": "I need help with my account.",
              "sender": "user"
            },
            {
              "message_id": "msg_14",
              "timestamp": "2024-08-13T12:21:00Z",
              "type": "text",
              "content": "What specific issue are you encountering with your account?",
              "sender": "bot"
            },
            {
              "message_id": "msg_15",
              "timestamp": "2024-08-13T12:35:00Z",
              "type": "text",
              "content": "I forgot my password and can’t log in.",
              "sender": "user"
            },
            {
              "message_id": "msg_16",
              "timestamp": "2024-08-13T12:36:00Z",
              "type": "text",
              "content": "I can help with that. Please follow the password reset instructions I’ll send.",
              "sender": "bot"
            },
            {
              "message_id": "msg_17",
              "timestamp": "2024-08-13T12:50:00Z",
              "type": "text",
              "content": "Got it, thanks!",
              "sender": "user"
            },
            {
              "message_id": "msg_18",
              "timestamp": "2024-08-13T12:51:00Z",
              "type": "text",
              "content": "You’re welcome! Let me know if you need further assistance.",
              "sender": "bot"
            },
            {
              "message_id": "msg_19",
              "timestamp": "2024-08-13T13:05:00Z",
              "type": "text",
              "content": "Will do. Have a great day!",
              "sender": "user"
            },
            {
              "message_id": "msg_20",
              "timestamp": "2024-08-13T13:06:00Z",
              "type": "text",
              "content": "You too, Bob!",
              "sender": "bot"
            }
          ]
        },
        {
          "user_id": "user_3",
          "name": "Carol",
          "profile_image": "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png", // Unique image URL for Carol
          "messages": [
            {
              "message_id": "msg_21",
              "timestamp": "2024-08-13T13:00:00Z",
              "type": "text",
              "content": "Hey, I'm Carol.",
              "sender": "user"
            },
            {
              "message_id": "msg_22",
              "timestamp": "2024-08-13T13:01:00Z",
              "type": "text",
              "content": "Hello Carol! How can I assist you today?",
              "sender": "bot"
            },
            {
              "message_id": "msg_23",
              "timestamp": "2024-08-13T13:15:00Z",
              "type": "text",
              "content": "I need some information about your products.",
              "sender": "user"
            },
            {
              "message_id": "msg_24",
              "timestamp": "2024-08-13T13:16:00Z",
              "type": "text",
              "content": "What kind of products are you interested in?",
              "sender": "bot"
            },
            {
              "message_id": "msg_25",
              "timestamp": "2024-08-13T13:30:00Z",
              "type": "text",
              "content": "I’m interested in the new gadget you released.",
              "sender": "user"
            },
            {
              "message_id": "msg_26",
              "timestamp": "2024-08-13T13:31:00Z",
              "type": "text",
              "content": "The new gadget is available for $499. It comes with a one-year warranty.",
              "sender": "bot"
            },
            {
              "message_id": "msg_27",
              "timestamp": "2024-08-13T13:45:00Z",
              "type": "text",
              "content": "Can I get a discount if I buy two?",
              "sender": "user"
            },
            {
              "message_id": "msg_28",
              "timestamp": "2024-08-13T13:46:00Z",
              "type": "text",
              "content": "Yes, we offer a 10% discount for bulk purchases.",
              "sender": "bot"
            },
            {
              "message_id": "msg_29",
              "timestamp": "2024-08-13T14:00:00Z",
              "type": "text",
              "content": "Great! I’ll place the order now.",
              "sender": "user"
            },
            {
              "message_id": "msg_30",
              "timestamp": "2024-08-13T14:01:00Z",
              "type": "text",
              "content": "Thank you for your order, Carol!",
              "sender": "bot"
            }
          ]
        },
        {
          "user_id": "user_4",
          "name": "Dave",
          "profile_image": "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png", // Unique image URL for Dave
          "messages": [
            {
              "message_id": "msg_31",
              "timestamp": "2024-08-13T14:00:00Z",
              "type": "text",
              "content": "Hi, Dave here.",
              "sender": "user"
            },
            {
              "message_id": "msg_32",
              "timestamp": "2024-08-13T14:01:00Z",
              "type": "text",
              "content": "Hi Dave! How can I help you today?",
              "sender": "bot"
            },
            {
              "message_id": "msg_33",
              "timestamp": "2024-08-13T14:15:00Z",
              "type": "text",
              "content": "I’m having trouble with my order.",
              "sender": "user"
            },
            {
              "message_id": "msg_34",
              "timestamp": "2024-08-13T14:16:00Z",
              "type": "text",
              "content": "What seems to be the problem with your order?",
              "sender": "bot"
            },
            {
              "message_id": "msg_35",
              "timestamp": "2024-08-13T14:30:00Z",
              "type": "text",
              "content": "I received the wrong item.",
              "sender": "user"
            },
            {
              "message_id": "msg_36",
              "timestamp": "2024-08-13T14:31:00Z",
              "type": "text",
              "content": "I’m sorry to hear that. I’ll arrange for a replacement right away.",
              "sender": "bot"
            },
            {
              "message_id": "msg_37",
              "timestamp": "2024-08-13T14:45:00Z",
              "type": "text",
              "content": "Thank you for the quick response.",
              "sender": "user"
            },
            {
              "message_id": "msg_38",
              "timestamp": "2024-08-13T14:46:00Z",
              "type": "text",
              "content": "You’re welcome, Dave! We appreciate your patience.",
              "sender": "bot"
            },
            {
              "message_id": "msg_39",
              "timestamp": "2024-08-13T15:00:00Z",
              "type": "text",
              "content": "No problem, thanks again!",
              "sender": "user"
            },
            {
              "message_id": "msg_40",
              "timestamp": "2024-08-13T15:01:00Z",
              "type": "text",
              "content": "Have a great day!",
              "sender": "bot"
            }
          ]
        },
        {
          "user_id": "user_5",
          "name": "Eva",
          "profile_image": "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png", // Unique image URL for Eva
          "messages": [
            {
              "message_id": "msg_41",
              "timestamp": "2024-08-13T15:00:00Z",
              "type": "text",
              "content": "Hello, it's Eva.",
              "sender": "user"
            },
            {
              "message_id": "msg_42",
              "timestamp": "2024-08-13T15:01:00Z",
              "type": "text",
              "content": "Hi Eva! How can I assist you today?",
              "sender": "bot"
            },
            {
              "message_id": "msg_43",
              "timestamp": "2024-08-13T15:15:00Z",
              "type": "text",
              "content": "I’m interested in scheduling a meeting.",
              "sender": "user"
            },
            {
              "message_id": "msg_44",
              "timestamp": "2024-08-13T15:16:00Z",
              "type": "text",
              "content": "I can help with that. What time works for you?",
              "sender": "bot"
            },
            {
              "message_id": "msg_45",
              "timestamp": "2024-08-13T15:30:00Z",
              "type": "text",
              "content": "I’m available next Tuesday at 2 PM.",
              "sender": "user"
            },
            {
              "message_id": "msg_46",
              "timestamp": "2024-08-13T15:31:00Z",
              "type": "text",
              "content": "I’ve scheduled the meeting for next Tuesday at 2 PM.",
              "sender": "bot"
            },
            {
              "message_id": "msg_47",
              "timestamp": "2024-08-13T15:45:00Z",
              "type": "text",
              "content": "Thank you for your help!",
              "sender": "user"
            },
            {
              "message_id": "msg_48",
              "timestamp": "2024-08-13T15:46:00Z",
              "type": "text",
              "content": "You’re welcome, Eva! Looking forward to the meeting.",
              "sender": "bot"
            },
            {
              "message_id": "msg_49",
              "timestamp": "2024-08-13T16:00:00Z",
              "type": "text",
              "content": "See you then!",
              "sender": "user"
            },
            {
              "message_id": "msg_50",
              "timestamp": "2024-08-13T16:01:00Z",
              "type": "text",
              "content": "Have a great day!",
              "sender": "bot"
            }
          ]
        },
        {
          "user_id": "user_6",
          "name": "Frank",
          "profile_image": "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png", // Unique image URL for Frank
          "messages": [
            {
              "message_id": "msg_51",
              "timestamp": "2024-08-13T16:00:00Z",
              "type": "text",
              "content": "Hey there, Frank here.",
              "sender": "user"
            },
            {
              "message_id": "msg_52",
              "timestamp": "2024-08-13T16:01:00Z",
              "type": "text",
              "content": "Hello Frank! How can I help you today?",
              "sender": "bot"
            },
            {
              "message_id": "msg_53",
              "timestamp": "2024-08-13T16:15:00Z",
              "type": "text",
              "content": "I need assistance with a recent purchase.",
              "sender": "user"
            },
            {
              "message_id": "msg_54",
              "timestamp": "2024-08-13T16:16:00Z",
              "type": "text",
              "content": "What seems to be the issue with your purchase?",
              "sender": "bot"
            },
            {
              "message_id": "msg_55",
              "timestamp": "2024-08-13T16:30:00Z",
              "type": "text",
              "content": "I received a damaged product.",
              "sender": "user"
            },
            {
              "message_id": "msg_56",
              "timestamp": "2024-08-13T16:31:00Z",
              "type": "text",
              "content": "I’m sorry to hear that. I’ll arrange for a return or replacement.",
              "sender": "bot"
            },
            {
              "message_id": "msg_57",
              "timestamp": "2024-08-13T16:45:00Z",
              "type": "text",
              "content": "Thank you for sorting this out.",
              "sender": "user"
            },
            {
              "message_id": "msg_58",
              "timestamp": "2024-08-13T16:46:00Z",
              "type": "text",
              "content": "You’re welcome, Frank. We appreciate your understanding.",
              "sender": "bot"
            },
            {
              "message_id": "msg_59",
              "timestamp": "2024-08-13T17:00:00Z",
              "type": "text",
              "content": "Looking forward to resolving this.",
              "sender": "user"
            },
            {
              "message_id": "msg_60",
              "timestamp": "2024-08-13T17:01:00Z",
              "type": "text",
              "content": "Have a great day!",
              "sender": "bot"
            }
          ]
        }
      ]
    };

    function closeNotification() {
      const notifBox = document.querySelector('.notif-box');
      notifBox.style.display = 'none';
    }

    function generateChatList() {
      
      const chatList = document.getElementById('chat-list');
      chatList.innerHTML = ''; // Clear existing chat list
      data.users.forEach(user => {
        // Get the latest message
        const latestMessage = user.messages[user.messages.length - 1];
        const timestamp = new Date(latestMessage.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  
        // Create chat box
        const chatBox = document.createElement('div');
        chatBox.classList.add('chat-box');
        chatBox.onclick = () => showChat(user);
  
        // Create image box
        const imgBox = document.createElement('div');
        imgBox.classList.add('img-box');
        const img = document.createElement('img');
        img.classList.add('img-cover');
        img.src = user.profile_image;
        imgBox.appendChild(img);
        debugger;
        // Create chat details
        const chatDetails = document.createElement('div');
        chatDetails.classList.add('chat-details');
  
        // Create text head
        const textHead = document.createElement('div');
        textHead.classList.add('text-head');
        const userName = document.createElement('h4');
        userName.textContent = user.name;
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = timestamp; // Latest message timestamp
        textHead.appendChild(userName);
        textHead.appendChild(time);
  
        // Create text message
        const textMessage = document.createElement('div');
        textMessage.classList.add('text-message');
        const lastMessage = document.createElement('p');
        lastMessage.textContent = latestMessage.content; // Latest message content
        textMessage.appendChild(lastMessage);
  
        // Append details to chat box
        chatDetails.appendChild(textHead);
        chatDetails.appendChild(textMessage);
        chatBox.appendChild(imgBox);
        chatBox.appendChild(chatDetails);
        chatList.appendChild(chatBox);
      });
    }
  
    function showChat(user) {
      debugger;
      document.getElementById('left-container').classList.add('hidden');
      document.getElementById('right-container').classList.remove('hidden');
  
      document.getElementById('chat-name').innerHTML = `${user.name}<br><span>Online</span>`;
      document.getElementById('chat-image').src = user.profile_image;
  
      const chatContainer = document.getElementById('chat-container');
      chatContainer.innerHTML = ''; // Clear existing messages
  
      user.messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message-box', message.sender === 'user' ? 'user-message' : 'bot-message');
  
        const messageText = document.createElement('p');
        messageText.textContent = message.content;
        messageElement.appendChild(messageText);
  
        chatContainer.appendChild(messageElement);
      });
    }
  
    function showChatList() {
      document.getElementById('left-container').classList.remove('hidden');
      document.getElementById('right-container').classList.add('hidden');
    }
  
    function searchUsers(query) {
      const filteredUsers = data.users.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.messages.some(message => message.content.toLowerCase().includes(query.toLowerCase()))
      );
      generateSearchList(filteredUsers);
    }

    function generateSearchList(users) {
      const chatList = document.getElementById('chat-list');
      chatList.innerHTML = ''; // Clear existing chat list

      users.forEach(user => {
        // Get the latest message
        const latestMessage = user.messages[user.messages.length - 1];
        const timestamp = new Date(latestMessage.timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        // Create chat box
        const chatBox = document.createElement('div');
        chatBox.classList.add('chat-box');
        chatBox.onclick = () => showChat(user);

        // Create image box
        const imgBox = document.createElement('div');
        imgBox.classList.add('img-box');
        const img = document.createElement('img');
        img.classList.add('img-cover');
        img.src = user.profile_image;
        imgBox.appendChild(img);

        // Create chat details
        const chatDetails = document.createElement('div');
        chatDetails.classList.add('chat-details');

        // Create text head
        const textHead = document.createElement('div');
        textHead.classList.add('text-head');
        const userName = document.createElement('h4');
        userName.textContent = user.name;
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = timestamp; // Latest message timestamp
        textHead.appendChild(userName);
        textHead.appendChild(time);

        // Create text message
        const textMessage = document.createElement('div');
        textMessage.classList.add('text-message');
        const lastMessage = document.createElement('p');
        lastMessage.textContent = latestMessage.content; // Latest message content
        textMessage.appendChild(lastMessage);

        // Append details to chat box
        chatDetails.appendChild(textHead);
        chatDetails.appendChild(textMessage);
        chatBox.appendChild(imgBox);
        chatBox.appendChild(chatDetails);
        chatList.appendChild(chatBox);
      });
    }
    
    document.getElementById('search-input').addEventListener('input', (event) => {
      searchUsers(event.target.value);
      console.log(event.target.value);
    });

    generateChatList();