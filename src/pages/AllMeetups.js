import MeetupList from '../components/layout/meetups/MeetupList';
import firstmeetup from '../images/first.png';
import secondmeetup from '../images/second.png';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: firstmeetup,
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: secondmeetup,
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
]
function AllMeetupPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
      <MeetupList meetups={DUMMY_DATA}/>
      </ul>
    </section>
  );
};
export default AllMeetupPage;