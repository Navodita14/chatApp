
const API_BASE = "http://localhost:3000"; 
let conversations = [];


const convoList = document.getElementById("conversationList");


const fetchConversations = async () => {
    console.log("Fetching conversations...");
    try {
        const res = await fetch(`${API_BASE}/conversations`, {
            credentials: "include",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        
        
        if (data && Array.isArray(data.data)) {
            conversations = data.data;
            console.log(conversations);
            
        } else {

            console.error("API response did not contain a valid conversations array", data);
            conversations = [];
        }

        renderConversations();
    } catch (error) {
        console.error("Failed to fetch conversations:", error);
    }
}


function renderConversations(filter = "") {
    console.log("Rendering conversations...");
    convoList.innerHTML = "";
    conversations
        .forEach(c => {
            const li = document.createElement("li");
            li.className = "p-2 hover:bg-gray-700 cursor-pointer rounded";
            li.textContent = `${c.conversation_id}`;
            li.onclick = () => openConversation(c.id);
            convoList.appendChild(li);
        });
}

