import { faker } from '@faker-js/faker/locale/en';
import {Message} from "@/data/model/Message";
import {User} from "@/data/model/User";
import {Thread} from "@/data/model/Thread";

export function mockUsers(length: number) {
  const createRowData = rowIndex => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const gender = faker.name.gender(true) as 'female' | 'male';
    const name = faker.name.findName(firstName, lastName, gender);
    const avatar = faker.image.avatar();

    const city = faker.address.city();
    const street = faker.address.street();
    const email = faker.internet.email();
    const postcode = faker.address.zipCode();
    const phone = faker.phone.number();
    const amount = faker.finance.amount(1000, 90000);

    const age = Math.floor(Math.random() * 30) + 18;
    const stars = Math.floor(Math.random() * 10000);
    const followers = Math.floor(Math.random() * 10000);
    const rating = 2 + Math.floor(Math.random() * 3);
    const progress = Math.floor(Math.random() * 100);

    return {
      id: rowIndex + 1,
      name,
      firstName,
      lastName,
      avatar,
      city,
      street,
      postcode,
      email,
      phone,
      gender,
      age,
      stars,
      followers,
      rating,
      progress,
      amount
    };
  };

  return Array.from({ length }).map((_, index) => {
    return createRowData(index);
  });
}

export function mockTreeData(options: {
  limits: number[];
  labels: string | string[] | ((layer: number, value: string, faker) => string);
  getRowData?: (layer: number, value: string) => any[];
}) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;

  const data = [];
  const mock = (list, parentValue?: string, layer = 0) => {
    const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value = parentValue ? parentValue + '-' + (index + 1) : index + 1 + '';
      const children = [];
      const label = Array.isArray(labels) ? labels[layer] : labels;

      let row: any = {
        label: typeof label === 'function' ? label(layer, value, faker) : label + ' ' + value,
        value
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value)
        };
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data);

  return data;
}

export function mockMessages(length : number) : Message[] {
  const createMessage = (index : number) : Message => {
    const fullName = faker.name.fullName();
    const avatar = faker.image.avatar();
    const message = faker.hacker.phrase();

    return {
        id: index + 1,
        user: {
            id: index + 1,
            name: fullName,
            avatar: avatar
        },
        content: message
    }
  }

    return Array.from({ length }).map((_, index) => {
      return createMessage(index);
    });
}

export function mockUser(index : number | undefined) : User {
  const fullName = faker.name.fullName();
  const avatar = faker.image.avatar();

  let mockedUser = {
    id: index ? index + 1 : 0,
    name: fullName,
    avatar: avatar
  };

  console.log("Generating mocked current user");
  console.log(mockedUser);

  return mockedUser
}

export function mockDifferentUsers(length: number) : User[] {
  return Array.from({ length }).map((_, index) => {
    return mockUser(index);
  });
}

// Generate a fake markdown body with multiple lines and different components
function generateFakeMarkdown() {
    let markdown = "";

    for (let i = 0; i < 2; i++) {
        markdown += generateHackerParagraph(5) + "\n\n";
    }

    // Include bullet point list
    markdown += `\n\n
        - ${generateHackerParagraph(1)}
        - ${generateHackerParagraph(1)}
        - ${generateHackerParagraph(1)}
    `

    return markdown;
}

export function mockThread(index : number | undefined) : Thread {
  const title = `${firstLetterUpperCase(faker.hacker.ingverb())} ${faker.hacker.noun()}`;
  let content = generateHackerParagraph(2);

  content = "... " + content;
  content = content +  ` <Highlight>${faker.hacker.phrase()}</Highlight> ` + faker.hacker.phrase();
  content = content + " ...";

  let mockedThread : Thread = {
    id: index ? index + 1 : 0,
    title: title,
    user: mockUser(0),
    relatedTextbookContent: content,
    contentBody : generateFakeMarkdown(),
    messages: mockMessages(faker.datatype.number({min: 1, max: 5}))
  };

  console.log("Generating mocked thread");
  console.log(mockedThread);

  return mockedThread;
}

function firstLetterUpperCase(str: string) : string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function mockThreads(length: number) : Thread[] {
    return Array.from({ length }).map((_, index) => {
        return mockThread(index);
    });
}

function generateHackerParagraph(sentenceNumber: number) : string {
    let paragraph = "";

    for (let i = 0; i < sentenceNumber; i++) {
        paragraph += faker.hacker.phrase() + " ";
    }

    paragraph.replace("!", ".");

    return paragraph;
}