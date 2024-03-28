const BOT_TOKEN = process.env.BOT_TOKEN!;
const CHAT_ID = process.env.CHAT_ID!;
const ALLOWED_IP = process.env.ALLOWED_IP;

interface MessageBody {
  chat_id: string;
  text: string;
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2' | 'None';
  reply_markup?: string;
}
const botUrl = `https://api.telegram.org/bot${BOT_TOKEN}`;
const sendMessageUrl = new URL(`${botUrl}/sendMessage`).toString();

export async function POST(request: Request) {
  const originIp = request.headers.get('x-forwarded-for')?.split(',')[0];

  if (originIp === ALLOWED_IP) {
    const formData = await request.formData();

    const from = new Date(
      (formData.get('dal') as string) || '',
    ).toLocaleDateString();
    const to = new Date(
      (formData.get('al') as string) || '',
    ).toLocaleDateString();

    const text = `<b>${formData.get('isola')} - ${formData.get('struttura')}</b>

<b>Adulti: </b> ${formData.get('numero_adulti')}
<b>Bambini:</b> ${formData.get('numero_bambini') || 0}

<b>Dal:     </b> ${from}
<b>Al:       </b> ${to}

<b>🏡:</b> ${formData.getAll('alloggi').join(' - ')}
<b>✉️: </b> ${formData.get('email')}
<b>☎️: </b> ${formData.get('phone')}

${formData.get('note') && `<blockquote>${formData.get('note')}</blockquote>`}
    `;

    if (text) {
      await _send(
        {
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
        },
        sendMessageUrl,
      );
    }
  }

  return new Response('Ok ' + originIp);
}

const _send = (body: MessageBody, urlString: string = sendMessageUrl) => {
  const formData = new FormData();
  Object.keys(body).forEach((key) => {
    // logger.info(key, body[key as keyof (MessageBody)] as string);

    formData.append(key, body[key as keyof MessageBody] as string);
  });

  return fetch(urlString, {
    method: 'POST',
    body: formData,
  }).then((res) => {
    if (res.status !== 200) {
      console.error('Error sending message', res);
    }

    return res;
  });
};
