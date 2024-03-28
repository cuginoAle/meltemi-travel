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

export async function GET(request: Request) {
  const originIp = request.headers.get('x-forwarded-for')?.split(',')[0];

  if (originIp === ALLOWED_IP) {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get('text');
    if (text) {
      await _send(
        {
          chat_id: CHAT_ID,
          text,
          //         : `<b>bold</b>, <strong>bold</strong>
          // <i>italic</i>, <em>italic</em>
          // <u>underline</u>, <ins>underline</ins>
          // <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
          // <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
          // <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
          // <a href="http://www.example.com/">inline URL</a>
          // <a href="tg://user?id=123456789">inline mention of a user</a>
          // <tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
          // <code>inline fixed-width code👍</code>
          // <pre>pre-formatted fixed-width code block</pre>
          // <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
          // <blockquote>Block quotation started\nBlock quotation continued\nThe last line of the block quotation</blockquote>`,
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
