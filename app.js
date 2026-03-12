let bookings = [];

function submitBooking(){

let room = document.getElementById("room").value;
let society = document.getElementById("society").value.trim();
let start = document.getElementById("start").value;
let end = document.getElementById("end").value;
let name = document.getElementById("name").value.trim();
let message = document.getElementById("message");

if(room=="" || society=="" || start=="" || end=="" || name==""){
message.innerText = "Please fill all fields";
message.style.color = "red";
return;
}

if(end <= start){
message.innerText = "End time must be after start time";
message.style.color = "red";
return;
}

/* Check for double booking */
for(let b of bookings){
if(b.room == room){
if(start < b.end && end > b.start){
message.innerText = "This room is already booked at that time";
message.style.color = "red";
return;
}
}
}

/* Add booking if no conflict */
bookings.push({
room: room,
society: society,
start: start,
end: end,
name: name
});

message.innerText = "Booking confirmed for " + society + " in " + room + " from " + start + " to " + end;
message.style.color = "green";

showBookings();
}

function showBookings(){
let table = document.getElementById("bookingTable");

table.innerHTML = `
<tr>
<th>Room</th>
<th>Society</th>
<th>Time</th>
<th>Name</th>
</tr>
`;

for(let b of bookings){
table.innerHTML += `
<tr>
<td>${b.room}</td>
<td>${b.society}</td>
<td>${b.start} - ${b.end}</td>
<td>${b.name}</td>
</tr>
`;
}
}