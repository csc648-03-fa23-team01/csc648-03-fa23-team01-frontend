import { Auth } from 'aws-amplify'

async function handleSignUp() {
  try {
    await Auth.signUp({
      username: 'jdoe',
      password: 'mysecurerandompassword#123',
      attributes: {
        email: 'me@domain.com',
        given_name: 'Jane',
        family_name: 'Doe',
        nickname: 'Jane',
        'custom:is_tutor' : 'False'
      }
    });
  } catch (e) {
    console.log(e)
  }
}

async function updateUserAttributes () {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const result = await Auth.updateUserAttributes(user, {
      email: 'me@anotherdomain.com',
      family_name: 'Lastname'
    });
    console.log(result); // SUCCESS
  } catch(err) {
    console.log(err);
  }
};


async function deleteUserAttributes() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const result = await Auth.deleteUserAttributes(user, ['family_name']);
    console.log(result); // SUCCESS
  } catch(err) {
    console.log(err);
  }
};
async function signOut() {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  async function currentSession() {
    try {
      const { accessToken, idToken, refreshToken } = await Auth.currentSession();
    } catch(err) {
      console.log(err);
    }
  };