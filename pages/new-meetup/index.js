import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    // console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title> Add a new Meetups</title>
        <meta
          name="description"
          content="Add your own Meetup create amazing Networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
