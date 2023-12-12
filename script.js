

let comments = [
    {
        name: "Miroslav Novotný",
        date: new Date('2023-12-15T12:34:56Z'),
        text: "Hello World"
    },
    {
        name: "Filip Másilko",
        date: new Date('2023-01-02T12:34:56Z'),
        text: "I love my sister very much and her name is Filip"
    },
    {
        name: "Vito Kraus",
        date:new Date('2020-12-12T16:34:56Z'),
        text: "I love eating monkey ass"
    }
]

addComments();

let resultDiv = document.getElementById("result");

for (const comment of comments) {
    let div = document.createElement("div");
    div.className = "comment";
    let jmeno = document.createElement("h4");
    jmeno.innerText = comment.name;
    let datum = document.createElement("h5");
    datum.innerText = comment.date.toLocaleString();
    let text = document.createElement("p");
    text.innerText = comment.text;
    let div2 = document.createElement("div");
    div2.className = "commentInfo";
    div2.appendChild(jmeno);
    div2.appendChild(datum);
    div.appendChild(div2);
    div.appendChild(text);
    resultDiv.appendChild(div);
}

function addComments(){
    comments.push(
        {
            name: "Olivia Thompson",
            date: new Date('2023-09-28T14:20:10Z'),
            text: "Exploring the universe, one step at a time."
        },
        {
            name: "Nathan Williams",
            date: new Date('2023-06-15T21:45:30Z'),
            text: "Pizza is the answer, no matter the question."
        },
        {
            name: "Lila Chen",
            date: new Date('2023-11-05T10:12:40Z'),
            text: "Dance like nobody's watching."
        },
        {
            name: "Carlos Ramirez",
            date: new Date('2023-02-18T08:00:00Z'),
            text: "Coffee is my love language."
        },
        {
            name: "Isabella Park",
            date: new Date('2023-07-12T17:30:45Z'),
            text: "Dream big, work hard, stay focused."
        },
        {
            name: "Lucas Mendez",
            date: new Date('2023-04-03T12:56:20Z'),
            text: "Inventing the future, one code at a time."
        },
        {
            name: "Aria Patel",
            date: new Date('2023-10-19T09:10:15Z'),
            text: "Books are a uniquely portable magic."
        },
        {
            name: "Zane Walker",
            date: new Date('2023-08-28T15:40:00Z'),
            text: "Music is the soundtrack of my life."
        },
        {
            name: "Maya Kim",
            date: new Date('2023-01-30T20:18:30Z'),
            text: "Chasing sunsets and dreams."
        },
        {
            name: "Dylan Turner",
            date: new Date('2023-12-01T11:05:00Z'),
            text: "Life is a journey, not a destination."
        },
        {
            name: "Eva Fischer",
            date: new Date('2023-05-08T13:25:45Z'),
            text: "Kindness is my superpower."
        },
        {
            name: "Oscar Lopez",
            date: new Date('2023-03-22T16:30:10Z'),
            text: "Adventures await those who dare to dream."
        },
        {
            name: "Mia Chang",
            date: new Date('2023-09-10T07:55:20Z'),
            text: "Embracing the beauty of imperfection."
        },
        {
            name: "Jordan Baker",
            date: new Date('2023-06-06T18:12:30Z'),
            text: "Sunshine mixed with a little hurricane."
        },
        {
            name: "Leo Martinez",
            date: new Date('2023-11-15T09:40:15Z'),
            text: "Creating moments that become memories."
        }
    );
}