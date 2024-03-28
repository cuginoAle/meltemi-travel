'use client';
import MessageIcon from '@/assets/message.svg';
import { InputBox } from './inputBox';
import { TextArea } from './textArea';
interface ContactFormProps {
  nomeStruttura: string;
  nomeIsola: string;
  className?: string;
  alloggi?: {
    nome: string;
    postiLetto: number;
  }[];
}

const ContactForm = ({
  nomeStruttura,
  nomeIsola,
  className = '',
  alloggi = [],
}: ContactFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;

    e.preventDefault();
    if (form.checkValidity()) {
      const formData = new FormData(form);

      const response = await fetch('/api/sendTgm', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Messaggio inviato');
      } else {
        alert('Errore invio messaggio');
      }
    }
  };
  return (
    <form
      action="/api/sendTgm"
      className={`rounded-md bg-white shadow-md p-4 flex flex-col gap-4 ${className}`}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="struttura" value={nomeStruttura} />
      <input type="hidden" name="isola" value={nomeIsola} />

      <fieldset className="flex flex-col gap-1">
        {alloggi.map((alloggio, index) => (
          <label key={alloggio.nome + index}>
            <input
              type="checkbox"
              name="alloggi"
              value={alloggio.nome}
              key={alloggio.nome}
            />
            <span className="pl-2">
              {alloggio.nome} (x{alloggio.postiLetto})
            </span>
          </label>
        ))}
      </fieldset>
      <InputBox
        name="numero_adulti"
        label="Adulti"
        type="number"
        defaultValue={1}
        required
      />
      <InputBox
        name="numero_bambini"
        label="Bambini"
        type="number"
        defaultValue={0}
      />

      <InputBox
        label="Dal"
        type="date"
        name="dal"
        placeholder="Al"
        min={Date.now()}
        required
      />
      <InputBox
        label="Al"
        type="date"
        name="al"
        placeholder="Al"
        min={Date.now()}
        required
      />

      <InputBox type="email" required name="email" label="Email" />
      <InputBox type="phone" name="phone" label="Telefono" />

      <TextArea name="note" label="Note" />

      <hr />

      <button className="px-4 py-2 bg-green-700 shadow-md text-white text-lg rounded-md">
        <span className="flex gap-4 items-center">
          <MessageIcon className="h-6" />
          <span>Invia richiesta</span>
        </span>
      </button>
    </form>
  );
};

export { ContactForm };
