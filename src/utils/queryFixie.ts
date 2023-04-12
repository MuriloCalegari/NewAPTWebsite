// src/graphql.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import gql from 'graphql-tag';
import fetch from 'isomorphic-fetch';

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql', fetch });

const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_FIXIE_API_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export async function getLastMessage(query: string): Promise<string | null> {
    const CREATE_SESSION = gql`
    mutation CreateSession($frontendAgentId: String) {
      createSession(sessionData: { frontendAgentId: $frontendAgentId }) {
        session {
          handle
          frontendAgentId
        }
      }
    }
  `;

    const SEND_MESSAGE = gql`
    mutation Post($handle: String!, $text: String!) {
      sendSessionMessage(messageData: { session: $handle, text: $text }) {
        message {
          text
        }
      }
    }
  `;

    const GET_MESSAGES = gql`
    query getMessages($handle: String!) {
      sessionByHandle(handle: $handle) {
        messages {
          id
          text
          sentBy {
            handle
          }
          type
          inReplyTo {
            id
          }
          timestamp
        }
      }
    }
  `;

    try {
        const createSessionResult = await client.mutate({
            mutation: CREATE_SESSION,
            variables: { frontendAgentId: 'silaslenihan/example-agent' },
        });

        const sessionHandle = createSessionResult.data.createSession.session.handle;

        await client.mutate({
            mutation: SEND_MESSAGE,
            variables: { handle: sessionHandle, text: query },
        });

        const getMessagesResult = await client.query({
            query: GET_MESSAGES,
            variables: { handle: sessionHandle },
        });

        const messages = getMessagesResult.data.sessionByHandle.messages;
        return messages.length > 0 ? messages[messages.length - 1].text : null;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
