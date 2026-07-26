import { useReveal } from '../hooks/useReveal';
import alpineDeluxeImg from '../assets/images/alpine-deluxe.jpg';
import chaletSuiteImg from '../assets/images/chalet-suite.jpg';
import skylineLoftImg from '../assets/images/skyline-loft.jpg';
import './RoomShowcase.css';

const rooms = [
  { id: 'alpine', name: 'Alpine Deluxe Room', image: alpineDeluxeImg, alt: 'Alpine Deluxe Room with neutral tones and warm wood accents' },
  { id: 'chalet', name: 'Chalet Suite', image: chaletSuiteImg, alt: 'Chalet Suite with wooden beams and warm ambient lighting' },
  { id: 'skyline', name: 'Skyline Loft', image: skylineLoftImg, alt: 'Skyline Loft with panoramic mountain views' },
];

function RoomCard({ room, index }) {
  const ref = useReveal();

  return (
    <div className={`room-card reveal reveal-delay-${index + 1}`} id={`room-${room.id}`} ref={ref}>
      <div className="room-card-image-wrapper">
        <img src={room.image} alt={room.alt} className="room-card-image" />
      </div>
      <div className="room-card-info">
        <span className="room-card-name">{room.name}</span>
        <a href="#" className="room-card-arrow" aria-label={`View ${room.name}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function RoomShowcase() {
  return (
    <section className="room-showcase" id="rooms">
      <div className="room-showcase-inner">
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} index={i} />
        ))}
      </div>
    </section>
  );
}
