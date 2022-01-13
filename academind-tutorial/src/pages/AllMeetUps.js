import NavBar from "../components/NavBar";

const dummyData = [
  {
    id:'m1',
    title:'first meetup',
    image:'bridge1',
    adress:'Meetupstreet 1, 1234AB Meetup City',
    description: 'This is an amazing meetup'
  },
  {
    id:'m2',
    title:'second meetup',
    image:'bridge2',
    adress:'Meetupstreet 2, 1234AB Meetup City',
    description: 'This is an amazing meetup'
  },
  {
    id:'m3',
    title:'third meetup',
    image:'bridge3',
    adress:'Meetupstreet 3, 1234AB Meetup City',
    description: 'This is an amazing meetup'
  },
  {
    id:'m4',
    title:'fourth meetup',
    image:'bridge4',
    adress:'Meetupstreet 4, 1234AB Meetup City',
    description: 'This is an amazing meetup'
  }
]

export default function AllMeetUpsPage() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="section">
          <h1>All Meetups</h1>
          <ul>
            {dummyData.map((meetup) => {
              return (
                <li key={meetup.id}>{meetup.title}</li>
              )
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
