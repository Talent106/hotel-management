import Room1 from "../assets/rooms/all/1-1.jpg";
import Room2 from "../assets/rooms/all/2-1.jpg";
import Room3 from "../assets/rooms/all/3-1.jpg";
import Room4 from "../assets/rooms/all/4-1.jpg";
import Room5 from "../assets/rooms/all/5-1.jpg";
import Room6 from "../assets/rooms/all/6-1.jpg";
import Room7 from "../assets/rooms/all/7-1.jpg";
import Room8 from "../assets/rooms/all/8-1.jpg";
import Room9 from "../assets/rooms/all/9-1.jpg";
import Room1_2 from "../assets/rooms/all/1-2.jpg";
import Room1_3 from "../assets/rooms/all/1-3.jpg";
import Room1_4 from "../assets/rooms/all/1-4.jpg";
import Room1_5 from "../assets/rooms/all/1-5.jpg";
import Room2_2 from "../assets/rooms/all/2-2.jpg";
import Room2_3 from "../assets/rooms/all/2-3.jpg";
import Room3_2 from "../assets/rooms/all/3-2.jpg";
import Room3_3 from "../assets/rooms/all/3-3.jpg";
import Room4_2 from "../assets/rooms/all/4-2.jpg";
import Room4_3 from "../assets/rooms/all/4-3.jpg";
import Room4_4 from "../assets/rooms/all/4-4.jpg";
import Room5_2 from "../assets/rooms/all/5-2.jpg";
import Room5_3 from "../assets/rooms/all/5-3.jpg";
import Room5_4 from "../assets/rooms/all/5-4.jpg";
import Room6_2 from "../assets/rooms/all/6-2.jpg";
import Room6_3 from "../assets/rooms/all/6-3.jpg";
import Room6_4 from "../assets/rooms/all/6-4.jpg";
import Room7_2 from "../assets/rooms/all/7-2.jpg";
import Room7_3 from "../assets/rooms/all/7-3.jpg";
import Room7_4 from "../assets/rooms/all/7-4.jpg";
import Room8_2 from "../assets/rooms/all/8-2.jpg";
import Room8_3 from "../assets/rooms/all/8-3.jpg";
import Room9_2 from "../assets/rooms/all/9-2.jpg";
import Room9_3 from "../assets/rooms/all/9-3.jpg";
import Room9_4 from "../assets/rooms/all/9-4.jpg";

const AllRooms = [
    {
        id: 1,
        name: "Privilege Room with 2 Single Beds",
        src: Room1,
        content: "Upgraded bedroom with flat-screen TV, complimentary high speed WiFi, Nespresso coffee machine, robe and slippers. Sleeps 2 adults.",
        max: 2,
        bed: "King size bed(s) x1",
        reviews: 5,
        price: 330,
        data: {Room1_2, Room1_3, Room1_4, Room1_5}
    },
    {
        id: 2,
        name: "Privilege Room with 1 Double Bed, sea view and balcony",
        src: Room2,
        max: 2,
        bed: "King size bed(s) x1",
        price: 400,
        reviews: 4,
        data: {Room2_2, Room2_3},
        content: "Upgraded bedroom with sea views and balcony, flat-screen TV, complimentary high speed WiFi, Nespresso coffee machine, robes and slippers. Sleeps up to 2 adults."
    },
    {
        id: 3,
        name: "Classic accessible room with 1 double bed",
        src: Room3,
        max: 2,
        bed: "Double bed(s) x1",
        price: 300,
        reviews: 3,
        data: {Room3_2, Room3_3},
        content: "Accessible rooms feature wheelchair turning space, alarm cords, wheel-in shower, bathroom grab rails, accessible bed, wardrobe, mirror and writing facilities. Audible and visual or vibrating fire alarms on request or installed."
    },
    {
        id: 4,
        name: "Privilege Room with 1 Double Bed, sea view and balcony",
        src: Room4,
        max: 2,
        bed: "Double bed(s) x1",
        price: 350,
        reviews: 5,
        data: {Room4_2, Room4_3, Room4_4},
        content: "Upgraded bedroom with sea view, flat-screen TV, complimentary high speed WiFi, Nespresso coffee machine, robe and slippers. Sleeps 2 adults."
    },
    {
        id: 5,
        name: "Privilege Room with 2 Single Beds",
        src: Room5,
        max: 2,
        bed: "King size bed(s) x2",
        price: 330,
        reviews: 5,
        data: {Room5_2, Room5_3, Room5_4},
        content: "Upgraded bedroom with sea view, flat-screen TV, complimentary high speed WiFi, Nespresso coffee machine, robe and slippers. Sleeps 2 adults."
    },
    {
        id: 6,
        name: "Privilege Room with 2 Single Beds",
        src: Room6,
        max: 2,
        bed: "King size bed(s) x2",
        price: 330,
        reviews: 4,
        data: {Room6_2, Room6_3, Room6_4},
        content: "Accessible rooms feature wheelchair turning space, alarm cords, wheel-in shower, bathroom grab rails, accessible bed, wardrobe, mirror and writing facilities. Audible and visual or vibrating fire alarms on request or installed."
    },
    {
        id: 7,
        name: "Privilege Room with 1 Double Bed",
        src: Room7,
        max: 2,
        bed: "King size bed(s) x1",
        price: 320,
        reviews: 3,
        data: {Room7_2, Room7_3, Room7_4},
        content: "Accessible rooms feature wheelchair turning space, alarm cords, wheel-in shower, bathroom grab rails, accessible bed, wardrobe, mirror and writing facilities. Audible and visual or vibrating fire alarms on request or installed."
    },
    {
        id: 8,
        name: "Privilege Room with 1 Double Bed, sea view and balcony",
        src: Room8,
        max: 2,
        bed: "King size bed(s) x1",
        price: 380,
        reviews: 2,
        data: {Room8_2, Room8_3},
        content: "Upgraded bedroom with sea view, flat-screen TV, complimentary high speed WiFi, Nespresso coffee machine, robe and slippers. Sleeps 2 adults."
    },
    {
        id: 9,
        name: "Privilege Room with 1 Double Bed",
        src: Room9,
        max: 2,
        bed: "King size bed(s) x1",
        price: 310,
        reviews: 5,
        data: {Room9_2, Room9_3, Room9_4},
        content: "Upgraded bedroom with sea view, flat-screen TV, complimentary high speed WiFi, Nespresso coffee machine, robe and slippers. Sleeps 2 adults."
    },
];

export default AllRooms;