import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  
    <>
    
  <p>Select data to display</p>
  <p>
    <select id="sel" onchange="toggle()">
      <option value={1} selected>
        All events
      </option>
      <option value={2}>Event hosted</option>
      <option value={3}>Event Participated</option>
    </select>
  </p>
  <div
    id={1}
    style={{ display: "block", border: "solid 1px #CCC", padding: 10 }}
  >
    All Event Name: <input type="text" id="Allname" />
    ALL Event Date: <input type="text" id="AllDate" />
  </div>
  <p></p>
  
</>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { MyEvents: data }
  }
}

const MyEvents = ({ MyEvents }) => {
  console.log(MyEvents)

  return (
    <div>
      <h1>Events</h1>
      {MyEvents.map(MyEvents => (
        <div key={MyEvents.id}>
          <a className={styles.single}>
            <h3>{ MyEvents.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
